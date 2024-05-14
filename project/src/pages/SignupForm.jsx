import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

function SignupForm() {
    const [name, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState(''); //id 변수명을 email로 변경
    //const [id, setId] = useState('');  >> 필요없음 emial이 id이기 떄문

    const [password, setPassword] = useState('');
    
    const [gender, setGender] = useState('');
    const [birth, setBirthdate] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const navigate = useNavigate();

    const goToHome = ()=>{
        navigate('/home');
    };

    const handleCancel = () => {
        // 입력된 값 초기화
        setUsername('');
        setEmail('');
        setPhoneNo('');
        setPassword('');
        setGender('');
        setBirthdate('');
    };

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
            marginTop: '50px',
            maxWidth: '600px',
            margin: '20px auto',
            marginBottom: '30px',
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
            <h1 onClick={goToHome}>docturtle🐢</h1>
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
                        <h2 style={styles.h2}>회원가입</h2>
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
                                value={email}
                                placeholder="아이디 (email)"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
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
                            <input
                                style={styles.input}
                                type="password"
                                value={password}
                                placeholder="비밀번호"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div style={styles.formGroup}>

                                <label style={styles.label} htmlFor="birthdate">성별:</label>
                                <select
                                    style={styles.input}
                                    name="gender"
                                    id="gender"
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
                                <label style={styles.label} htmlFor="birthdate">생년월일:</label>
                                <input
                                    style={styles.input}
                                    type="date"
                                    value={birth}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    required
                                />

                               


                            </div>
                            <button style={styles.submit} type="submit" onClick={handleCancel}>취소하기</button>
                            <button type="submit" style={styles.submit}>가입하기</button>
                        </form>
                    </div>
                )}
                <div style={styles.footerContainer}>
                    <p style={styles.footerContainerP}>이 페이지는 docturtle🐢에서 제공하는 회원가입 양식입니다.</p>
                    <p style={styles.footerContainerP}>♥</p>
                    <p style={styles.footerContainerP}>welcome to docturtle website </p>
                </div>
            </div>
            <footer style={styles.footerContainer}>
    <p style={styles.footerContainerP}>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
    </p>
</footer>

        </div>
    );
}
export default SignupForm;