import React, { useState } from 'react';

function FindID() {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 이메일 찾기 로직을 추가하세요
    // 이름과 전화번호를 이용하여 사용자의 이메일을 찾는 API 호출 등
    // 아래의 setEmail 함수를 사용하여 찾은 이메일을 설정합니다
    const foundEmail = 'found_email@example.com'; // 예시로 사용자 이메일을 found_email@example.com으로 설정
    setEmail(foundEmail);
  };


  const handleCancel = () => {
    // 입력된 값 초기화
    setUsername('');
    setNumber('');

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
      border: '1px solid #779787',
      borderRadius: '40px',
      boxSizing: 'border-box',
    },
    button: {
      width: '48%',
      marginLeft: '10px',
      padding: '12px',
      marginTop: '40px',
      fontSize: '13px',
      backgroundColor: '#588D71',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#446E57',
    },
    paragraph: {
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
        <div style={styles.findIDContainer}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>아이디 찾기</h2>
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
           <button style={styles.button} type="button" onClick={handleCancel}>취소하기</button>
        <button style={styles.button} type="submit">아이디 찾기</button>
      </form>
      {email && (
        <div>
          <p style={styles.paragraph}>🐻‍❄️ ID는 {email} 입니다. 🐻‍❄️</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default FindID;
