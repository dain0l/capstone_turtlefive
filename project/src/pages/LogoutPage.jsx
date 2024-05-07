import React from 'react';
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

  &:hover {
    background-color: #C5E1A5;
  }
`;

function LogoutPage() {
  return (
    <LogoutContainer>
      <Logo>TurtleFive</Logo>
      <Message>You have been successfully logged out.</Message>
      <br></br>
      <StyledLink to="/login">Login again</StyledLink>
    </LogoutContainer>
  );
}

export default LogoutPage;
