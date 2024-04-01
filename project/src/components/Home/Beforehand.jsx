import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto; /* 가로로 오버플로우되는 경우 스크롤 표시 */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const PrevNextButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')} /* 왼쪽 또는 오른쪽에 고정 */
  z-index: 1; /* 다른 요소 위에 표시되도록 z-index 설정 */
`;

const images = [
  './img/AA.jpg',
  'image2.jpg',
  'image3.jpg',
  // 추가 이미지들...
];

function Beforehand() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <GalleryContainer>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </GalleryContainer>
      <PrevNextButton direction="prev" onClick={goToPrev}>{'<'}</PrevNextButton>
      <PrevNextButton direction="next" onClick={goToNext}>{'>'}</PrevNextButton>
    </div>
  );
}

export default Beforehand;
