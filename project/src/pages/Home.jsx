import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../index.css'


import turtle11 from '../img/turtle11.png';
import turtle22 from '../img/turtle22.png';
import turtle33 from '../img/turtle33.png';
import turtle44 from '../img/turtle44.png';
import turtle55 from '../img/turtle55.png';
import turtle66 from '../img/turtle66.png';
import turtle77 from '../img/turtle77.png';
import background from '../img/background.png';


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
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
  background: #FFFFFF;
`;

const HeaderContainer = styled.div`
  display: flex;
  background: #FFFFFF // #b4b4b4; --> 위에 헤더
  color: #eeeeee;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
`;

const RectangleContainer = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: calc(95% - 3%);
  height: 360px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
 // border: 1.5px solid #505050; /* 테두리 속성 추가 */

  @media screen and (max-width: 768px) {
    width: calc(100% - 6%);
  }
`;
const Rectangle2Container = styled.div`
  background-color: #FFFFFF; --> 오늘 ~ 님의 비율, 차트 background
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left; /* 차트를 중앙에 위치시키기 위해 center로 변경 */
  width: auto; /*87%*/
  height: 300px;
  margin-left: 20px;
  overflow: hidden;
  border: 1.5px solid #505050;
  margin-right: 20px;
  text-align: left;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  @media screen and (min-width: 1000px) {
    margin-left: 45px;
    width: 90%;
  }
`;



const Rectangle3Container = styled.div`
  background-color: #FFFFFF; --> 오늘 ~ 님의 비율, 차트 background
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
  border: 1.5px solid #505050;
  margin-right: 20px;
  text-align: left;

  @media screen and (min-width: 1000px) {
    margin-left: 45px;
    width: 90%;
  }
`;

const LargeContainer1 = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start; 
  width: auto;
  height: 400px;
  overflow: hidden;
  // border: 1.5px solid #505050;

`;

const LargeContainer3 = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center; 
  width: auto;
  height: 400px;
  overflow: hidden;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // border: 1.5px solid #505050;
`;

const ChartContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  // margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: auto;
  height: 400px;
  overflow: hidden;

`;
const CamContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  overflow: hidden;

`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  margin-left: 50px;
  margin-bottom: 30px; /* 텍스트와 차트 사이의 간격을 추가 */
`;

const LargeContainer2 = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start; 
  width: 100%;
  height: 330px;
  overflow: hidden;
  // border: 1.5px solid #505050;

`;

const ChatBotContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 250px;
  overflow: hidden;

