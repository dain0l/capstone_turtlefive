import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StyledLink = styled(Link)`
    color: #000000;
    text-decoration: none;
    margin-right: 0.1rem;

    &:hover {
        text-decoration: underline;
    }
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

// 스타일링을 위한 styled-components 사용
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden; /* 스크롤 없애기 */
`;

const ChartDescription = styled.div`
    margin-left: 100px;
    width: 55%; /* 설명 영역의 너비 조정 */
`;

const ChartPage = () => {
    const data = [
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

        // 가장 높은 UV 값을 가지는 데이터 찾기
        let maxUVData = data.reduce((prev, current) => (prev.거북목감지 > current.거북목감지) ? prev : current);
        // UV 값의 총합 계산
        let totalUV = data.reduce((acc, current) => acc + current.거북목감지, 0);
        // UV 값의 평균 계산
        let averageUV = totalUV / data.length;

      return (
        <Container>
             <header style={header}>
             <h1>docturtle🐢</h1>
             </header>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginLeft : '130px', marginTop : '130px' }}>
                <ResponsiveContainer height={400} width="100%">
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" scale="point" padding={{ left: 70, right: 10 }} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                    <Bar dataKey="거북목감지" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                </ResponsiveContainer>
                <ChartDescription>
                    <h2> 이 그래프는</h2>
                    <h2> [ turtle ] 님의 일주일 평균 빈도수입니다.</h2>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>월요일부터 일요일까지의 데이터가 포함되어 있습니다.</p>
                    <p><span style={{ color: 'blue' }}>일주일 평균</span> 거북목 알림 횟수는 " {averageUV.toFixed(2)}회 " 입니다.</p>
                    <p>거북목 빈도수가 높은 요일은 <span style={{color: 'blue'}}>" {maxUVData.name} "</span> 입니다.</p>
                </ChartDescription>
            </div>
            <StyledFooter>
                <p>&copy; 2024 docturtle guide website</p>
            </StyledFooter>
        </Container>
     );
}

export default ChartPage;
