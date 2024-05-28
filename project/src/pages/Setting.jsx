import styled from 'styled-components';
import imglogo from '../img/tree.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CameraCom from '../components/Examine/CameraCom';

// header 스타일 정의
const header = {
    backgroundColor: '#f5f1ee84',
    padding: '20px',
    marginBottom: '25px',
    width: '100%',
    textAlign: 'center',
};

// 스타일링된 컴포넌트 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    overflow-x: hidden;
`;



// 아직 수정중 
// 실행시켜보지 않음 !!!!!!!!!!!!11
// 화요일날 다시 수정할거임 !!

const Setting = () => {

    
    const navigator = useNavigate();

    const goToHome = ()=>{
        navigator('/home');
    };

    // 알람 상태 관리
    const [isAlarmOn, setIsAlarmOn] = useState(true);

    // 알람 상태 변경 함수
    const toggleAlarm = () => {
        setIsAlarmOn(!isAlarmOn);
    };

    const handleFixAlarm = () => {
        //fixAlarm(); // CameraCom.jsx에서 가져온 fixAlarm 함수 호출
    };

    return (

        
        <Container>
            <header style={header}>
            <h1 onClick={goToHome}>docturtle🐢</h1>
            </header>
            

            <button onClick={toggleAlarm}>
                    {isAlarmOn ? '알람 끄기' : '알람 켜기'}
            </button>
            <button onClick={handleFixAlarm}>알람 수정</button>

        </Container>
    );
};

export default Setting;