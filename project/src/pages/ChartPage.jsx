import React, {useEffect, useState}from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 스타일링을 위한 styled-components 사용
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
   


        // 가장 높은 UV 값을 가지는 데이터 찾기
        let maxUVData = data2.reduce((prev, current) => (prev.거북목감지 > current.거북목감지) ? prev : current);
        // UV 값의 총합 계산
        let totalUV = data2.reduce((acc, current) => acc + current.거북목감지, 0);
        // UV 값의 평균 계산
        let averageUV = totalUV / data2.length;
        const [data2, setData2] = useState([]);

        useEffect(() => {
            fetchData().then(data => {
                if (data) {
                    setData2(data);
                }
            });
        }, []);
        const fetchData = async () => {
            try {
                const response = await fetch('/inquiry');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Fetch error: ", error);
            }
        }

      return (
        <Container>
             <header style={header}>
             <h1>docturtle🐢</h1>
             </header>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginLeft : '130px', marginTop : '130px' }}>
                <ResponsiveContainer height={400} width="100%">
                <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" scale="point" padding={{ left: 70, right: 10 }} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                    <Bar dataKey="거북목감지" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                </ResponsiveContainer>
                <ChartDescription>
                  {/* db 연결하면 turtle닉네임 연결할 수 있게 아이디 --> 이름 */}
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
                <p>&copy; 2024 docturtle chart website</p>
            </StyledFooter>
        </Container>
     );
}

export default ChartPage;
