import React from 'react';
import '../style/ExplainForm.css';
import { Link } from 'react-router-dom'; // Link import 추가
import styled from 'styled-components';

function ExplainPage() {
  return (
    <div className="App">
      <header>
        <h1>Guide For Users📖</h1>
      </header>
      <main>
      <div className="first-content">
      <p>DocTurtle is Posture coreection servies</p>
      <p>for your Health Care +</p> 
      </div>
        <div className="title-content">
        <h2>🍀 What is purpose of this Web Service?</h2>
        </div>
        <section>
          <div className="start-content">
          <ul>
            <li>
                <details>
                <summary>이 웹을 서비스를 만든 목적 (누구를 위한 서비스인가?)</summary>
                <p>여기에 목적에 대한 내용을 작성하세요.</p>
                </details>
            </li>
            <li>
                <details>
                <summary>사용자가 이 웹 서비스를 사용 했을때의 기대 효과</summary>
                <p>여기에 기대 효과에 대한 내용을 작성하세요.</p>
                </details>
            </li>
            <li>
                <details>
                <summary>학생들을 위한 교육 리소스 및 튜터링 서비스를 제공하는 웹 서비스의 목적</summary>
                <p>여기에 기대 효과에 대한 내용을 작성하세요.</p>
                </details>
            </li>
            </ul>
          </div>
        </section>
        <div className="title-content">
         <h2>🍀 AvaiLable service for you!</h2>
        </div>
        <section>
          <div className="second-content">
            <details>
                <summary>🔔 웹캠을 통한 실시간 자세 인식과 자세 교정 알림 서비스</summary>
                <p></p>
            </details>
            <details>
                <summary>📊 사용자 자세의 심각도를 알 수 있는 차트 정보 제공 서비스</summary>
                <p></p>
            </details>
            <details>
                <summary>📈 성별 또는 나이대 별 나의 자세가 상위 %인지 알려주는 서비스</summary>
                <p></p>
            </details>
            <details>
                <summary>🫶 웹 서비스 현 사용 장소에 따른 개인 맞춤 스트레칭 추천 서비스</summary>
                <p></p>
            </details>
            <details>
                <summary>💬 자세 관련 정보를 검색할 수 있는 챗봇 서비스</summary>
                <p></p>
            </details>
          </div>
        </section>
        <div className="title-content">
         <h2>🍀 Conditions for DocTurtle</h2>
        </div>
        <section>
          <div className="third-content">
          <ul>
    <li>
        <details>
            <summary>웹 서비스를 사용하기 위한 조건</summary>
            <ul>
                <li>
                    <details>
                        <summary>A) 웹캠 촬영을 위한 조건</summary>
                        <ol>
                            <li>귀여워지기</li>
                            <li>귀여워지기</li>
                        </ol>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>B) 웹캠 이용을 위한 조건</summary>
                        <ol>
                            <li>귀여워지기</li>
                            <li>귀여워지기</li>
                        </ol>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>C) 웹캠 사용을 위한 조건</summary>
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
            <summary>웹 캠 사용을 위한 조건</summary>
        </details>
    </li>
</ul>

          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 docturtle guide website</p>
      </footer>
    </div>
  );
}

export default ExplainPage;
