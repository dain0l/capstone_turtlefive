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
    background: linear-gradient(to bottom, rgba(184, 253, 214, 0.562) 20%, rgba(68, 68, 81, 0.676) 40%, rgba(22, 22, 33, 0.813) 100%);
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
      opacity: 0.9;
      animation: ${fadeInLeft} 1.2s;
    }
  }

  &#section2 {
    align-items: flex-end;
    padding-right: 20px;

    &.visible img {
      opacity: 0.3; /* 반투명하게 설정 */
      position: absolute;
      top: 80px; /* 이미지를 아래로 20px 이동 */
      width: 50%; /* 이미지의 너비를 부모 요소의 100%로 설정 */
      height: auto; /* 이미지의 높이를 자동으로 조절 */
    }

    h1, p,h2,h6 {
      z-index: 1; /* 텍스트가 이미지 위에 표시되도록 설정 */
      position: absolute;
      animation: ${fadeInTop} 2s;
    }
    h1 {
      top : 20px;
    }
    p {
      background-color: rgba(255, 255, 255, 0.7); /* 하얀색 반투명한 배경색 */
      padding: 10px;
      border-radius: 30px; /* 동그란 테두리 */
      top : 220px;
    }
    h3 {
      background-color: rgba(255, 255, 255, 0.5); /* 하얀색 반투명한 배경색 */
      padding: 10px;
      border-radius: 30px; /* 동그란 테두리 */
      top : 220px;
    }
  }

  

  &#section3 {
    align-items: flex-start;
    padding-left: 20px;

    &.visible img {
      opacity: 1;
      animation: ${fadeInBottom} 1.2s;
    }

    .hover-span {
      background-color: #ffffff8d;
      margin-right: 20px;
      padding: 10px;
      transition: background-color 0.3s;
    }
    
    .hover-span:hover {
      background-color: #ffffff;
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
        <h1 style={{ marginLeft: '100px' }}>' TurtleFIve '</h1>
        <img src={image1} alt="Image 1" />
        <div className="overlay"></div>
      </Section>
      <Section className="section" id="section2">
  <h1 style={{ marginTop: '100px' }}>자세교정,  docturtle과</h1>
  <h1 style={{ marginTop: '150px' }}>함께 해야 하는 이유 세 가지</h1>
  <p style={{ marginBottom: '720px', marginRight: '280px' }}>#자세를 정확히</p>
  <p style={{ marginBottom: '720px', marginRight: '190px' }}>#거북목</p>
  <p style={{ marginBottom: '720px' }}>#직접 교정 할 수 있도록</p>
  
  <h2 style={{ position: 'absolute', left: '40px', top: '100px' }}>첫째,</h2>
  <h2 style={{ position: 'absolute', left: '40px', top: '130px' }}>docturtle은  <span style={{ textDecoration: 'underline', color: 'green' }}>자세를 올바르게</span> 만들 수 있습니다.</h2>
  <h6 style={{ position: 'absolute', left: '40px', top: '180px' }}>올바른 자세는 건강의 기본입니다. docturtle은 당신의 자세를 정확히 분석하여 개선할 수 있는 방법을 제공합니다.</h6>
  
  <h2 style={{ position: 'absolute', left: '40px', top: '270px' }}>둘째,</h2>
  <h2 style={{ position: 'absolute', left: '40px', top: '300px' }}>docturtle은 <span style={{ textDecoration: 'underline', color: 'green' }}>거북목을 예방</span>할 수 있습니다.</h2>
  <h6 style={{ position: 'absolute', left: '40px', top: '350px' }}>거북목 증후군은 목과 어깨 통증의 주요 원인 중 하나입니다. docturtle은 체계적인 교정 프로그램을 통해 거북목을 예방하고 치료합니다.</h6>
  
  <h2 style={{ position: 'absolute', left: '40px', top: '440px' }}>셋째,</h2>
  <h2 style={{ position: 'absolute', left: '40px', top: '470px' }}>docturtle은 직접 교정 할 수 있도록 도와줄 수 있습니다.</h2>
  <h6 style={{ position: 'absolute', left: '40px', top: '520px' }}>스스로 자세를 교정하는 것은 어렵지 않습니다. docturtle의 맞춤형 솔루션을 통해 집에서도 쉽게 직접 자세를 교정할 수 있습니다.</h6>


  <h4 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: '320px', WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>바른자세를 되찾으세요!</h4>
  <h4 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: '350px', WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>docturtle이 함께합니다.</h4>

 <h3 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: '400px' }}> docturtle에 대해 알아볼까요? </h3>

  <img src={image2} alt="Image 2" />
</Section>

      <Section className="section" id="section3">
        <h2>Our Services</h2>
        <p>웹캠을 활용한 자세 교정 서비스를 제공합니다.</p>
        <h1 style={{ position: 'absolute', right: '50px', top: '200px' }}> | 추천 대상자</h1>
        <h3 style={{ position: 'absolute', right: '40px', top: '300px', fontSize: '20px' }}>
          <span className="hover-span">일자목</span>
          <span className="hover-span">거북목</span>
          <span className="hover-span">굽은동</span>
          <span className="hover-span">척추측만증</span>
        </h3>
        <h3 style={{ position: 'absolute', right: '40px', top: '360px', fontSize: '20px' }}>
          <span className="hover-span">골반틀어짐</span>
          <span className="hover-span">어깨비대칭</span>
          <span className="hover-span">직장인</span>
          <span className="hover-span">학생</span>
        </h3>
        <h1 style={{ position: 'absolute', right: '50px', top: '500px' }}> | 추천 서비스</h1>
        <h3 style={{ position: 'absolute', right: '40px', top: '600px', fontSize: '20px' }}>
          <span className="hover-span">상위 퍼센테이지</span>
          <span className="hover-span">챗봇 서비스</span>
        </h3>
        <h3 style={{ position: 'absolute', right: '40px', top: '660px', fontSize: '20px' }}>
          <span className="hover-span">자세 교정 서비스</span>
          <span className="hover-span">차트 데이터를 활용한 일주일간의 알림 빈도 분석</span>
        </h3>
        <h4 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: '320px', WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>몸이 불편한 것 같아요..</h4>
  <h4 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: '350px', WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>docturtle을 이용해보세요!</h4>
        <h3 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: '400px', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', borderRadius: '30px' }}>궁금하신 사항이 있으신가요?</h3>

        <img src={image3} alt="Image 3" />
      </Section>
      <Section className="section" id="section4">
        <h2>Let's Go</h2>
        <p>시작해볼까요?</p>
        <img src={image4} alt="Image 4" />
        <LinkButtonStyle to="/home">START</LinkButtonStyle>
      </Section>
    </>
  );
};

export default StartPage;