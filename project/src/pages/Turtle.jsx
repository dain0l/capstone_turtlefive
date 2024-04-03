import React from 'react';
import CameraCom from "../components/Examine/CamerCom";
import LinkCom from '../components/Examine/LinkCom';

function Turtle() {
    const backgroundContainerStyle = {
        display: "flex",    
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
    };

    const titleStyle = {
        //backgroundColor: '#f5f1ee84',
        color: "#333",
        fontFamily: "Roboto",
        fontSize: "2.5rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        marginTop: "5rem",
        marginBottom: "2.19rem",
    };

    const containerStyle = {
        display: 'flex', // flexbox 사용
        justifyContent: 'space-around',
        alignItems: 'center', // 수직 가운데 정렬
        width: '90%', // 부모 요소의 너비를 화면 너비의 80%로 지정
        margin: '0 auto', // 수평 가운데 정렬
    };

    return (
        <div style={backgroundContainerStyle}>
            <div style={titleStyle}>거북목 검사하기</div>
            <div style={containerStyle}>
                <CameraCom /> {/* CameraCom 컴포넌트를 왼쪽에 배치합니다. */}
                <LinkCom /> {/* LinkCom 컴포넌트를 오른쪽에 배치합니다. */}
            </div>
        </div>
    );
}

export default Turtle;