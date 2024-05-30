import React, { useState } from 'react'; // React와 useState를 import합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styled from 'styled-components';

const videos = {
    맨몸: [
        "https://www.youtube.com/embed/5kjKYj7Dyh0?si=ZzsTzHHvWEQI69Za",
        "https://www.youtube.com/embed/I81IixZqFKY?si=hl2RL20qm_2jdo31",
        "https://www.youtube.com/embed/GOBi_TFCpdU?si=7QIU9sHGsQGvyVZk",
        "https://www.youtube.com/embed/dJXZRZvqbYg?si=thvrzjTXbrNJnPax",
        "https://www.youtube.com/embed/odmaK53mr68?si=DEGDvqdf35UG7J3P",
        "https://www.youtube.com/embed/FMOISIlhLEY?si=BNL1Y8HbS0NKP_xP",
    ],
    매트: [
        "https://www.youtube.com/embed/Mtd0QotdlWo?si=TDZk6daqImPShiOz",
        "https://www.youtube.com/embed/kgCj8UUEWjU?si=f8zHvSLq8Ve6WBrl",
        "https://www.youtube.com/embed/D54J2mfCME4?si=CtHZ9F1uDaI09J3b",
        "https://www.youtube.com/embed/JBa6eGtLDIM?si=e5vLP0SWMGCMq9wr",
        "https://www.youtube.com/embed/kgCj8UUEWjU?si=RzAwQJkIaHD_TssJ",
        "https://www.youtube.com/embed/Mtd0QotdlWo?si=eCt-d5xkEW_uzA71",
    ],
    기구: [
        "https://www.youtube.com/embed/vvHZhhI9TdE?si=UdJeG-eTYl15HhEY",
        "https://www.youtube.com/embed/vIX7datlPqI?si=WDt9MUvGuLQeAAlR",
        "https://www.youtube.com/embed/EMOO4JktSHg?si=pDaTp_HgzImZeyC9",
        "https://www.youtube.com/embed/vIX7datlPqI?si=mL16aZI3Id5vZXNm",
        "https://www.youtube.com/embed/FLA-y3thCSY?si=WNgYk9_CS41ZpcjQ",
        "https://www.youtube.com/embed/eEvOMo7fs60?si=2uCgjQUE20EqmCIf",
    ],
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const StyledSelect = styled.select`
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.1);
  background-color: white;
  font-size: 16px;
  cursor: pointer;
`;

const SwiperContainer = styled.div`
  width: 100%;
  max-width: 540px;
  height: 540px;
  background-color:f5ede6d6;
`;

const SlideStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5ede6d6;
  border-radius: 10px;
  padding: 10px;
`;

const LinkCom = () => {
    const [selectedPlace, setSelectedPlace] = useState('맨몸');

    const handlePlaceChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    return (
        <Container>
            <StyledSelect value={selectedPlace} onChange={handlePlaceChange}>
                <option value="맨몸">맨몸 스트레칭</option>
                <option value="매트">매트 스트레칭</option>
                <option value="기구">기구 스트레칭</option>
            </StyledSelect>

            <SwiperContainer>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                        renderBullet: (className) =>
                            `<span class="${className}" style="width: 15px; height: 30px; margin: 0 5px; background-color: #007bff;"></span>`,
                    }}
                    scrollbar={{ draggable: true }}
                    style={{ width: '100%', height: '100%' }}
                >
                    {videos[selectedPlace].map((video, index) => (
                        <SwiperSlide key={index}>
                            <SlideStyle>
                                <iframe
                                    width="420"
                                    height="220"
                                    src={video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </SlideStyle>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperContainer>
        </Container>
    );
};

export default LinkCom;
