import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FindPassword() {
  const [name, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate();
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const goToHome= () =>{
    navigator('/home');
  };


  const handleCancel = () => {
    // 입력된 값 초기화
    setUsername('');
    setPhoneNo('');
    setEmail('');
    setMessage('');
  };
  const gotosetpassword = (email) =>{
    navigator("/setPassword", {state: {email}})
  };

  const handleSubmit = () => {
    // 모든 입력란이 채워져 있는지 확인
    if (name && phoneNo && email) {
      gotosetpassword(email);
    } else {
      setMessage('모든 입력란을 작성해주세요.');
    }
  };

  const styles = {
    header: {
      backgroundColor: '#f5f1ee84',
      textAlign: 'center',
      paddingTop: '25px',
      paddingBottom: '25px',
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
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
      marginBottom: '20px',
      textAlign: 'center', // 폼 내부 요소들을 가운데 정렬
    },
    label: {
      display: 'inline-block',
      width: '120px',
      marginBottom: '5px',
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: 'calc(100% - 120px)',
      padding: '10px',
      fontSize: '16px',
      marginBottom: '20px',
      border: '1px solid #a5a5a5',
      borderRadius: '40px',
      boxSizing: 'border-box',
    },
    buttonContainer: {
      textAlign: 'center', // 버튼 컨테이너를 가운데 정렬
      display: 'flex', // 버튼을 수평으로 정렬하기 위해 flex로 설정
      justifyContent: 'center', // 수평 가운데 정렬
    },
    button: {
      width: '48%',
      padding: '12px',
      fontSize: '13px',
      marginTop: '40px',
      backgroundColor: '#a5a5a5',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      marginLeft: '2%', // 버튼 사이의 간격을 조절
      marginRight: '2%',
    },
    buttonHover: {
      backgroundColor: '#446E57',
    },
    message: {
      marginTop: '10px',
      textAlign: 'center',
      fontSize: '18px',
      color: 'red',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 onClick={goToHome}>docturtle🐢</h1>
      </header>
      <div style={styles.findPasswordContainer}>
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>비밀번호 찾기</h2>
        <form style={styles.form}>
          <div>
            <label style={styles.label} htmlFor="name">이름 : </label>
            <input
              style={styles.input}
              type="text"
              value={name}
              placeholder="이름"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="phoneNo">번호 : </label>
            <input
              style={styles.input}
              type="tel"
              value={phoneNo}
              placeholder="휴대전화번호"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              pattern="[0-9]*"
              title="숫자만 입력해주세요"
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="email">ID   : </label>
            <input
              style={styles.input}
              type="email"
              value={email}
              placeholder="아이디 (email)"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.button} type="button" onClick={handleCancel}>취소하기</button>
            <button style={styles.button} onClick={handleSubmit}>
              비밀번호 찾기
            </button>
          </div>
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
