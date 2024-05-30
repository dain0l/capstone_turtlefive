import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; 
import imglogo from '../img/tree.jpg';
import api from '../services/api';
import React, { useState, useEffect } from 'react';



// header 스타일 정의
const header = {
    marginTop: '50px',
    padding: '20px',
    width: '100%',
    textAlign: 'center',
};

const StyledLink = styled(Link)`
  color: #f5ede6d6;
  text-decoration: none;
  margin-right: 2rem;

  &:hover {
    background-color: #f5ede6d6; /* 호버 시 배경색 변경 */
    text-decoration: underline;
  }
`;

const AllContainer = styled.div`
    min-height: 100vh; /* 최소 높이를 화면 높이만큼으로 설정 */
`;

const HeaderContainer = styled.div`
  display: flex;
  background: #515151;
  color: #288A72;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
`;

const NavigationWrapper = styled.nav`
  display: flex;
`;


const Logo = styled.div`
  color: #f5ede6d6;
  font-size: 1.5rem;
  font-weight: bold;
`;

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
    margin-top: 50px;
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

const WarningText1 = styled.span`
  color: orange;
  font-size: 0.9rem;
  margin-left: 10px;
`;

const WarningText2 = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-left: 10px;
`;

const UserInfoContainer = styled.div`
    align-items: flex-start; /* 좌측 정렬 */
    max-width: 600px; /* 최대 넓이 설정 */
    background-color: #ffffff98;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    width: 100%;
    text-align: left;
    margin-top: 1rem;
    font-size: 20px;

`;

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

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false로 설정

    }); 


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const navigator = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('accessToken');
        try {
        const response = await api.post('/logout', {
            accessToken: token
        });

        if (response.status >= 200 || response.status < 300) {
            console.log('Successfully logged out');
            localStorage.removeItem('accessToken'); // 로컬 스토리지에서 accessToken 제거
            setIsLoggedIn(false); // 로그인 상태 업데이트
        } else {
            throw new Error('Logout failed');
        }
        } catch (error) {
        console.error('Logout error:', error);
        }
    };

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
        <AllContainer>

            <HeaderContainer>
                <Logo to="/home">Doc. Turtle</Logo>
                <NavigationWrapper>
                {isLoggedIn ? (
                    <>
                    <StyledLink to="/explain">explain</StyledLink>
                    </>
                ) : (
                    <StyledLink to="/login">login</StyledLink> // 로그아웃 상태일 때 로그인 버튼 표시
                )}
                <StyledLink to="/chatbot">chatbot</StyledLink>
                <StyledLink to="/home">home</StyledLink>
                </NavigationWrapper>
            </HeaderContainer>
            <Container>
                <header style={header}>
                <h1 onClick={goToHome}>{userInfo?.name}님의 마이페이지</h1>  </header>
                <ProfileImageContainer>
                    <ProfileImage src={imglogo} alt="" />
                    <AltText> DOCTURTLE </AltText>
                </ProfileImageContainer>
                <UserInfoContainer>
                <p>name: {userInfo?.name}</p>
                <p>e-mail: {userInfo?.email}</p>
                <p>phone: {userInfo?.phoneNo}</p>    
                <p>
                    알림빈도수: <span style={{ color: userInfo?.alarmCount > 100 ? 'red' : userInfo?.alarmCount > 50 ? 'orange' : 'inherit' }}>{userInfo?.alarmCount}</span>
                    {userInfo?.alarmCount > 100 ? (
                        <WarningText2>위험</WarningText2>
                    ) : userInfo?.alarmCount > 50 ? (
                        <WarningText1>주의</WarningText1>
                    ) : null}
                </p>
                <p>웹캠 실행시간: {userInfo?.webcamDuration}분</p>
                </UserInfoContainer>
            </Container>
        </AllContainer>
    );
}

export default MyPage;
