import Beforehand from '../components/Home/Beforehand';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import chart from '../img/chart.png';

const HeaderContainer = styled.div`
    display: flex;
    background: #DFF0D8;
    color: #FBFDF5;
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
`;

const RectangleContainer = styled.div`
    background-color: #4a4e4c;
    padding: 20px; 
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 1600px;
    height: 250px;
    margin-left: 33px;
    flex: 0 0 calc(50% - 33px); /* 행의 너비를 50%로 설정하고 왼쪽 여백을 고려합니다. */
`;

const Rectangle2Container = styled.div`
    background-color: #4a4e4c;
    padding: 20px; 
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%; /* 반응형을 위해 50%로 설정합니다. */
    height: 250px;
    margin-left: 33px;
`;

const StyledFooter = styled.footer`
    background-color: rgba(0, 0, 0, 0.452);
    color: #ffffffc3;
    padding: 2px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center; /* 수평 중앙 정렬 */
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
        background-color: #DFF0D8; /* 호버 시 배경색 변경 */
        text-decoration: underline;
    }
`;

const Row = styled.div`
    display: flex;
    width: 99%;
`;

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

const Bar = styled.div`
    width: 100%;
    height: 50px;
    background-color: #2E7D32;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #205d25;
    }
`;

function Header() {
    return (
        <div>
            <HeaderContainer>
                <Logo>TurtleFive</Logo>
                <Navigation>
                    <StyledLink to="/chartPage">1week-chart</StyledLink>
                    <StyledLink to="#">Contact</StyledLink>
                    <StyledLink to="/login">Login</StyledLink> 
                    <StyledLink to="/explain">Explain</StyledLink> 
                    <StyledLink to="/myPage">MyPage</StyledLink>
                </Navigation>
            </HeaderContainer>
            <RectangleContainer>
                <Link to="/turtle">
                    <StyledButton>거북목 검사하러가기</StyledButton>
                </Link>
            </RectangleContainer>
            <RectangleContainer>
                <div><Beforehand /></div>
            </RectangleContainer>
            <Row>
                <Rectangle2Container>
                <ProfileImage src={chart} alt="" />
                </Rectangle2Container>
                <Rectangle2Container>
                    <Link to="/percentPage">
                        <Bar>+</Bar>
                    </Link>
                </Rectangle2Container>
            </Row>
            <StyledFooter>
                <p>&copy; 2024 docturtle website</p>
            </StyledFooter>
        </div>
    );
}

export default Header;
