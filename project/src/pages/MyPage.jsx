import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; 
import imglogo from '../img/tree.jpg';
import api from '../services/api';
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
    overflow-x: hidden;
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
    color: #5EAE89;
    background-color: #E8FAF2;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #5EAE89;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 추가된 box-shadow 스타일 */

    &:hover {
        background-color: #C5E1A5;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* hover 상태에서의 그림자 변경 */
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

const UserInfoContainer = styled.span`

    align-items: flex-start; /* 좌측 정렬 */
    max-width: 600px; /* 최대 넓이 설정 */
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


 // 로그아웃 함수
 const handleLogout = async () => {
    const token = localStorage.getItem('accessToken');
    try {
        const response = await api.post('/logout', {
            accessToken: token 
        });

        if (response.status >= 200 || response.status < 300)  {
            console.log('Successfully logged out');
            localStorage.removeItem('accessToken'); // 로컬 스토리지에서 accessToken 제거
        } else {
            throw new Error('Logout failed');
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
};

// 프로필 컴포넌트 정의
function MyPage() {
    const [userInfo, setUserInfo] = useState(null);
    const navigator = useNavigate();

    const goToHome = ()=>{
        navigator('/home');
    };

    useEffect(() => {
        // 사용자 정보를 불러오는 함수 실행
        fetchUserInfo();
    }, []);
    const fetchUserInfo = () => {
        api.get('/mypage')
        .then(response => {
            setUserInfo(response.data); // 변경된 부분
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });
    };

    return (
        
        <Container>
            <header style={header}>
            <h1 onClick={goToHome}>docturtle🐢</h1>
            </header>
            <ProfileImageContainer>
                <ProfileImage src={imglogo} alt="" />
                <AltText> DOCTURTLE </AltText>
            </ProfileImageContainer>
            <UserInfoContainer>
            <p>name: {userInfo?.name}</p>
            <p>e-mail: {userInfo?.email}</p>
            <p>phone: {userInfo?.phoneNo}</p>
            <p>알림빈도수: {userInfo?.alarmCount}</p>
            <p>웹캠 실행시간: {userInfo?.webcamDuration}분</p>

            </UserInfoContainer>
                    
            {/* 추가적인 사용자 정보 */}
            
            
            <BottomContainer>
            <LinkButtonStyle to="/home" onClick={goToHome}>Home</LinkButtonStyle>
            <LinkButtonStyle to="/logout" onClick={handleLogout}>Log out</LinkButtonStyle>
            </BottomContainer>
        </Container>
    );
}

export default MyPage;
