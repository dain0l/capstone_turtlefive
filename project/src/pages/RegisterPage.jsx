import Beforehand from '../components/Home/Beforehand';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {data1, data2 } from '../components/Data/data';

import turtle1 from '../img/turtle1.jpg';
import turtle2 from '../img/turtle2.jpg';
import turtle3 from '../img/turtle3.jpg';
import turtle4 from '../img/turtle4.jpg';
import turtle5 from '../img/turtle5.jpg';
import turtle6 from '../img/turtle6.jpg';
import turtle7 from '../img/turtle7.jpg';

import {
    BarChart,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


/*
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imglogo from '../img/tree.jpg';
*/

//import chart from '../img/chart.png';


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





const RectangleContainer = styled.div`
    background-color: #4a4e4c;
    padding: 20px; 
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%; /* 너비를 100%로 설정 */
    max-width: 1600px; /* 최대 너비 지정 */
    height: 250px;
    margin-left: 33px;
    flex: 0 0 calc(50% - 33px);
    overflow: hidden; /* 내부 컨텐츠가 넘치지 않도록 설정 */
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
    width: 100%; /* 반응형을 위해 50%로 설정합니다. */
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


const NavigationWrapper = styled.nav`
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

const StyledBar = styled.div`
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

     // 로그인 상태를 관리하는 상태 변수
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     // 컴포넌트가 마운트될 때 로그인 상태를 확인
     useEffect(() => {
         const token = localStorage.getItem('accessToken');
         setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false로 설정
     }, []);
 
     // 로그아웃 함수
     const handleLogout = async () => {
         const token = localStorage.getItem('accessToken');
         try {
             const response = await fetch('/logout', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                 },
                 body: JSON.stringify({ accessToken: token })
             });
 
             if (response.ok) {
                 console.log('Successfully logged out');
                 localStorage.removeItem('accessToken'); // 로컬 스토리지에서 accessToken 제거
                 setIsLoggedIn(false); // 로그인 상태 업데이트
             } else {
                 throw new Error('Logout failed');
             }
         } catch (error) {
             console.error('Logout error:', error);
         }
     };

    return (
        <div>
            <HeaderContainer>
                <Logo>TurtleFive</Logo>
                <NavigationWrapper>
                    <StyledLink to="/chartPage">1week-chart</StyledLink>
                    <StyledLink to="#">contact</StyledLink>
                    {isLoggedIn ? (
                        <>
                        <StyledLink to="#" onClick={handleLogout}>logout</StyledLink>
                        <StyledLink to="/myPage">my page</StyledLink>
                        </>
                    ) : (
                        <StyledLink to="/login">login</StyledLink> // 로그아웃 상태일 때 로그인 버튼 표시
                    )}
                    <StyledLink to="/explain">explain</StyledLink> 

                    
                </NavigationWrapper>
            </HeaderContainer>
            {/* 거북목 검사하러 가기 컨테이너 */}
            <RectangleContainer>
                <Link to="/webcam">
                    <StyledButton>거북목 검사하러가기</StyledButton>
                </Link>
            </RectangleContainer>
            {/* 슬라이드 컨테이너 */}
            <RectangleContainer>
            <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          navigation = {true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          style={{ width: '100%', height: '100%' }} // 스와이퍼의 너비와 높이를 부모 요소에 맞게 설정
        >
          <SwiperSlide>
            <img src={turtle1} alt="Slide 1" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle3} alt="Slide 2" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle2} alt="Slide 3" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle4} alt="Slide 4" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle5} alt="Slide 4" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle6} alt="Slide 4" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle7} alt="Slide 4" style={{ width: '90%', height: '90%' }} />
          </SwiperSlide>
        </Swiper>
            </RectangleContainer>
            <Row>
            {/* chart를 간략하게 보여주는 컨테이너1,2 */}
             {/* 컨테이너 1 */}
            <Link to="/chartPage2" style={{ width: '46%', marginRight: '60px' }}>
            <Rectangle2Container>
                {/*<ProfileImage src={chart} alt="" /> */}
                <ResponsiveContainer width="90%" height="90%">
                <ComposedChart
                width={500}
                height={400}
                data={data1}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
                </ComposedChart>
                </ResponsiveContainer>
            </Rectangle2Container>
            </Link>
             {/* 컨테이너 2 */}
            <Link to="/chartPage"  style={{ width: '46%', }}>
            <Rectangle2Container>
            <ResponsiveContainer height="80%" width="80%">
                <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" scale="point" padding={{ left: 70, right: 10 }} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                    <Bar dataKey="거북목감지" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
            </Rectangle2Container>
            </Link>
            </Row>
            <StyledFooter>
                <p>&copy; 2024 docturtle website</p>
            </StyledFooter>
        </div>
    );
}

export default Header;
