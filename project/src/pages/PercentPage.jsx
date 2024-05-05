import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

// 페이지 컨테이너 스타일
const Container = styled.div`
    padding: 20px;
`;

// 상위 퍼센트를 나타내는 컴포넌트
const PercentPage = () => {
    const [graphData, setGraphData] = useState(null); // 그래프 데이터 상태
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        // 데이터 요청
        const fetchData = async () => {
            try {
                const response = await fetch('/percentage');
                if (!response.ok) {
                    throw new Error('데이터를 가져오는 데 문제가 발생했습니다.');
                }
                const data = await response.json();
                const { posturePercentage, rankPercentage } = data;

                // 그래프 데이터 설정
                const chartData = {
                    labels: ['상위 퍼센트'],
                    datasets: [
                        {
                            label: '자세 퍼센트',
                            data: [posturePercentage],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: '순위 퍼센트',
                            data: [100 - rankPercentage],
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                        },
                    ],
                };

                // 그래프 데이터 설정 및 로딩 상태 변경
                setGraphData(chartData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <h1>상위 몇 퍼센트</h1>
            {isLoading ? (
                <p>데이터를 불러오는 중입니다...</p>
            ) : graphData ? (
                <Bar data={graphData} />
            ) : (
                <p>데이터를 불러올 수 없습니다.</p>
            )}
        </Container>
    );
};

export default PercentPage;
