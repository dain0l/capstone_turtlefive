import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  padding: 10px 20px;
  background-color: #8fae99; /* Green */
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
    background-color: #638d88;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  height: 20vh; /* 전체 뷰포트 높이 */
`;

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
`

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
    align-items: center; /* 변경된 부분: flex-start -> center */
    overflow: hidden; /* 스크롤 없애기 */
`;

const ChartDescription = styled.div`
    margin-left: 100px;
    width: 55%; /* 설명 영역의 너비 조정 */
`;

const ChartPage = () => {
    const [data2, setData2] = useState([]);
    const navigator = useNavigate();

    const goToHome = ()=>{
        navigator('/home');
    };

    useEffect(() => {
        const fetchData = async () => {
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
                        거북목감지: item.alarmCount,
                        name: item.name
                    }));
                    setData2(transformedData);
                }
            } catch (error) {
                console.error("Fetch error: ", error);
            }
        };
    
        fetchData();
    }, []);
    

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

    // 여기에서 최대값과 평균값 계산
    let maxData = data2.length > 0 ? data2.reduce((prev, current) => (prev.거북목감지 > current.거북목감지) ? prev : current) : null;
    let totalUV = data2.reduce((acc, current) => acc + current.거북목감지, 0);
    let averageUV = data2.length > 0 ? totalUV / data2.length : 0;

    // 여기에서 웹캠에 대한 총합, 평균값 계산
    let totalTime = data2.reduce((acc, current) => acc + current.time, 0);
    let averageTime = data2.length > 0 ? totalTime / data2.length : 0;

    return (
        <Container>
            <header style={header}>
                <h1 onClick={goToHome}>docturtle🐢</h1>
            </header>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginLeft : '130px', marginTop : '130px' }}>
                <ResponsiveContainer height={400} width="100%">
                    <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="day" scale="point" padding={{ left: 70, right: 10 }} />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: 'white', color: 'black' }} />
                        <Bar dataKey="거북목감지" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </ResponsiveContainer>
                <ChartDescription>
                     <h2> 이 그래프는</h2>
                    {data2.length > 0 ? (
                    <h2> {data2[0].name}님의 일주일 평균 알람 빈도수입니다.</h2>
                    ) : (
                    <h2> 로딩 중...</h2>
                    )}
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>월요일부터 일요일까지의 데이터가 포함되어 있습니다.</p>
                    {maxData && <p>거북목 빈도수가 높은 요일은 <span style={{color: 'blue'}}>" {maxData.day} "</span> 입니다.</p>}
                    {data2.length > 0 && <p><span style={{ color: 'blue' }}>일주일 평균</span> 거북목 알림 횟수는 " {averageUV.toFixed(2)}회 " 입니다.</p>} 
                    <br></br>
                    {data2.length > 0 && <p><span style={{ color: 'green' }}>일주일 총 웹캠 사용 시간</span>은 " {totalTime}분 " 입니다.</p>}
                    {data2.length > 0 && <p><span style={{ color: 'green' }}>일주일 평균 웹캠 사용 시간</span>은 " {averageTime.toFixed(2)}분 " 입니다.</p>}
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

export default ChartPage;