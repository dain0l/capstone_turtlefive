import React, { useRef } from 'react';
import Webcam from 'react-webcam';


const CameraCom = () => {
    const webcamRef = useRef(null);

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

    const handleStartClick = () => {
        fetchWebcamOn();
    };

    const handleStopClick = () => {
        fetchWebcamOff();
    };

    return (
        <div>
            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                style={{ width: '100%', height: 'auto' }}
            />
            <button onClick={handleStartClick}>웹캠 켜기</button>
            <button onClick={handleStopClick}>웹캠 끄기</button>
        </div>
    );
};

export default CameraCom;