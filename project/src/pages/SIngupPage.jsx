import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SignupForm() {
    const [name, setUsername] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [email, setEmail] = useState(''); //id 변수명을 email로 변경
    //const [id, setId] = useState('');  >> 필요없음 emial이 id이기 떄문

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirthdate] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);


    const handleSignup = (e) => {
        e.preventDefault();
        
        // 서버로 전송할 데이터 객체 생성
        const userData = {
            name,
            phoneNo,
            email,
            password,
            gender,
            birth
        };

        // 서버에 회원가입 요청 보내기
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            // 회원가입 성공 시 처리
            setSignupSuccess(true);
            console.log('회원가입 완료:', data);
        })
        .catch(error => {
            // 오류 처리
            console.error('회원가입 오류:', error);
        });
    };

    const styles = {
        header: {
            backgroundColor: '#f5f1ee84', // 원하는 배경색으로 변경
            textAlign: 'center',
            paddingTop: '25px',
            paddingBottom: '25px', // 하단 여백을 조절할 수 있습니다.
        },
        container: {
            maxWidth: '600px',
            marginTop: '80px',
            margin: '30px auto',
            padding: '20px',
            backgroundColor: '#ffffffbb',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(11, 83, 67, 0.267)',
        },
        footerContainer: {
            marginTop: '30px',
            maxWidth: '600px',
            margin: '20px auto',
            marginBottom: '70px',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#ffffffbb',
            borderRadius: '10px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        },
        footerContainerP: {
            margin: '0',
            fontSize: '14px',
            color: '#333',
        },
        h1: {
            margin: '50px',
            textAlign: 'center',
        },
        h2: {
            textAlign: 'center',
            marginTop: '50px',
            marginBottom: '50px',
        },
        h5: {
            position: 'fixed',
            top: '50px',
            right: '20px',
        },
        input: {
            width: 'calc(55% - 5px)',
            padding: '10px',
            marginLeft: '0',
            marginBottom: '15px',
            border: '1px solid #779787',
            borderRadius: '40px',
            boxSizing: 'border-box',
        },
        button: {
            width: 'calc(20% - 30px)',
            padding: '10px',
            marginBottom: '15px',
            marginLeft: '10px',
            backgroundColor: '#588D71',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        submit: {
            width: '48%',
            padding: '10px',
            marginTop: '10px',
            backgroundColor: '#588D71',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            marginRight: '15px',
            fontWeight: 'bold',
        },
        formGroup: {
            display: 'flex',
        },
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1>docturtle🐢</h1>
            </header>

            <div style={styles.container}>
                {signupSuccess ? (
                    <div>
                        <h2>회원가입 완료!</h2>
                        <p>회원가입이 성공적으로 완료되었습니다.</p>
                        <Link to="/login">로그인 페이지로 이동</Link>
                    </div>
                ) : (
                    <div>
                        <h2>회원가입</h2>
                        <form onSubmit={handleSignup}>
                            <input
                            style={styles.input}
                            type="text"
                            value={name}
                            placeholder="이름"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            />
                            <input
                            style={styles.input}
                            type="email"
                            value={email}   //id 변수명을 email로 변경
                            placeholder="아이디 (email)"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                            <input
                                style={styles.input}
                                type="tel"
                                value={phoneNo}
                                placeholder="휴대전화번호"
                                onChange={(e) => setphoneNo(e.target.value)} // setNumber -> setphoneNo 로 수정
                                required
                                pattern="[0-9]*" // 숫자만 입력되도록 정규표현식을 지정
                                title="숫자만 입력해주세요" // 입력값이 일치하지 않을 때 표시될 메시지
                            />  
                            <input
                            style={styles.input}
                            type="password"
                            value={password}
                            placeholder="비밀번호"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                            <input
                            style={styles.input}
                            type="password"
                            value={confirmPassword}
                            placeholder="비밀번호 재입력"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            />
                            <input style={styles.button} type="button" value="확인" />

                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="birthdate">생년월일:</label>
                                <select
                                    style={styles.input}
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">성별 선택</option>
                                    <option value="male">남성</option>
                                    <option value="female">여성</option>
                                    <option value="other">기타</option>
                                </select>
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="birth">생년월일:</label>
                                <input
                                    style={styles.input}
                                    type="date"
                                    value={birth}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    required
                                />
                               
                                
                                <input type="submit" value="가입하기" />
                            </div>
                         
                        </form>
                        
                    </div>
                )}
            </div>
        </div>
    );
}
export default SignupForm;