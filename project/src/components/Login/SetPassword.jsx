import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const styles = {
    header: {
        backgroundColor: '#f5f1ee84', // 원하는 배경색으로 변경
        textAlign: 'center',
        paddingTop: '25px',
        paddingBottom: '25px', // 하단 여백을 조절할 수 있습니다.
    },
    formContainer: {
        maxWidth: '500px',
        margin: '80px auto',
        padding: '30px', // 상하 여백을 조절할 수 있습니다.
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#ffffffbb',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '12px',
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
};

function SetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();
    const email = location.state.email;
    const navigator = useNavigate('');

    console.log(email);

    
    const goToHome= () =>{
        navigator('/home');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setMessage('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            const response = await fetch('/setPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password }),
            });
            if (!response.ok) {
                throw new Error('비밀번호를 새로 만드는 데 실패했습니다.');
            }
            setMessage('새로운 비밀번호가 저장되었습니다.');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>비밀번호 재설정</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    style={styles.input}
                    type="password"
                    placeholder="새로운 비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    style={styles.input}
                    type="password"
                    placeholder="새로운 비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button style={styles.button} type="submit">저장하기</button>
            </form>
            {message && <p style={{ textAlign: 'center', marginTop: '10px', color: message.includes('성공') ? 'green' : 'red' }}>{message}</p>}
        </div>
    );
}

export default SetPassword;
