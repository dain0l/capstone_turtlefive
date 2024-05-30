import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import styled from 'styled-components';

const AllContainer = styled.div`
    min-height: 100vh; /* 최소 높이를 화면 높이만큼으로 설정 */
`;

function FindID() {
  const [name, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate('')

  const goToHome = ()=>{
    navigator('/home');
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Axios를 사용하여 서버로부터 데이터 요청
      const response = await api.post('/findID', {
        name: name, 
        phoneNo: phoneNo
      });
      // 응답 상태 코드가 200~299 범위 외면 오류 발생
      if (response.status < 200 || response.status >= 300) {
        throw new Error('회원 정보를 가져올 수 없습니다.');
      }

      const data = response.data; // 서버에서 응답 받은 데이터
      console.log('API 응답 데이터:', data); 
      
      
      alert(`🐻‍❄️ ${data}🐻‍❄️`);
      
    } catch (error) {
      // 오류 발생 시, 팝업창을 통해 오류 메시지 알림
      alert(error.message);
    }
  };
  


  const handleCancel = () => {
    // 입력된 값 초기화
    setUsername('');
    setPhoneNo('');

};

  const styles = {
    header: {
        backgroundColor: '#f5f1ee84', // 원하는 배경색으로 변경
        textAlign: 'center',
        paddingTop: '25px',
        paddingBottom: '25px', // 하단 여백을 조절할 수 있습니다.
     
    },
    h1: {
        marginTop: '50px',
        textAlign: 'center',
    },
    findIDContainer: {
      maxWidth: '500px',
      margin: '80px auto',
      padding: '90px 30px', // 상하 여백을 늘림
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#ffffffbb',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    form: {
      marginBottom: '20px',
    },
    label: {
      width: '120px',
      display: 'inline-block',
      marginBottom: '5px',
      marginRight: '10px',
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#333'
    },
    input: {
        width: 'calc(100% - 130px)', // 입력란 너비 설정
      padding: '10px',
      fontSize: '16px',
      marginBottom: '20px',
      border: '1px solid #a5a5a5',
      borderRadius: '40px',
      boxSizing: 'border-box',
    },
    button: {
      width: '48%',
      marginLeft: '10px',
      padding: '12px',
      marginTop: '40px',
      fontSize: '13px',
      backgroundColor: '#a5a5a5',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#3e3c3c',
    },
    paragraph: {
      marginTop: '50px',
      textAlign: 'center',
      fontSize: '18px',
      color: '#333'
    },
  };

  return (
    <AllContainer>
    <div style={styles.body}>
       <header style={styles.header}>
            <h1 onClick={goToHome}>docturtle🐢</h1>
        </header>
        <div style={styles.findIDContainer}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>아이디 찾기</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label style={styles.label} htmlFor="username">이름 : </label>
          <input
            style={styles.input}
            type="text"
            id="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={styles.label} htmlFor="number">번호 : </label>
          <input
            style={styles.input}
            type="tel"
            id="number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
           <button style={styles.button} type="button" onClick={handleCancel}>취소하기</button>
        <button style={styles.button} type="submit">아이디 찾기</button>
      </form>
        {email && (
          <div>
            <p style={styles.paragraph}>
              🐻‍❄️ ID는 <strong>{email}</strong> 입니다. 🐻‍❄️
            </p>
          </div>
        )}
    </div>
    </div>
    </AllContainer>
  );
}

export default FindID;
