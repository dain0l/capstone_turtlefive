import React, { useEffect, useRef } from 'react';

const CameraCom = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const fetchWebcamOn = async () => {
            try {
                const response = await fetch('/api/webcam/on', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ webcamStatus: 'ON' }),
                });

                if (!response.ok) {
                    throw new Error('웹캠을 켜는 요청에 실패했습니다.');
                }

                console.log('웹캠을 성공적으로 켜는 요청을 보냈습니다.');
            } catch (error) {
                console.error('웹캠을 켜는 요청 중 에러가 발생했습니다:', error);
            }
        };

        const fetchWebcamOff = async () => {
            try {
                const response = await fetch('/api/webcam/off', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ webcamStatus: 'OFF' }),
                });

                if (!response.ok) {
                    throw new Error('웹캠을 끄는 요청에 실패했습니다.');
                }

                console.log('웹캠을 성공적으로 끄는 요청을 보냈습니다.');
            } catch (error) {
                console.error('웹캠을 끄는 요청 중 에러가 발생했습니다:', error);
            }
        };

        fetchWebcamOn(); // 페이지가 로드될 때 웹캠을 켜는 요청을 보냅니다.
        fetchWebcamOff(); // 페이지가 로드될 때 웹캠을 끄는 요청을 보냅니다.

        // 여기에 미디어 파이프 등의 초기화 및 설정 코드를 추가할 수 있습니다.
    }, []);

    const boxStyle = {
        padding: '',
        width: '400%', // 상자의 너비를 화면 너비의 80%로 지정
        maxWidth: '1300px', // 최대 너비를 300px로 제한
        height: '700px', // 상자의 높이 고정
        backgroundColor: '#ffffff', // 하얀색 배경
        margin: '0 auto', // 수평 가운데 정렬
        //marginLeft: '5%', // 왼쪽 여백을 설정하여 왼쪽으로 이동
        borderRadius: '20px', // 둥근 모서리 반지름을 20px로 설정
        position: 'relative', // 상자를 상대적 위치로 설정합니다.
    };

    return (
        <div style={boxStyle}>
            <video ref={videoRef} autoPlay style={{ width: '100%', height: '100%' }}></video>
        </div>
    );
};

export default CameraCom;
class AuthenticatedData {
    constructor(clientId, posturePercentage, rankPercentage) {
      this.clientId = clientId;
      this.posturePercentage = posturePercentage;
      this.rankPercentage = rankPercentage;
    }
  
    // 메소드: get으로 /percentage/authenticated
    getAuthenticated() {
      return {
        clientId: this.clientId,
        posturePercentage: this.posturePercentage,
        rankPercentage: this.rankPercentage
      };
    }
  
    // rankPercentage가 90이면 상위 10%를 의미하는 메소드
    getRankDescription() {
      if (this.rankPercentage === 90) {
        return "상위 10%";
      } else {
        return "기타"; // 다른 경우에 대한 처리를 추가할 수 있습니다.
      }
    }
  }
  
  // 예시 데이터 생성
  const authenticatedData = new AuthenticatedData("exampleClientId", 80, 90);
  
  // /percentage/authenticated 엔드포인트 요청에 대한 응답
  console.log(authenticatedData.getAuthenticated());
  
  // rankPercentage에 따른 설명 출력
  console.log(authenticatedData.getRankDescription());
  