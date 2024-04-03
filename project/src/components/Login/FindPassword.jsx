import React, { useState } from 'react';

function FindPassword() {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 비밀번호 찾기 로직 추가
    // 이메일을 이용하여 비밀번호 재설정 링크를 전송하는 API 호출 등
    // 아래의 setMessage 함수를 사용하여 결과 메시지를 설정합니다.
    const foundPW = '1234happy'; // 임시 비밀번호 재설정 링크
    setMessage(`🐻‍❄️ 비밀번호는 ${foundPW} 입니다. 🐻‍❄️`);
  };

  const handleCancel = () => {
    // 입력된 값 초기화
    setUsername('');
    setNumber('');
    setEmail('');

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
    findPasswordContainer: {
      maxWidth: '500px',
      margin: '80px auto',
      padding: '90px 30px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#ffffffbb',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    form: {
      marginBottom: '20px',
    },
    label: {
      display: 'inline-block',
      width: '120px', // 레이블 너비 설정
      marginBottom: '5px',
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#333'
    },
    input: {
      width: 'calc(100% - 120px)', // 입력란 너비 설정
      padding: '10px',
      fontSize: '16px',
      marginBottom: '20px',
      border: '1px solid #779787',
      borderRadius: '40px',
      boxSizing: 'border-box',
    },
    button: {
      width: '48%',
      marginLeft: '10px',
      padding: '12px',
      fontSize: '13px',
      marginTop: '40px',
      backgroundColor: '#588D71',
      color: '#fff',  
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#446E57',
    },
    message: {
      marginTop: '50px',
      textAlign: 'center',
      fontSize: '18px',
      color: '#333'
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>docturtle🐢</h1>
      </header>
      <div style={styles.findPasswordContainer}>
        <h2 style={{ textAlign: 'center', marginBottom: '50px'}}>비밀번호 찾기</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div>
            <label style={styles.label} htmlFor="username">이름 : </label>
            <input
              style={styles.input}
              type="text"
              id="text"
              value={username}
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="email">ID   : </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button style={styles.button} type="button" onClick={handleCancel}>취소하기</button>
          <button style={styles.button} type="submit">비밀번호 찾기</button>
        </form>
        {message && (
          <div>
            <p style={styles.message}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindPassword;
