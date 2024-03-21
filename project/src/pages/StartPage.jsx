import React from 'react';
import styled from 'styled-components';
import Toolbar from '../components/toolbar/Toolbar'; // Toolbar 컴포넌트를 import

const BackStyle = styled.div`
    display: flex;
    background-color: #E6E6E6;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ImgStyle = styled.img`
    width: 200px;
    height: auto;
`;

const TitleStyle = styled.div`
    color: #FBFDF5;
    font-family: Roboto;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

function StartPage() {
    return (
        <BackStyle>
            <Toolbar /> {/* Toolbar 컴포넌트 추가 */}
            
            <TitleStyle>Turtle Five</TitleStyle>
        </BackStyle>
    );
}

export default StartPage;
