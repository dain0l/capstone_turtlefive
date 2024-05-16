import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

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

const Container = styled.div`
  overflow-x: hidden; /* 좌우 스크롤 제거 */
`;

const HeaderContainer = styled.div`
  display: flex;
  background: #f5ede6d6;
  color: #eeeeee;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
`;

const RectangleContainer = styled.div`
  background-color: #f5ede6d6;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: calc(95% - 3%);
  height: 250px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  border: 1.5px solid #8fae99; /* 테두리 속성 추가 */

  @media screen and (max-width: 768px) {
    width: calc(100% - 6%);
  }
`;
const Rectangle2Container = styled.div`
  background-color: #f5ede6d6;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; /* 차트를 중앙에 위치시키기 위해 center로 변경 */
  width: 87%;
  height: 250px;
  margin-left: 20px;
  overflow: hidden;
  border: 1.5px solid #8fae99;
  margin-right: 20px;
  text-align: left;

  @media screen and (min-width: 1000px) {
    margin-left: 45px;
    width: 90%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  margin-bottom: 30px; /* 텍스트와 차트 사이의 간격을 추가 */
`;


const StyledFooter = styled.footer`
  background-color: rgba(0, 0, 0, 0.452);
  color: #ffffffc3;
  padding: 2px;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 중앙 정렬 */
`;

const Logo = styled.div`
  color: #2e7d32;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavigationWrapper = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: #2e7d32;
  text-decoration: none;
  margin-right: 2rem;

  &:hover {
    background-color: #dff0d8; /* 호버 시 배경색 변경 */
    text-decoration: underline;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
  width: 100%;
`;

const StyledButton = styled.button`
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: #8fae99;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #638d88;
  }
`;

function Home() {
  // 로그인 상태를 관리하는 상태 변수
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때 로그인 상태를 확인
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false로 설정
    fetchDataforWeek();
    fetchDataforPercentange();
    
  }, []);

  const fetchDataforPercentange = async () => {
    try {
        const response = await api.get('/percentage');
        if (response.status < 200 || response.status >= 300) { // 상태 코드 확인
            throw new Error('Network response was not ok');
        }
        const data = response.data;
        setData(data);
        
    } catch (error) {
        console.error("Fetch error: ", error);
    }
};

  const fetchDataforWeek = async () => {
    try {
        const response = await api.get('/inquiry');
        if (response.status < 200 || response.status >= 300) { // 상태 코드 확인
            throw new Error('Network response was not ok');
        }
        const data = response.data;
        if (data) {
            const transformedData = data.map(item => ({
                ...item,
                day: 요일변환함수(item.dayOfWeek),
                time: item.webcamDuration,
                알림빈도수: item.alarmCount,
                name: item.name
            }));
            setData2(transformedData);
        }
    } catch (error) {
        console.error("Fetch error: ", error);
    }
};
  // 예시 요일 변환 함수
  const 요일변환함수 = (dayOfWeek) => {
    const dayMap = {
        MONDAY: '월요일',
        TUESDAY: '화요일',
        WEDNESDAY: '수요일',
        THURSDAY: '목요일',
        FRIDAY: '금요일',
        SATURDAY: '토요일',
        SUNDAY: '일요일'
    };
    return dayMap[dayOfWeek] || dayOfWeek;
};

  // 로그아웃 함수
  const handleLogout = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ accessToken: token }),
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


const handleServiceButtonClick = () => {
    if (!isLoggedIn) {
        alert('로그인 후 이용해주세요');
        navigate("/login");
    } else {
      navigate("/webcam");
    }
};
  // API로부터 데이터를 성공적으로 받아온 경우, 데이터를 화면에 표시합니다.
    return (
        <div>
            <Container>
            <HeaderContainer>
                <Logo to="/register">TurtleFive</Logo>
                <NavigationWrapper>
                    {/* <StyledLink to="/inquiry">1week-chart</StyledLink>
                    <StyledLink to="#">contact</StyledLink> */}
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

            <RectangleContainer>
               <Link to="/webcam">
                <StyledButton >자세교정 서비스 이용하기</StyledButton>
               </Link>
            </RectangleContainer>
            
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
            <img src={turtle1} alt="Slide 1" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle3} alt="Slide 2" style={{ width: '90%', height: '90%', borderRadius: '10px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle2} alt="Slide 3" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle4} alt="Slide 4" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle5} alt="Slide 4" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle6} alt="Slide 4" style={{ width: '90%', height: '90%', borderRadius: '10px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={turtle7} alt="Slide 4" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
          </SwiperSlide>
        </Swiper>
            </RectangleContainer>

            {isLoggedIn && ( // 로그인 상태일 때만 아래 컨텐츠를 렌더링
        <Row>
          {/* 컨테이너 1 */}
          <Link to="/???" style={{ width: '20%', marginRight: '3%' ,textDecoration: 'none', color: 'black'}}>
          <Rectangle2Container>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h2>{data.name}님의 자세 비율👏</h2>
              <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${data.posturePercentage}%`, backgroundColor: '#4CAF50', textAlign: 'right', lineHeight: '40px', borderRadius: '10px 0 0 10px', color: 'white', paddingRight: '10px' }}>
                  {data.posturePercentage}%
                </div>
              </div>
              <h3 style={{ marginTop: '20px' }}>총 이용자 중에서 👑상위{data.rankPercentage}%</h3>
              <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${data.rankPercentage}%`, backgroundColor: '#FFA07A', textAlign: 'right', lineHeight: '40px', borderRadius: '10px 0 0 10px', color: 'white', paddingRight: '10px' }}>
                  {data.rankPercentage}%
                </div>
              </div>
            </div>
          </Rectangle2Container>

          </Link>
          
          {/* 컨테이너 2 */}
          <Link to="/inquiry" style={{ width: '77%', textDecoration: 'none', color: 'black' }}>
            <Rectangle2Container>
              <TextContainer>
                {data2.length > 0 ? (
                  <h2 style={{ margin: 0 }}>🦖{data2[0].name}님의 일주일간의 알람 빈도수입니다.</h2>
                ) : (
                  <h2 style={{ margin: 0 }}>..로딩중</h2>
                )}
              </TextContainer>
              <ResponsiveContainer height="80%" width="80%">
                <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="day" scale="point" padding={{ left: 70, right: 10 }} />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                  <Bar dataKey="알림빈도수" fill="#FFBD83" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
            </Rectangle2Container>
          </Link>
        </Row>
      )}
        <StyledFooter>
          <p>&copy; 2024 docturtle website</p>
        </StyledFooter>
      </Container>
    </div>
  );
}

export default Home;
