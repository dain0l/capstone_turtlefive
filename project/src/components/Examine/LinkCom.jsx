import React from 'react';
<<<<<<< Updated upstream
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

function LinkCom() {

    
    const boxStyle = {
        width: '170%', // 상자의 너비를 화면 너비의 80%로 지정
        maxWidth: '600px', // 최대 너비를 300px로 제한
        height: '700px', // 상자의 높이 고정
        backgroundColor: '#4a4e4c', // 하얀색 배경
        margin: '0 auto', // 수평 가운데 정렬
        marginLeft: '10%', // 왼쪽 여백을 설정하여 왼쪽으로 이동
        borderRadius: '20px', // 둥근 모서리 반지름을 20px로 설정
        boxShadow: '0 0 15px #FFFFCC',
        overflow: 'hidden',
    };

    const slideStyle = {
        marginBottom : '10px', // SwiperSlide 사이의 간격을 조정하기 위해 margin을 설정합니다.
        backgroundColor: '#eeeeee', // 하얀색 배경
    };

    return (
        <div style={boxStyle}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                direction="vertical" // Swiper를 세로 방향으로 설정
                slidesPerView={3}
                //navigation
                pagination={{ clickable: true, renderBullet: function (index, className) { return `<span class="${className}" style="width: 15px; height: 15px;"></span>`; } }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{ width: '100%', height: '100%' }} // 스와이퍼의 너비와 높이를 부모 요소에 맞게 설정
            >
                <SwiperSlide style={slideStyle}>
                    <iframe 
                        width="420" 
                        height="250" 
                        src="https://www.youtube.com/embed/kgCj8UUEWjU?si=f8zHvSLq8Ve6WBrl" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <iframe 
                        width="420" 
                        height="250" 
                        src="https://www.youtube.com/embed/5kjKYj7Dyh0?si=ZzsTzHHvWEQI69Za" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <iframe 
                        width="420" 
                        height="250"  
                        src="https://www.youtube.com/embed/JBa6eGtLDIM?si=e5vLP0SWMGCMq9wr" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <iframe 
                        width="420" 
                        height="250" 
                        src="https://www.youtube.com/embed/plKOdIiiKEQ?si=90k9HOI_AGvYlTgb" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <iframe 
                        width="420" 
                        height="250" 
                        src="https://www.youtube.com/embed/I81IixZqFKY?si=hl2RL20qm_2jdo31" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <iframe 
                        width="420" 
                        height="250" 
                        src="https://www.youtube.com/embed/D54J2mfCME4?si=CtHZ9F1uDaI09J3b" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default LinkCom;
