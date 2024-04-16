import Beforehand from '../components/Home/Beforehand';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import chart from '../img/chart.png';
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


  

  //평균?
  const data1 = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

  //1-week chart
  const data2 = [
    {
      name: '월요일',
      거북목감지: 30,

    },
    {
      name: '화요일',
      거북목감지: 10,

    },
    {
      name: '수요일',
      거북목감지: 20,

    },
    {
      name: '목요일',
      거북목감지: 27,
    },
    {
      name: '금요일',
      거북목감지: 10,

    },
    {
      name: '토요일',
      거북목감지: 23,

    },
    {
      name: '일요일',
      거북목감지: 50,

    },
  ];


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
                {/*<ProfileImage src={chart} alt="" /> */}
                <ResponsiveContainer width="100%" height="100%">
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
            <Rectangle2Container>
            <ResponsiveContainer height="90%" width="90%">
                <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" scale="point" padding={{ left: 70, right: 10 }} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                    <Bar dataKey="거북목감지" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                </ResponsiveContainer>
            </Rectangle2Container>
            </Row>
            <StyledFooter>
                <p>&copy; 2024 docturtle website</p>
            </StyledFooter>
        </div>
    );
}

export default Header;
