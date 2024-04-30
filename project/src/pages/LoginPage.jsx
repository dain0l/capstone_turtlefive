import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: #000000;
    text-decoration: none;
    margin-right: 0.1rem;

    &:hover {
        text-decoration: underline;
    }
`;


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // 로그인 처리
        console.log('로그인 정보:', {
            username,
            password
        });
        // 여기서 실제로 서버로 로그인 정보를 전송할 수 있습니다.
    };

    const styles = {
        header: {
            backgroundColor: '#f5f1ee84', // 원하는 배경색으로 변경
            textAlign: 'center',
            paddingTop: '25px',
            paddingBottom: '25px', // 하단 여백을 조절할 수 있습니다.
         
        },
        loginContainer: {
            maxWidth: '500px',
            margin: '80px auto',
            padding: '90px 30px', // 상하 여백을 늘림
            backgroundColor: '#ffffffbb',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        },
        p: {
            color: '#000000',
            marginTop: '20px',
            marginBottom: '50px',
            fontSize: '12px',
            textAlign: 'right'
        },
        h1: {
            marginTop: '50px',
            marginBottom: '50px',
            textAlign: 'center'
        },
        h2: {
            textAlign: 'center',
            marginBottom: '30px'
        },
        input: {
            textAlign: 'center',
            width: '100%', 
            padding: '15px',
            margin: '0 auto',
            marginBottom: '15px',
            border: '1px solid #779787',
            borderRadius: '40px',
            boxSizing: 'border-box',
        },
        submit: {
            marginTop: '10px',
            width: '100%',
            padding: '15px',
            backgroundColor: '#588D71',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        },
        additionalLinks: {
            marginTop: '50px',
            textAlign: 'right',
            fontSize: '13px',
            color: '#000000', // 원하는 색상으로 변경
        }
    };

    return (
        <div style={styles.body}>
           <header style={styles.header}>
             <h1>docturtle🐢</h1>
             </header>
            <div style={styles.loginContainer} className="login-container">
                <h2 style={styles.h2}>로그인</h2>
                <form onSubmit={handleLogin}>
                    <input
                        style={styles.input}
                        type="text"
                        value={username}
                        placeholder="e-mail"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        style={styles.input}
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input style={styles.submit} type="submit" value="로그인" />
                </form>
                <div className="additional-links" style={styles.additionalLinks}>
                <p><StyledLink to ="/findID">아이디 찾기</StyledLink> | <StyledLink to ="/findPassword">비밀번호 찾기</StyledLink></p>
                <p><StyledLink to="/agree">회원가입</StyledLink></p>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;
