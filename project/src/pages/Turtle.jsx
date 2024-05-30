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
      // 웹캠이 실행되는 동안 매 분마다 webcam 상태를 업데이트하는 타이머 설정
      const timer = setInterval(() => {
        const currentTime = formatLocalDateToISOString();
        const duration = (new Date(currentTime) - new Date(startTime)) / 1000 / 60;
        setWebcam((prevWebcam) => prevWebcam + duration); // webcam 상태의 최신 값을 사용하여 상태 업데이트
      }, 60000); // 60000ms = 1분
    
      // 컴포넌트가 언마운트될 때 타이머 해제
      return () => clearInterval(timer);
    }, [startTime]);
    



    const fetchUserInfo = () => {
      api.get('/mypage')
      .then(response => {
          setAlaram(response.data.alarmCount);
          setWebcam(response.data.webcamDuration);
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