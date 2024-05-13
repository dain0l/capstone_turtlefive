import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: #2E7D32;
  padding: 0.5rem 1rem;
  background-color: #DFF0D8;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    background-color: #C5E1A5;
  }
`;



function LogoutPage() {

   // 로그인 상태를 관리하는 상태 변수
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   // 컴포넌트가 마운트될 때 로그인 상태를 확인
   useEffect(() => {
       const token = localStorage.getItem('accessToken');
       setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false로 설정
   }, []);

  return (
    <LogoutContainer>
      <Logo>TurtleFive</Logo>
      <Message>You have been successfully logged out.</Message>
      <br></br>
      <StyledLink to="/login">Login again</StyledLink>
      <StyledLink to="/home">Home again</StyledLink>
    </LogoutContainer>
  );
}

export default LogoutPage;
