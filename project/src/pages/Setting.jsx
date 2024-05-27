import styled from 'styled-components';
import imglogo from '../img/tree.jpg';
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
const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

function Setting() {

    <Container>
            <header style={header}>
            <h1 onClick={goToHome}>docturtle🐢</h1>
            </header>
            <ProfileImageContainer>
                <ProfileImage src={imglogo} alt="" />
                <AltText> DOCTURTLE </AltText>
            </ProfileImageContainer>
            

        </Container>


}

export default Setting;