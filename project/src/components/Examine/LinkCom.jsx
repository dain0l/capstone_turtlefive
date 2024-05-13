import React, { useState } from 'react'; // React와 useState를 import합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styled from 'styled-components';

const StyledSelect = styled.select`
    padding: 0.7em;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 0.9em;
        padding: 0.5em;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8em;
        padding: 0.4em;
    }
`;

function LinkCom() {

    const [selectedPlace, setSelectedPlace] = useState('집');

    // 드롭다운 메뉴에서 선택한 항목이 변경될 때 호출될 이벤트 핸들러 작성
    const handlePlaceChange = (event) => {
        setSelectedPlace(event.target.value);
    };
    
    const boxStyle = {
        width: '170%', // 상자의 너비를 화면 너비의 80%로 지정
        maxWidth: '450px', // 최대 너비를 300px로 제한
        height: '700px', // 상자의 높이 고정
        backgroundColor: '#4a4e4c', // 하얀색 배경
        margin: '0 auto', // 수평 가운데 정렬
        marginLeft: '20%', // 왼쪽 여백을 설정하여 왼쪽으로 이동
        borderRadius: '20px', // 둥근 모서리 반지름을 20px로 설정
        boxShadow: '0 0 15px #FFFFCC',
        overflow: 'hidden',
    };

    const slideStyle = {
        marginBottom : '10px', // SwiperSlide 사이의 간격을 조정하기 위해 margin을 설정합니다.
        backgroundColor: '#4a4e4c', // 하얀색 배경
        borderRadius: '20px', // Apply border radius to the slide
        
          
    };


    

    return (
        <div>
            {/* 드롭다운 메뉴 추가 */}
            <StyledSelect value={selectedPlace} onChange={handlePlaceChange}>
                <option value="집">집</option>
                <option value="카페">카페</option>
                <option value="야외">야외</option>
            </StyledSelect>

            {/* 선택된 장소에 따라 다른 동영상 표시 */}
            {selectedPlace === '집' && (
                // 여기에는 집에 해당하는 동영상을 표시하는 코드 작성
                <div style={boxStyle}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    direction="vertical" // Swiper를 세로 방향으로 설정
                    slidesPerView={2.6}
                    //navigation
                    pagination={{ clickable: true, renderBullet: function (index, className) { return `<span class="${className}" style="width: 15px; height: 15px;"></span>`; } }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ width: '100%', height: '100%', backgroundColor: '#4a4e4c'}} // 스와이퍼의 너비와 높이를 부모 요소에 맞게 설정
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
                            src="https://youtu.be/odmaK53mr68?si=rBN0neOSDXbm1DzO" 
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
            )}
           
            {selectedPlace === '카페' && (
                // 여기에는 카페에 해당하는 동영상을 표시하는 코드 작성
                <div style={boxStyle}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    direction="vertical" // Swiper를 세로 방향으로 설정
                    slidesPerView={2.6}
                    //navigation
                    pagination={{ clickable: true, renderBullet: function (index, className) { return `<span class="${className}" style="width: 15px; height: 15px;"></span>`; } }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ width: '100%', height: '100%', backgroundColor: '#4a4e4c'}} // 스와이퍼의 너비와 높이를 부모 요소에 맞게 설정
            >
                    <SwiperSlide style={slideStyle}>
                        <iframe 
                            width="420" 
                            height="250" 
                            src="https://www.youtube.com/watch?v=vvHZhhI9TdE" 
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
            )}
            {selectedPlace === '야외' && (
                // 여기에는 야외에 해당하는 동영상을 표시하는 코드 작성
                <div style={boxStyle}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    direction="vertical" // Swiper를 세로 방향으로 설정
                    slidesPerView={2.6}
                    //navigation
                    pagination={{ clickable: true, renderBullet: function (index, className) { return `<span class="${className}" style="width: 15px; height: 15px;"></span>`; } }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ width: '100%', height: '100%', backgroundColor: '#4a4e4c'}} // 스와이퍼의 너비와 높이를 부모 요소에 맞게 설정
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
            )}
        </div>
        
    );
}

export default LinkCom;
