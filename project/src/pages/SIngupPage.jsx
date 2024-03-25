import React, { useState } from 'react';
import '../style/SingupForm.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // 회원가입 처리
        console.log('회원가입 정보:', {
            username,
            id,
            password,
            email,
            gender,
            birthdate
        });
        // 여기서 실제로 서버로 회원가입 정보를 전송할 수 있습니다.
    };

    return (
        <div>
            <header>
                <h1>docturtle🐢 회원가입👤</h1>
                <h5>go to login →</h5>
            </header>
            <div className="container">
                <h2>회원가입</h2>
                <form onSubmit={handleSignup}>
                <input
                    type="text"
                    value={username}
                    placeholder="이름"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />   
                        <input
                            type="text"
                            value={id}
                            placeholder="아이디"
                            onChange={(e) => setId(e.target.value)}
                            required
                        />
                        <input type="button" value="중복확인" />
                    <input
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="비밀번호 재입력"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input type="button" value="확인" />
                    <input
                        type="email"
                        value={email}
                        placeholder="이메일 주소"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="form-group">
                        <label htmlFor="gender">성별:</label>
                        <select
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
                    <div className="form-group">
                        <label htmlFor="birthdate">생년월일:</label>
                        <input
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            required
                        />
                    </div>
                    <input type="submit" value="가입하기" />
                </form>
            </div>
            <div className="footer-container">
                <p>이 페이지는 docturtle🐢에서 제공하는 회원가입 양식입니다.</p>
                <p>개인 정보 처리 방침 → 펼쳐보기 </p>
                <p>동의/미동의 → 라디오 버튼 활용 </p>
                <p> ???</p>
                <p> ???</p>
                <p> ???</p>
                <p> ???</p>
                <p> ???</p>
            </div>
        </div>
    );
}

export default SignupForm;