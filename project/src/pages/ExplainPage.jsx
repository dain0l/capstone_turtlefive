import React, { useCallback, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden; /* 전체 페이지에서 가로 스크롤 제거 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  background: #515151;
  color: #288A72;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
`;

const StyledLink = styled(Link)`
  color: #f5ede6d6;
  text-decoration: none;
  margin-right: 2rem;

  &:hover {
    background-color: #f5ede6d6; /* 호버 시 배경색 변경 */
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  color: #f5ede6d6;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavigationWrapper = styled.nav`
  display: flex;
`;

const StyledApp = styled.div`
  text-align: center;
  margin: 3%;
  padding: 20px;
  border: 4px solid #505050;
  margin-bottom: 100px; /* 추가된 부분: Footer와의 겹침 방지 */
  border-radius: 10px;
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
  margin-bottom: 10px;
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
  margin: 10px;
`;

const StyledStartContent = styled.div`
  text-align: left;
  margin: 12px;
`;

const StyledSecondContent = styled.div`
  text-align: left;
  margin: 12px;
`;

const StyledThirdContent = styled.div`
  text-align: left;
  margin: 12px;
`;



function ExplainPage() {

        
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        setIsLoggedIn(!!token); // token이 있으면 true, 없으면 false로 설정

    }); 


  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div>
      <GlobalStyle />
      <HeaderContainer>
        <Logo to="/home">Doc. Turtle</Logo>
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
          <StyledLink to="/home">home</StyledLink>
        </NavigationWrapper>
      </HeaderContainer>
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
                    <p>현대 사회에서 스마트 기기의 보급으로 인해 자세 관리의 중요성이 한층 더 부각되고 있습니다. 특히 거북목 증후군은 현대 사회에서 흔히 발생하는 질병 중 하나로, 이를 예방하기 위한 다양한 프로그램과 방법이 존재합니다. 우리는 이러한 사회적 문제를 인식하여, 실시간으로 웹캠을 활용하여 건강한 자세를 유지하도록 돕는 웹 서비스를 만들었습니다. 이 서비스는 컴퓨터 앞에 오랜 시간 앉아야 하는 직종을 가진 사람들에게 올바른 자세를 유지할 수 있는 건강한 습관을 형성하는 데 도움이 될 것으로 기대됩니다. 또한, 서비스와 더불어 가볍게 볼 수 있는 스트레칭 영상을 통해 자세를 교정할 수 있는 기능을 구현했습니다. 사용자는 컴퓨터와 노트북을 사용하면서 올바른 자세를 유지할 수 있습니다.</p>
                  </details>
                </li>
                <li>
                  <details>
                    <StyledSummary>사용자가 이 웹 서비스를 사용했을 때의 기대 효과</StyledSummary>
                    <p>웹캠을 활용하여 거북목 증후군을 예방하는 방법은 사용자에게 자세가 잘못되었을 때 즉시 알려주어 자세를 개선할 수 있도록 안내하는 효과적인 방법입니다. 이를 통해 사용자는 일상생활에서 자세를 개선할 수 있습니다. 더불어, 자세의 중요성을 인식하고, 온라인 동영상 플랫폼에서 다양한 자세 교정 영상을 활용하여 도움을 받을 수 있습니다. 거북목 스트레칭을 통해 등과 어깨의 균형을 유지하고 올바른 척추 정렬을 도와줍니다. 이러한 노력은 통증을 줄이고, 스트레스를 감소시키며, 생산성을 향상하는데 도움이 될 것입니다. 또한, 건강한 습관을 형성하는 것도 기대할 수 있습니다.</p>
                  </details>
                </li>
                <li>
                  <details>
                    <StyledSummary>🥚🎨🐣</StyledSummary>
                    <p>🥕🥕🥕🥕🥕🥕🥕🐇🥕🥕🥕🥕🥕🥕🥕</p>
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
                <StyledSummary>📊 요일별 사용자의 올바른 자세 유지률을 알 수 있는 차트 정보 제공 서비스</StyledSummary>
                <p></p>
              </details>
              <details>
                <StyledSummary>📈 전체 사용자 중 나의 자세가 상위 %인지 알려주는 서비스</StyledSummary>
                <p></p>
              </details>
              <details>
                <StyledSummary>🫶 웹 서비스 이용과 더불어 빠르고 간편한 스트레칭 추천 서비스</StyledSummary>
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
                          <StyledSummary>A) 웹 서비스를 사용하기 위한 전제 조건</StyledSummary>
                          <ol>
                            <li>알람 및 카메라를 허용해야 웹 서비스를 이용할 수 있어요❗</li>
                            <li>제공되는 서비스는 노트북💻 사용자를 맞춤으로 제공되고 있어요</li>
                          </ol>
                        </details>
                      </li>
                      <li>
                        <details>
                          <StyledSummary>B) 웹캠 이용을 위한 조건</StyledSummary>
                          <ol>
                            <li>가능하다면 노트북 화면을 수직으로 유지해야 정확도가 올라가요🥹</li>
                            <li>간간히 옆에 있는 스트레칭도 따라해주시면 자세 교정에 더욱 도움이 될거예요😊</li>
                          </ol>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <StyledSummary>자세 교정 서비스를 사용하는 올바른 방법</StyledSummary>
                    <ol>
                      <li>홈 화면의 "자세교정 서비스 이용하기" 버튼을 눌러주세요.</li>
                      <li>알림 및 카메라 허용을 하기 버튼을 누른 후 올바르게 작동되는지 확인해주세요.</li>
                      <li>허리를 꼿꼿이 편 후 화면에 정상 자세라고 나오도록 화면의 각도를 조정해 주세요.</li>
                      <li>창을 내린 후 사용자님의 업무를 처리하세요.</li>
                    </ol>
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
    </div>
  );
}

export default ExplainPage;
