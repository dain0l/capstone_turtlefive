import React from 'react';

function CameraCom() {
    const boxStyle = {
        padding: '',
        width: '400%', // 상자의 너비를 화면 너비의 80%로 지정
        maxWidth: '1300px', // 최대 너비를 300px로 제한
        height: '700px', // 상자의 높이 고정
        backgroundColor: '#4a4e4c   ', // 하얀색 배경
        margin: '0 auto', // 수평 가운데 정렬
        //marginLeft: '5%', // 왼쪽 여백을 설정하여 왼쪽으로 이동
        borderRadius: '20px', // 둥근 모서리 반지름을 20px로 설정
        boxShadow: '0 0 15px #FFFFCC',
    };

    return (
        <div style={boxStyle}>
           
        </div>
    );
}

export default CameraCom;