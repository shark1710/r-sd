import React, { useState, useEffect } from 'react';
import '../assets/css/section/_infiniteslider.css'; // 스타일 파일을 추가해주세요.

const InfiniteSlider = ({ images }) => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const sliderInterval = setInterval(() => {
    // 다음 이미지로 이동
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 전환

    return () => {
    // 컴포넌트가 언마운트되면 인터벌을 정리합니다.
    clearInterval(sliderInterval);
    };
}, [currentIndex, images.length]);

return (
    <div className="infinite-slider">
    {images.map((image, index) => (
        <div
        key={index}
        className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
        <img src={image} alt={`Slide ${index + 1}`} />
        </div>
    ))}
    </div>
);
};

export default InfiniteSlider;