`;

const PercentageContainer = styled.div`
  marginTop: '20px'
  background-color: #FFFF00;
  border-radius: 10px;
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 60%;
  height: 300px;
  overflow: hidden;

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
  color: #505050;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavigationWrapper = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: #505050;
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
  font-family:'TheJamsil5Bold',sans-serif;
  color: #5EAE89;
  font-size: 5rem;
  padding: 0.5rem 1rem;
  background-color: #FFFFFF;
  color: 5EAE89;
  width: 200px;
  height: 200px;
  border: 2;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid #5EAE89;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  // .button {
  //   border: 1;
  //   width: 100px;
  //   height: 100px;
  //   border-radius: 100px;
  //   background-color: white;
  // }

  &:hover {
    background-color: #C5E1A5;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

function Home() {
  // 로그인 상태를 관리하는 상태 변수
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

    const 요일변환함수 = useCallback((dayOfWeek) => {
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
    }, []); // 요일변환함수는 의존성이 없으므로 빈 배열을 사용


  const fetchData =useCallback( async () => {
    
    try {
        const response = await api.get('/percentage');
        if (response.status < 200 || response.status >= 300) { // 상태 코드 확인
            throw new Error('Network response was not ok');
        }
        const data = response.data;
        setData(data);

        const response2 = await api.get('/inquiry');
        if (response2.status < 200 || response2.status >= 300) { // 상태 코드 확인
            throw new Error('Network response was not ok');
        }
        const data2 = response2.data;
        if (data2) {
            const transformedData = data2.map(item => ({
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
        if (error.response && (error.response.status === 401 && error.response.status === 403)) {
          navigate("/login");
        }
    }
  },[navigate, 요일변환함수]);
  

  // 컴포넌트가 마운트될 때 로그인 상태를 확인
 // 컴포넌트가 마운트될 때 로그인 상태를 확인
useEffect(() => {
  const token = localStorage.getItem('accessToken');
  setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false로 설정
  if (token) {
    fetchData();
  }
}, [fetchData]); // 함수들을 dependency array에 추가
 // 함수들을 dependency array에 추가

  // 로그아웃 함수
  const handleLogout = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const response = await api.post('/logout', {
        accessToken: token
      });

      if (response.status >= 200 || response.status < 300) {
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
                <Logo to="/register">Doc. Turtle</Logo>
                <NavigationWrapper>
                    {isLoggedIn ? (
                        <>
                        <StyledLink to="#" onClick={handleLogout}>logout</StyledLink>
                        <StyledLink to="/myPage">my page</StyledLink>
                        </>
                    ) : (
                        <StyledLink to="/login">login</StyledLink> // 로그아웃 상태일 때 로그인 버튼 표시
                    )}
                    <StyledLink to="/chatbot">chatbot</StyledLink>
                    <StyledLink to="/explain">explain</StyledLink> 
                    </NavigationWrapper>
        </HeaderContainer>
        <hr></hr>
            
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
              <img src={turtle11} alt="Slide 11" style={{ width: '90%', height: '90%' , borderRadius: '10px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={turtle33} alt="Slide 22" style={{ width: '90%', height: '90%', borderRadius: '10px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={turtle22} alt="Slide 33" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={turtle44} alt="Slide 44" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={turtle55} alt="Slide 55" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={turtle66} alt="Slide 66" style={{ width: '90%', height: '90%', borderRadius: '10px' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={turtle77} alt="Slide 77" style={{ width: '90%', height: '90%' , borderRadius: '10px'}} />
            </SwiperSlide>
          </Swiper>
        </RectangleContainer>


        <LargeContainer1>
        <Link to="/inquiry" style={{ width: '50%', textDecoration: 'none', color: 'black' }}>

              <ChartContainer>
                <TextContainer>
                  {data2.length > 0 ? (
                    <h2 style={{ margin: 0 }}>🦖{data2[0].name}님의 일주일간의 알람 빈도수입니다.</h2>
                  ) : (
                    <h2 style={{ margin: 0 }}>..로딩중</h2>
                  )}
                </TextContainer>

                <ResponsiveContainer height="100%" width="100%">
                  <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="day" scale="point" padding={{ left: 70, right: 10 }} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                    <Bar dataKey="알림빈도수" fill="#FFBD83" background={{ fill: '#eee' }} />
                  </BarChart>
                </ResponsiveContainer>

              </ChartContainer>
        </Link> 
              <CamContainer>
                <StyledButton onClick={handleServiceButtonClick} >📷</StyledButton>    
              </CamContainer>

        
              {/* 💬 */}
               
        </LargeContainer1>


        <LargeContainer3>
          <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.8)', // Optional: Add a semi-transparent background to make the text more readable
            borderRadius: '10px' // Optional: Add rounded corners
          }}>
            <h3>자세교정, </h3>
            <h3>Doc. Turtle과 함께 해야 하는 이유</h3>
          </div>
      </LargeContainer3>
           
                
        {isLoggedIn && ( // 로그인 상태일 때만 아래 컨텐츠를 렌더링
        <Row>

          <LargeContainer2>

            <ChatBotContainer>


            </ChatBotContainer>

            <PercentageContainer>
              <div style={{marginBottom: '5px'}}>
                <h3>오늘 {data.name}님의 자세 유지 비율👏</h3>
                <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: `${data.posturePercentage}%`, backgroundColor: '#4CAF50', textAlign: 'right', lineHeight: '70px', borderRadius: '10px 0 0 10px', color: 'white', paddingRight: '10px' }}>
                    {data.posturePercentage}%
                  </div>
                </div>
              </div>

              <div style={{marginTop: '10px'}}>
                <h3>오늘 총 이용자 중에서 👑상위{data.rankPercentage < 1 ? 1 : data.rankPercentage}%</h3>
                  <div style={{ width: '100%', backgroundColor: '#FFA07A', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: `${data.rankPercentage < 1 ? 1 : data.rankPercentage}%`, backgroundColor: '#eee', textAlign: 'right', lineHeight: '70px', borderRadius: '10px 0 0 10px', color: 'black', paddingRight: '10px' }}>
                      {data.rankPercentage < 1 ? 1 : data.rankPercentage}%
                    </div>
                  </div>
              </div>
            </PercentageContainer>
          </LargeContainer2>
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
