function WebcamOffButton() {
    const handleWebcamOffClick = async () => {
      try {
        // 여기에 웹캠을 끄는 API 요청을 구현합니다.
        const response = await fetch(`/api/${clientId}/webcam/log`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // 요청 본문에서 웹캠 로그 데이터를 보냅니다.
          // 예시로, 웹캠이 꺼졌다는 상태를 서버로 보내는 것을 나타낼 수 있습니다.
          body: JSON.stringify({ webcamStatus: 'OFF' }),
        });
  
        if (!response.ok) {
          throw new Error('웹캠을 끄는 데 실패했습니다.');
        }
  
        // 성공적으로 웹캠을 끄는 요청을 처리했다면, 여기에서 추가적인 처리를 할 수 있습니다.
        console.log('웹캠이 성공적으로 꺼졌습니다.');
      } catch (error) {
        console.error('웹캠을 끄는 중 에러가 발생했습니다:', error);
      }
    };
  
    return (
      <button onClick={handleWebcamOffClick}>웹캠 끄기</button>
    );
  }