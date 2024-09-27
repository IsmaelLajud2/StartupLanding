import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Carousel.css'

const CarouselProyects = () => {


    return (
        <div className="container">
            <Swiper

                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src='Images/Cards/CardFondo1.png'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='Images/Cards/CardFondo2.png'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='Images/Cards/CardFondo3.png'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='Images/LogoStartup.png'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='Images/LogoStartup.png'></img>
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-circle"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-circle"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default CarouselProyects;
