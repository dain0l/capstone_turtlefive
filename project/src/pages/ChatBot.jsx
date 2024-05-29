import React, { useState } from 'react'; 
import axios from 'axios';
import api from '../services/api';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

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
  background: #f5ede6d6;
  color: #eeeeee;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* 필요에 따라 행을 여러 줄로 바꿉니다. */
`;
const Logo = styled.div`
  color: #288A72;
  font-size: 1.5rem;
  font-weight: bold;
`;


const StyledLink = styled(Link)`
  color: #288A72;
  text-decoration: none;
  margin-right: 2rem;

  &:hover {
    background-color: #dff0d8; /* 호버 시 배경색 변경 */
    text-decoration: underline;
  }
`;


const NavigationWrapper = styled.nav`
  display: flex;
`;

const ChatBot = () => {
  // CSS 코드를 JSX 파일 안에 넣음
  const styles = {
    body: {
      fontFamily: 'Nanum Gothic, sans-serif',
      overflowY: 'hidden',
      backgroundColor: '#000',
      fontFamily: 'MoveSans-Bold',
    },
    container: {
      margin: '40px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#e2f1e4d8',
    },
    chatWindow: {
      backgroundColor: '#f0f0f0b9',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      height: '660px',
      overflowY: 'scroll',
      margin: '20px',
      marginBottom: '10px',
    },
    messageContainer: {
      borderRadius: '10px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    message: {
      marginBottom: '10px',
      padding: '8px 12px',
      borderRadius: '18px',
      boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.326)',
      maxWidth: '80%',
      position: 'relative',
    },
    user: {
      backgroundColor: '#aedcb4',
      alignSelf: 'flex-end',
      fontWeight: 'bold',
    },
    userAfter: {
        content: "",
        position: 'absolute',
        bottom: '0',
        right: '-5px',
        borderWidth: '10px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #aedcb4 transparent',
      },
    assistant: {
      backgroundColor: '#aeadad',
      alignSelf: 'flex-start',
    },
    assistantAfter: {
        content: "",
        position: 'absolute',
        bottom: '0',
        left: '-5px',
        borderWidth: '10px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #aeadad',
    },
    userName: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#666',
      marginBottom: '5px',
    },
    button: {
      padding: '10px',
      margin: '20px',
      backgroundColor: '#0a0c0fd4',
      border: 'none',
      color: 'white',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    input: {
      borderRadius: '10px',
      width: '90%',
      padding: '10px',
      margin: '20px',
    },
    h1: {
      color: 'darkgreen',
      margin: '10px',
      marginLeft: '30px',
      marginTop: '20px',
      fontFamily: 'MoveSans-Bold',
    },
    assistantName: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#666',
      marginBottom: '5px',
    },
  };

  // 초기 메시지를 설정하여 사용자에게 인사말을 표시
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '안녕하세요! 저는 docturtle 챗봇입니다. 궁금한 것이 있으면 물어보세요!' }
  ]);
  const [userInput, setUserInput] = useState('');

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

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    // 사용자의 메시지를 추가
    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages); 
    setUserInput(''); 

    try {
      // OpenAI API에 요청을 보내 챗봇의 응답을 받음
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',  // 모델 이름을 올바르게 사용
          messages: [
            {
              role: 'system',
              content: 'You are an assistant specialized in providing concise information and advice about 거북목 자세, also known as "거북목". Please keep your responses short (under 200 characters) and focused on this topic.'
            },
            ...newMessages // 새로운 메시지에 시스템 메시지를 포함하여 추가
          ],
          temperature: 0.7, // 답변의 일관성을 위해 적절한 온도를 설정
          max_tokens: 200, // 응답이 간략하게 나오도록 max_tokens 값을 조정
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // 환경변수에서 API 키를 가져옴
            'Content-Type': 'application/json',
          },
        }
      );

      // API 응답에서 챗봇의 메시지를 추출
      const botMessageContent = response.data.choices[0].message.content;
      const botMessage = { role: 'assistant', content: botMessageContent }; // 'assistant' 역할로 설정
      setMessages([...newMessages, botMessage]); // 새로운 메시지 배열에 챗봇의 메시지를 추가
    } catch (error) {
      console.error('Error communicating with OpenAI', error); // 오류 발생 시 콘솔에 출력
    }
  };

  // Enter 키를 감지하여 메시지를 전송
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
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
          <StyledLink to="/explain">explain</StyledLink>
          <StyledLink to="/home">home</StyledLink>
        </NavigationWrapper>
      </HeaderContainer>
    <div style={styles.container}>
      <h1 style={styles.h1}>Doc. turtle Chatbot 💬</h1> 
      <div style={styles.chatWindow}>
        <div style={styles.messageContainer}>
          {messages.map((msg, index) => (
            <div key={index} style={{ ...styles.message, ...styles[msg.role] }}>
              {msg.role === 'user' && (
                  <div style={styles.userName}>🐢me</div>
                )}
                {msg.role === 'assistant' && (
                <div style={styles.assistantName}>🤖bot</div>
              )}
              {msg.content}
              {msg.role === 'user' && <div style={styles.userAfter}></div>}
                {msg.role === 'assistant' && <div style={styles.assistantAfter}></div>}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress} // Enter 키 감지
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default ChatBot;