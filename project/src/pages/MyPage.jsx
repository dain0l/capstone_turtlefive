import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


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

const Name = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const Info = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
`;

// 프로필 컴포넌트 정의
function MyPage() {
    return (
        
        <Container>
                        <header style={header}>
             <h1>docturtle🐢</h1>
             </header>
            <ProfileImageContainer>
                <ProfileImage src="src/img/tree.jpg" alt="" />
                <AltText>프로필 이미지</AltText>
            </ProfileImageContainer>
            <Name>사용자 이름</Name>
            <Info>번호: 010-1234-5678</Info>
            <Info>성별: 여자</Info>
            <Info>가입일: 가입일자</Info>
            {/* 추가적인 사용자 정보 */}
            <BottomContainer>
                <LinkButtonStyle to="/login">로그인 하러가기</LinkButtonStyle>
                <LinkButtonStyle to="/singup">회원가입 하러가기</LinkButtonStyle>
            </BottomContainer>
        </Container>
    );
}

export default MyPage;
