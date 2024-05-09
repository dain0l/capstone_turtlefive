import React from 'react';
import CameraCom from "../components/Examine/CameraCom";
import LinkCom from '../components/Examine/LinkCom';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: #779787; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #50655b;
  }
`;

function formatLocalDateToISOString() {
    const offset = new Date().getTimezoneOffset() * 60000; // getTimezoneOffset()은 분 단위로 시간대 차이를 반환합니다.
    const localISOTime = (new Date(Date.now() - offset)).toISOString().slice(0, 19);
    return localISOTime;
}

function Turtle() {
    const navigator = useNavigate();

    const start =formatLocalDateToISOString(); 
localStorage.setItem("startTime",start)

const sendToWebcamlog = async () =>{
    const startTime = localStorage.getItem("startTime");
    const closeTime =formatLocalDateToISOString();
    try{
        const response = await api.post('/webacam/log',{
            startTime: startTime,
            endTime : closeTime
        });
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        console.log('weblog sent successfully');
    } catch(error){
        console.error("Failed to send webcamlog",error);
    }
    navigator('/register');
};

const backgroundContainerStyle = {
    display: "flex",    
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
};

const titleStyle = {
    //backgroundColor: '#f5f1ee84',
    color: "#333",
    fontFamily: "Roboto",
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginTop: "50px",
    marginBottom: "2.19rem",
};

const containerStyle = {
    display: 'flex', // flexbox 사용
    justifyContent: 'space-around',
    alignItems: 'center', // 수직 가운데 정렬
    width: '80%', // 부모 요소의 너비를 화면 너비의 80%로 지정
    margin: '0 auto', // 수평 가운데 정렬
};



return (
    <div style={backgroundContainerStyle}>

        <div style={titleStyle}>거북목 검사하기</div>
        <div style={containerStyle}>
            <CameraCom /> {/* CameraCom 컴포넌트를 왼쪽에 배치합니다. */}
            <LinkCom /> {/* LinkCom 컴포넌트를 오른쪽에 배치합니다. */}
        </div>
        <Button onClick={sendToWebcamlog}>종료하기</Button>
    </div>
);
}

export default Turtle;
