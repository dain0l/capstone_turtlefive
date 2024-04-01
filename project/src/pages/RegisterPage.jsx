import Beforehand from '../components/Home/Beforehand';

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 




const HeaderContainer = styled.div`
    display: flex;
    background: #DFF0D8;
    color: #FBFDF5;
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const RectangleContainer = styled.div`
    background-color: #4a4e4c;
    padding: 20px; 
    border-radius: 10px; /* 직사각형의 모서리를 둥글게 만듭니다. */
    margin-top: 20px; /* 상단 여백을 설정합니다. */
    display: flex;
    justify-content: center;
    flex-direction: column; /* 버튼을 세로로 배치하기 위해 세로 방향으로 배치합니다. */
    align-items: center; /* 버튼을 가운데 정렬합니다. */
    width: 1600px; /* 가로 크기를 300px로 설정합니다. */
    height: 200px; /* 세로 크기를 200px로 설정합니다. */
    margin-left: 33px; /* 좌측 여백을 설정합니다. */
`;

const Logo = styled.div`
    color: #2E7D32;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Navigation = styled.nav`
    display: flex;
`;

const StyledLink = styled(Link)`
    color: #2E7D32;
    text-decoration: none;
    margin-right: 2rem;

    &:hover {
        text-decoration: underline;
    }
`;

// 스타일링된 버튼
const StyledButton = styled.button`
    font-size: 2rem;
    padding: 0.5rem 1rem;
    background-color: #779787;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #50655b;
    }
`;

function Header() {
    return (
        <div>
            <HeaderContainer>
                <Logo>TurtleFive</Logo>
                <Navigation>
                    <StyledLink to="#">Home</StyledLink>
                    <StyledLink to="#">About</StyledLink>
                    <StyledLink to="#">Contact</StyledLink>
                    <StyledLink to="/login">Login</StyledLink> 
                    <StyledLink to="/explain">Explain</StyledLink> 
                </Navigation>
            </HeaderContainer>

            <RectangleContainer>
                <Link to="/turtle-inspection">
                    <StyledButton>거북목 검사하러가기</StyledButton>
                </Link>

                

            </RectangleContainer>

            <RectangleContainer>
            <div><Beforehand /></div>
            </RectangleContainer>

        </div>

            

    );
}

export default Header;
