import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: linear-gradient(to bottom, rgba(184, 253, 214, 0.562) 20%, rgba(197, 193, 193, 0.95) 40%, rgba(68, 68, 81, 0.676) 40%, rgba(22, 22, 33, 0.813) 100%);
  }

  h1 {
    margin: 5px;
    font-size: 36px;
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: relative;

  &.visible {
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 4px);
    height: 3px;
    background-color: #3a4f2cd3;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    width: 2px;
    height: 100%;
    background-color: #DFF0D8;
    z-index: -1;
  }

  img {
    max-width: 80%;
    max-height: 50vh;
    height: auto;
    margin-top: 20px;
    opacity: 0.5;
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.8);
    transition: opacity 2s ease-in-out;
  }

  &#section1 {
    align-items: flex-start;
    padding-left: 20px;

    &.visible img {
      opacity: 1;
      animation: ${fadeInLeft} 1.2s;
    }
  }

  &#section2 {
    align-items: flex-end;
    padding-right: 20px;

    &.visible img {
      opacity: 1;
      animation: ${fadeInRight} 1.2s;
    }
  }

  &#section3 {
    align-items: flex-start;
    padding-left: 20px;

    &.visible img {
      opacity: 1;
      animation: ${fadeInBottom} 1.2s;
    }
  }

  &#section4 {
    align-items: center;

    &.visible img {
      opacity: 1;
      animation: ${fadeInTop} 1.2s;
    }

    &.visible #startButton {
      display: block;
    }
  }
`;

const LinkButtonStyle = styled(Link)`
  color: #FBFDF5;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 100px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #FFFFFF;
    text-decoration: none;
  }
`;

const StartPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Section className="section" id="section1">
        <h1>Welcome to</h1>
        <h1 style={{ marginLeft: '100px' }}>TurtleFIve</h1>
        <img src={image1} alt="Image 1" />
      </Section>
      <Section className="section" id="section2">
        <h2>About Us</h2>
        <p style={{ marginRight: '30px' }}>거북목 예방을 위해 만들어진 홈페이지입니다.</p>
        <p >docturtle 사이트에 대한 일부 정보입니다.</p>
        <img src={image3} alt="Image 2" />
      </Section>
      <Section className="section" id="section3">
        <h2>Our Services</h2>
        <p>웹캠을 활용한 자세 교정 서비스를 제공합니다.</p>
        <img src={image2} alt="Image 3" />
      </Section>
      <Section className="section" id="section4">
        <h2>Start</h2>
        <p>시작해볼까요?</p>
        <img src={image4} alt="Image 4" />
        <LinkButtonStyle to="/home">START</LinkButtonStyle>
      </Section>
    </>
  );
};

export default StartPage;