import React, { useState,useEffect } from 'react';
import CameraCom from "../components/Examine/CameraCom";
import LinkCom from '../components/Examine/LinkCom';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../index.css";

const BackgroundContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: #37474F; /* Darker grey for title */
  font-size: 3rem;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 2.19rem;
  font-family: 'TheJamsil5Bold';
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  width: 100%;
  margin-bottom: 20px; /* 하단 여백 추가 */
`;


const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-around; 
  align-items: center;
  width: 90%; 
  height: 85%; /* 수정: 화면 높이의 80%를 차지하도록 설정 */
  margin: 0 auto;
  background-color: #ffffffc3;
  border-radius: 20px; 
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80%; /* 수정: 화면 높이의 80%를 차지하도록 설정 */
`;

const Button = styled.button`
  padding: 12px 30px;
  background-color:  #37474F; /* Green */
  border: none;
  color: white;
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-out;
  font-family: 'TheJamsil5Bold';

  &:hover {
    background-color: #C5E1A5;
    transform: scale(1.1);
  }
`;

function formatLocalDateToISOString() {
  const offset = new Date().getTimezoneOffset() * 60000; // getTimezoneOffset() returns the difference in minutes
  const localISOTime = (new Date(Date.now() - offset)).toISOString().slice(0, 19);
  return localISOTime;
}


function Turtle() {
  const navigator = useNavigate();
  const [startTime] = useState(formatLocalDateToISOString());
  const [alarm, setAlaram] = useState(0);
  const [webcam, setWebcam] = useState(0);

  const sendToWebcamlog = async () => {
    const endTime = formatLocalDateToISOString();
    console.log("startTime:" + startTime, endTime);
     try {
      const response = await api.post('/webcam/log', {
        startTime: startTime,
        endTime: endTime
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Network response was not ok');
      }
      console.log('Webcam log sent successfully');
    } catch (error) {
      console.error('Failed to send Webcam log', error);
    }
    navigator('/home');
  };

      useEffect(() => {
      fetchUserInfo();
    });
    useEffect(() => {
      // 컴포넌트가 마운트될 때의 시간을 기록
      const mountedTime = Date.now();
      
      const timer = setInterval(() => {
        // 현재 시간과 마운트될 때의 시간 차이를 계산하여 분으로 변환
        const elapsedTimeInMinutes = Math.floor((Date.now() - mountedTime) / 60000);
        
        // 이전 웹캠 실행 시간을 가져와서 경과 시간을 더해서 업데이트
        setWebcam(elapsedTimeInMinutes);
      }, 60000); // 1분마다 업데이트
      
      return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 해제
    }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행됨

    



    const fetchUserInfo = () => {
      api.get('/mypage')
      .then(response => {
          setAlaram(response.data.alarmCount);
      })
      .catch(error => {
          console.error('Error fetching user info:', error);
      });
  };
  

  const handleStopCamera = () => {
    sendToWebcamlog(); // Call the log sending function when stopping
  };

  return (
    <BackgroundContainer>
      <Title>자세 교정 시스템</Title>
      <Container>
      <InfoContainer>
          <span>알림빈도수: {alarm}</span>
          <span>웹캠 실행시간: {webcam}분</span>
        </InfoContainer>
        <ContentContainer>
          <CameraCom setAlarm={setAlaram} alarm={alarm}/> 
          <LinkCom />
        </ContentContainer>
        <Button onClick={handleStopCamera}>종료하기</Button>
      </Container>
    </BackgroundContainer>
  );
}

export default Turtle;