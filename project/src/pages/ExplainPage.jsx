import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 20px;
`;

const StyledHeader = styled.header`
    background-color: #f5f1ee84;
    color: rgb(0, 0, 0);
    padding: 5px;
    border: 1px solid #a7a296;
`;

const StyledMain = styled.main`
    padding: 20px;
`;

const StyledSection = styled.section`
    margin-bottom: 20px;
    background-color: #F5F1EE;
    border-radius: 10px;
    border: 1px solid #779787;
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
`;

const StyledFirstContent = styled.div`
    p {
        font-size: 20px;
        font-weight: bold;
        color: #F5EDE6;
        -webkit-text-stroke: 1px #2a3431d3;
        margin-top: 0;
        margin-bottom: 18px;
    }
`;

const StyledTitleContent = styled.div`
    background-color: #f5ede6d6;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #779787;

    h2 {
        color: #333;
        font-size: 24px;
        text-align: left;
        margin: 10px;
        padding: 12px;
    }
`;

const StyledSummary = styled.summary`
    list-style-type: none;
    font-weight: bold;
    margin: 12px;
`;

const StyledStartContent = styled.div`
    text-align: left;
`;

const StyledSecondContent = styled.div`
    text-align: left;
`;

const StyledThirdContent = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

function ExplainPage() {
    return (
        <StyledApp>
            <StyledHeader>
                <h1>Guide For Users📖</h1>
            </StyledHeader>
            <StyledMain>
                <StyledFirstContent>
                    <p>DocTurtle is Posture correction service</p>
                    <p>for your Health Care +</p> 
                </StyledFirstContent>
                <StyledTitleContent>
                    <h2>🍀 What is the purpose of this Web Service?</h2>
                </StyledTitleContent>
                <StyledSection>
                    <StyledStartContent>
                        <ul>
                            <li>
                                <details>
                                    <StyledSummary>이 웹 서비스를 만든 목적 (누구를 위한 서비스인가?)</StyledSummary>
                                    <p>여기에 목적에 대한 내용을 작성하세요.</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <StyledSummary>사용자가 이 웹 서비스를 사용했을 때의 기대 효과</StyledSummary>
                                    <p>여기에 기대 효과에 대한 내용을 작성하세요.</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <StyledSummary>학생들을 위한 교육 리소스 및 튜터링 서비스를 제공하는 웹 서비스의 목적</StyledSummary>
                                    <p>여기에 기대 효과에 대한 내용을 작성하세요.</p>
                                </details>
                            </li>
                        </ul>
                    </StyledStartContent>
                </StyledSection>
                <StyledTitleContent>
                    <h2>🍀 Available service for you!</h2>
                </StyledTitleContent>
                <StyledSection>
                    <StyledSecondContent>
                        <details>
                            <StyledSummary>🔔 웹캠을 통한 실시간 자세 인식과 자세 교정 알림 서비스</StyledSummary>
                            <p></p>
                        </details>
                        <details>
                            <StyledSummary>📊 사용자 자세의 심각도를 알 수 있는 차트 정보 제공 서비스</StyledSummary>
                            <p></p>
                        </details>
                        <details>
                            <StyledSummary>📈 성별 또는 나이대 별 나의 자세가 상위 %인지 알려주는 서비스</StyledSummary>
                            <p></p>
                        </details>
                        <details>
                            <StyledSummary>🫶 웹 서비스 현 사용 장소에 따른 개인 맞춤 스트레칭 추천 서비스</StyledSummary>
                            <p></p>
                        </details>
                        <details>
                            <StyledSummary>💬 자세 관련 정보를 검색할 수 있는 챗봇 서비스</StyledSummary>
                            <p></p>
                        </details>
                    </StyledSecondContent>
                </StyledSection>
                <StyledTitleContent>
                    <h2>🍀 Conditions for DocTurtle</h2>
                </StyledTitleContent>
                <StyledSection>
                    <StyledThirdContent>
                        <ul>
                            <li>
                                <details>
                                    <StyledSummary>웹 서비스를 사용하기 위한 조건</StyledSummary>
                                    <ul>
                                        <li>
                                            <details>
                                                <StyledSummary>A) 웹캠 촬영을 위한 조건</StyledSummary>
                                                <ol>
                                                    <li>귀여워지기</li>
                                                    <li>귀여워지기</li>
                                                </ol>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <StyledSummary>B) 웹캠 이용을 위한 조건</StyledSummary>
                                                <ol>
                                                    <li>귀여워지기</li>
                                                    <li>귀여워지기</li>
                                                </ol>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <StyledSummary>C) 웹캠 사용을 위한 조건</StyledSummary>
                                                <ol>
                                                    <li>귀여워지기</li>
                                                    <li>귀여워지기</li>
                                                </ol>
                                            </details>
                                        </li> 
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <StyledSummary>웹 캠 사용을 위한 조건</StyledSummary>
                                </details>
                            </li>
                        </ul>
                    </StyledThirdContent>
                </StyledSection>
            </StyledMain>
            <StyledFooter>
                <p>&copy; 2024 docturtle guide website</p>
            </StyledFooter>
        </StyledApp>
    );
}

export default ExplainPage;
