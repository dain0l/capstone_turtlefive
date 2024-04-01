import React, { useState } from 'react';
import '../style/LoginForm.css'; // CSS 파일 추가
import { Link } from 'react-router-dom'; // Link import 추가
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: #2E7D32;
    text-decoration: none;
    margin-right: 0.1rem;

    &:hover {
    text-decoration: underline;
    }

`;

function LoginPage() {
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


    return (
       <div>
         <header>
                <h1>docturtle🐢</h1>
        </header>
         <div className="login-container">
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    placeholder="아이디 또는 e-mail"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input type="submit" value="로그인" />
            </form>
            <div className="additional-links">
                <p><a href="#">아이디찾기</a> | <a href="#">비밀번호찾기</a></p>
                <p><StyledLink to="/agree">회원가입</StyledLink></p>
            </div>
        </div>
       </div>
    );
}

export default LoginPage;
