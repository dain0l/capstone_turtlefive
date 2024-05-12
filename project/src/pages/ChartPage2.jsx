import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { data1 } from '../components/Data/data';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

import {
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

// 스타일링을 위한 styled-components 사용
const Button = styled.button`
  padding: 10px 20px;
  background-color: #779787; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #50655b;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  height: 20vh; /* 전체 뷰포트 높이 */
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

// header 스타일 정의
const header = {
    backgroundColor: '#f5f1ee84',
    padding: '20px',
    marginBottom: '25px',
    width: '100%',
    textAlign: 'center',
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 변경된 부분: flex-start -> center */
    overflow: hidden; /* 스크롤 없애기 */
`;


const ChartDescription = styled.div`
    margin-left: 100px;
    width: 55%; /* 설명 영역의 너비 조정 */
`;


const ChartPage2 = () => {
    const navigator = useNavigate();
    const [userInfo, setUserInfo] = useState({ name: '', percentage: 0 });

    const goToHome = ()=>{
      navigator('/home');
  };

    useEffect(() => {
      // API 호출을 통해 사용자 정보와 퍼센트를 가져옵니다.
      const fetchUserInfo = async () => {
        try {
          // 예시 URL입니다. 실제 요청 URL로 변경해야 합니다.
          const response = await api.get('/percentage');
          // 응답에서 사용자 정보를 상태에 저장합니다.
          setUserInfo({ name: response.data.name, percentage: response.data.posturePercentage, rank: response.data.rankPercentage });
        } catch (error) {
          console.error('사용자 정보를 가져오는데 실패했습니다.', error);
        }
      };
  
      fetchUserInfo();
    }, []);


      return (
        <Container>
            <header style={header}>
            <h1 onClick={goToHome}>docturtle🐢</h1>
            </header>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginLeft : '130px', marginTop : '130px' }}>
                <ResponsiveContainer height={400} width="100%">
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
                <ChartDescription>
                  {/* db 연결하면 turtle닉네임 연결할 수 있게 아이디 --> 이름 */}
                    <h2> 이 그래프는</h2>
                    <h2> 상위 퍼센트 분포도입니다.</h2>
                    <h2> {userInfo.name}님은 전체 사용자 중 {userInfo.rank}%입니다.</h2>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>모든 사람의 데이터가 포함되어 있습니다.</p>
                </ChartDescription>
            </div>
            <ButtonContainer>
              <Button onClick={goToHome}>돌아가기</Button>
            </ButtonContainer>
            <StyledFooter>
                <p>&copy; 2024 docturtle chart website</p>
            </StyledFooter>
        </Container>
     );
}

export default ChartPage2;
