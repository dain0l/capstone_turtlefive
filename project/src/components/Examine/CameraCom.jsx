import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { Holistic, POSE_CONNECTIONS, FACEMESH_TESSELATION } from "@mediapipe/holistic";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors } from "@mediapipe/drawing_utils";
import { checkZValues } from "../Algorithms/checkZValues";
import { checkDistance } from "../Algorithms/checkDistance"; 
import { checkAngle } from "../Algorithms/checkAngle";


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


const CameraCom = () => { 
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    let alarmTimeout = useRef(null);
  
    useEffect(() => {
      const holistic = new Holistic({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
        },
      });

  
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
              const distanceBool = distance <= 0.15;
              // const angleBool = (angle <= 60 || angle >= 130);

              console.log("D:"+ distanceBool +distance + "\n" + "Z: "+ZvaluesBool + Zvalues);

              if(chinLandmark){ // 152번 랜드마크가 인식될 경우 
                 if( distanceBool && ZvaluesBool ){
                  canvasCtx.font = "10px Arial";
                  canvasCtx.fillStyle = "red";
                  canvasCtx.fillText("You have to fix your pose.", 10, 30);

                  if (!alarmTimeout.current) { // 현재 타이머가 실행 중이지 않을 때만 새 타이머 설정
                    alarmTimeout.current = setTimeout(() => {
                        sendAlarmLog(); // 백엔드로 알람 로그 보내는 함수 호출
                        alarmTimeout.current = null; // 타이머 초기화
                    }, 60000); // 1분 후 실행
                }
                }else {
                  canvasCtx.font = "10px Arial";
                  canvasCtx.fillStyle = "green";
                  canvasCtx.fillText("Your pose is normal", 10, 30);
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
  
      if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
        const camera = new Camera(webcamRef.current.video, {
          onFrame: async () => {
            await holistic.send({image: webcamRef.current.video});
          },
          width: 640,
          height: 480,
        });
        camera.start();
      }
    }, []);
  
     // 백엔드로 알람 로그를 보내는 함수
     const sendAlarmLog = async () => {
      const currentTime = new Date().toISOString(); // 현재 시간을 ISO 형식으로 변환
      try {
          const response = await fetch('/webcam/alarmlog', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  dateTime: currentTime,
              }),
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          // 성공적으로 로그를 보냈을 때의 처리를 여기에 작성할 수 있습니다.
          console.log('Alarm log sent successfully');
      } catch (error) {
          console.error('Failed to send alarm log', error);
      }
  };
    return (
      <CameraContainer>
        <Webcam ref={webcamRef} style={{ width: '100%', height: '100%' }} />
        <StyledCanvas ref={canvasRef} style={{ width: '100%', height: '100%' }}/>
    </CameraContainer>
    );
  }

export default CameraCom;