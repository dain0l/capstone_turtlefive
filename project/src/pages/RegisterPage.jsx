import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Link import 추가

const HeaderContainer = styled.div`
    display: flex;
    background: #DFF0D8;
    color: #FBFDF5;
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    color: #2E7D32;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Navigation = styled.nav`
    display: flex;
`;

const StyledLink = styled(Link)` // NavLink를 Link로 변경
    color: #2E7D32;
    text-decoration: none;
    margin-right: 2rem;

    &:hover {
        text-decoration: underline;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo>TurtleFive</Logo>
            <Navigation>
                <StyledLink to="#">Home</StyledLink>
                <StyledLink to="#">About</StyledLink>
                <StyledLink to="#">Contact</StyledLink>
                <StyledLink to="/login">Login</StyledLink> {/* to 속성에 로그인 페이지 경로 지정 */}
            </Navigation>
        </HeaderContainer>
    );
}

export default Header;
