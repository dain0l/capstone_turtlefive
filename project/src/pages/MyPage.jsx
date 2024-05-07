import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import imglogo from '../img/tree.jpg';
import axios from 'axios'; // axios 라이브러리 불러오기
import React, { useState, useEffect } from 'react';


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
`;

const ProfileImageContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 1px solid #000;
    margin-top: 100px;
`;

const BottomContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap; /* 버튼이 한 줄로 보이게 해줌 */
    gap: 10px; /* 버튼 사이의 간격 조정 */
`;

const LinkButtonStyle = styled(Link)`
    color: #FFF;
    background-color: #779787;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #50655b;
    }
`;


const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const AltText = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #666;
    font-size: 1rem;
    white-space: nowrap; /* 텍스트가 길어도 한 줄로 표시되도록 설정 */
`;

/*
const Name = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const Info = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
`;
*/

// 프로필 컴포넌트 정의
function MyPage() {
    const [userInfo, setUserInfo] = useState(null);
    const [name, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        // 사용자 정보를 불러오는 함수 실행
        fetchUserInfo();
    }, []);

    const fetchUserInfo = () => {
        fetch('/mypage', { // userId는 현재 로그인한 사용자의 ID입니다.
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 필요한 경우 인증 토큰 등을 추가해주세요.
            },
        })
        .then(response => response.json())
        .then(data => {
            setUserInfo(data);
            // 알람 빈도수와 웹캠 실행 시간을 상태에 설정
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
    };

    return (
        
        <Container>
            <header style={header}>
            <h1>docturtle🐢</h1>
            </header>
            <ProfileImageContainer>
                <ProfileImage src={imglogo} alt="" />
                <AltText> DOCTURTLE </AltText>
            </ProfileImageContainer>
            <p>Name: {userInfo?.name}</p>
            <p>Email: {userInfo?.email}</p>
            <p>Phone: {userInfo?.phoneNo}</p>
            <p>알림빈도수: {userInfo?.alarmCount}</p>
            <p>웹캠 실행시간: {userInfo?.webcamDuration}분</p>
                    
            {/* 추가적인 사용자 정보 */}
            <BottomContainer>
                <LinkButtonStyle to="/login">Log in</LinkButtonStyle>
                <LinkButtonStyle to="/logout">Log out</LinkButtonStyle>
            </BottomContainer>
        </Container>
    );
}

export default MyPage;
