import Webcam from 'react-webcam';
import styled from 'styled-components';
import { Holistic, POSE_CONNECTIONS, FACEMESH_TESSELATION } from "@mediapipe/holistic";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors } from "@mediapipe/drawing_utils";
import { checkZValues } from "../Algorithms/checkZValues";
import { checkDistance } from "../Algorithms/checkDistance"; 
import { checkAngle } from "../Algorithms/checkAngle";
import api from '../../services/api';
import React, { useRef, useEffect } from 'react';


const CameraContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
`;

//알림 소리 추가 
//https://docturtle.site/image/sound.mp3
const alarmSound = new Audio('/image/sound.mp3'); // 알림 소리 파일 URL


function formatLocalDateToISOString() {
  const offset = new Date().getTimezoneOffset() * 60000; // getTimezoneOffset()은 분 단위로 시간대 차이를 반환합니다.
  const localISOTime = (new Date(Date.now() - offset)).toISOString().slice(0, 19);
  return localISOTime;
}

//function fixAlarm(){
//  let notificationPermission = Notification.permission;
//  if (notificationPermission === "granted") {
//     //Notification을 이미 허용한 사람들에게 보여주는 알람창
//      new Notification('You have to fix your pose!!', {
//          body: '올바른 자세를 유지해주세요.',
//          icon:"https://docturtle.site/image/turtle9.png"
//       });
//   } else if (notificationPermission !== 'denied') {
//       //Notification을 거부했을 경우 재 허용 창 띄우기
//       Notification.requestPermission(function (permission) {
//           if (permission === "granted") {
//               new Notification('You have to fix your pose!!', {
//                   body: '올바른 자세를 유지해주세요.',
//                   icon:"https://docturtle.site/image/turtle9.png"
//               });
//           }else {
//               alert("알람 허용이 거부되었습니다.")
//           }
//       });
//   }
// }

function fixAlarm(){
  let notificationPermission = Notification.permission;
  
  function showNotification() {
    new Notification('You have to fix your pose!!', {
      body: '올바른 자세를 유지해주세요.',
      icon: "https://docturtle.site/image/turtle9.png"
    });
    alarmSound.play(); // 알림 소리 재생
  }
  
  if (notificationPermission === "granted") {
    showNotification();
  } else if (notificationPermission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        showNotification();
      } else {
        alert("알람 허용이 거부되었습니다.");
      }
    });
  }
}


const CameraCom = () => { 
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    let alarmTimeout = useRef(null);
    const cameraRef = useRef(null); // Camera 인스턴스를 저장할 ref 추가

  //미디어 파이프 관련 함수
    useEffect(() => {
      const holistic = new Holistic({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
        },
      });
      const cleanup = () => {
        holistic.close(); // holistic 인스턴스를 닫음
        if (cameraRef.current) {
          cameraRef.current.stop(); // Camera 인스턴스 종료
        }
        clearTimeout(alarmTimeout.current);
        
      };

  
      holistic.onResults((results) => {
          const canvasCtx = canvasRef.current.getContext("2d");
          canvasCtx.save();
          canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          canvasCtx.drawImage(results.image, 0, 0, canvasRef.current.width, canvasRef.current.height);
  
          drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {color: '#00FF00', lineWidth: 1.5});
          drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {color: '#FFFFFF', lineWidth: 0.5});
  
          const leftShoulder = results.poseLandmarks && results.poseLandmarks[11];
          const rightShoulder = results.poseLandmarks && results.poseLandmarks[12];
  
          if (rightShoulder && leftShoulder) {

  
              const shoulderMidPoint = [
                (rightShoulder.x + leftShoulder.x) / 2,
                (rightShoulder.y + leftShoulder.y) / 2,
                (rightShoulder.z + leftShoulder.z) / 2
              ];
  
              const noseLandmark = results.faceLandmarks && results.faceLandmarks[0];
              const chinLandmark = results.faceLandmarks && results.faceLandmarks[152];
  
              // z값을 이용해서 거북목 자세인지 판단 -> 코와 어깨중심 - 해리
              const Zvalues= checkZValues(noseLandmark, shoulderMidPoint); 
              //턱끝과 어깨 중심 사이 거리(distance) - 다은
              const distance = checkDistance(chinLandmark, shoulderMidPoint);
              //턱끝과 어깨 중심의 2차원 각도 계산(angle) - 다은
              const angle = checkAngle(chinLandmark, leftShoulder, shoulderMidPoint);

              const ZvaluesBool =  Zvalues >= 0.38;
              const distanceBool = distance <= 0.1;
              const angleBool = (angle <= 60 || angle >= 130);

              //console.log("D:"+ distanceBool +distance + "\n" + "Z: "+ZvaluesBool + Zvalues);

              if(chinLandmark){ // 152번 랜드마크가 인식될 경우 
                 if( distanceBool || ZvaluesBool || angleBool){
                  canvasCtx.font = "10px Arial";
                  canvasCtx.fillStyle = "red";
                  canvasCtx.fillText("You have to fix your pose.", 10, 30);

                  if (!alarmTimeout.current) { // 현재 타이머가 실행 중이지 않을 때만 새 타이머 설정
                    alarmTimeout.current = setTimeout(() => {
                        // 타이머가 실행될 때 조건을 다시 확인
                        if (distanceBool || ZvaluesBool || angleBool) {
                            fixAlarm(); // 조건이 여전히 참이라면 알람 보내기
                            sendAlarmLog(); // 백엔드로 알람 로그 보내는 함수 호출
                        }
                        alarmTimeout.current = null; // 타이머 초기화
                    }, 3000); // 5초 후 실행(테스트때문에 임의로 해둔 시간!!)
                }
                }else {
                  canvasCtx.font = "10px Arial";
                  canvasCtx.fillStyle = "green";
                  //canvasCtx.fillText("Your pose is normal", 10, 30);
                   // 조건이 거짓이면 현재 설정된 타이머 취소
                   if (alarmTimeout.current) {
                    clearTimeout(alarmTimeout.current);
                    alarmTimeout.current = null;
                }
                }
              }else{ // 0번 랜드마크 인식이 안될 경우 -> 예외 처리
                canvasCtx.font = "10px Arial";
                  canvasCtx.fillStyle = "red";
                  canvasCtx.fillText("No recognized...", 10, 30);
              }
              
          }
          canvasCtx.restore();
        });
  
        if (webcamRef.current && webcamRef.current.video) {
          const camera = new Camera(webcamRef.current.video, {
            onFrame: async () => {
              if (webcamRef.current && webcamRef.current.video) {
                await holistic.send({image: webcamRef.current.video});
              }
            },
            width: 1600,
            height: 900,
          });
          camera.start();
          cameraRef.current = camera; // Camera 인스턴스를 저장할 ref 추가
        }
      // useEffect 내에서 반환하는 함수는 컴포넌트가 언마운트될 때 실행됨
      return cleanup;
    }, []);
  


 // 백엔드로 알람 로그를 보내는 함수
 const sendAlarmLog = async () => {
  const currentTime = formatLocalDateToISOString(); // 현재 시간을 ISO 형식으로 변환

  try {
    // axios 인스턴스를 사용하여 POST 요청을 보냄
    const response = await api.post('/webcam/alarmlog', {
      dateTime: currentTime,
    });
    if (response.status <= 200 || response.status >= 300) {
      throw new Error('Network response was not ok');
    }
    console.log('Alarm log sent successfully');
  } catch (error) {
    console.error('Failed to send alarm log', error);
  }
};

    return (
      <CameraContainer>
        <Webcam ref={webcamRef} style={{ width: '90%', height: '100%' }} />
        <StyledCanvas ref={canvasRef} style={{ width: '90%', height: '100%' }}/>
    </CameraContainer>
    );
  }

export default CameraCom;