import React, { useState } from 'react';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); //id 변수명을 email로 변경
    //const [id, setId] = useState('');  >> 필요없음 emial이 id이기 떄문
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // 회원가입 처리
        console.log('회원가입 정보:', {
            username,   
            email,  //id변수명을 email로 변경. 원래는 id였음
            number,
            password,
            gender,
            birthdate
        });
        // 여기서 실제로 서버로 회원가입 정보를 전송할 수 있습니다.
    };

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '20px auto',
            padding: '20px',
            backgroundColor: '#ffffffbb',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(11, 83, 67, 0.267)',
        },
        footerContainer: {
            marginTop: '30px',
            maxWidth: '600px',
            margin: '20px auto',
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
            border: '1px solid #ccc',
            borderRadius: '5px',
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
            width: '100%',
            padding: '10px',
            marginTop: '10px',
            backgroundColor: '#588D71',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
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
            <header>
                <h1 style={styles.h1}>docturtle🐢</h1>
            </header>
            <div style={styles.container}>
                <h2 style={styles.h2}>회원가입</h2>
                <form onSubmit={handleSignup}>
                    <input
                        style={styles.input}
                        type="text"
                        value={username}
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
                    <input style={styles.button} type="button" value="중복확인" />
                    <input
                        style={styles.input}
                        type="tel"
                        value={number}
                        placeholder="휴대전화번호"
                        onChange={(e) => setNumber(e.target.value)}
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
                        <label style={styles.label} htmlFor="gender">성별:</label>
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
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            required
                        />
                    </div>
                    <input style={styles.submit} type="submit" value="가입하기" />
                </form>
            </div>
            <div style={styles.footerContainer}>
                <p style={styles.footerContainerP}>이 페이지는 docturtle🐢에서 제공하는 회원가입 양식입니다.</p>
                <p style={styles.footerContainerP}>개인 정보 처리 방침 → 펼쳐보기 </p>
                <p style={styles.footerContainerP}>동의/미동의 → 라디오 버튼 활용 </p>
            </div>
        </div>
    );
}

export default SignupForm;
