'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import React from 'react'
import CircleText from "../../../components/elements/CircleText"
import { useTranslations } from "next-intl"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
    const t = useTranslations("Banner");
    return (
        <> 
        <section className="banner-section">
            <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-1.png)" }}></div>
            <Swiper {...swiperOptions} className="theme_carousel banner-carousel">
                <SwiperSlide className="slide-item">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h6>{t("welcome")}</h6>
                                    <h2>{t("navigate")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="../assets/images/banner/banner-img-1.jpg" alt=""/></figure>
                                    <div className='curve-text'>
                                        <div className="curved-circle"><CircleText text={t("circleText")} radius={58} /></div>
                                    </div>
                                    <div className="text-box">
                                        <p>{t("access_tools")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h6>{t("strategic_investment")}</h6>  
                                    <h2>{t("diversify")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="../assets/images/banner/banner-img-2.jpg" alt=""/></figure>
                                    <div className='curve-text'>
                                        <div className="curved-circle"><CircleText text={t("circleText")} radius={58} /></div>
                                    </div>
                                    <div className="text-box">
                                        <p>{t("secure_trading")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h6>{t("advanced_trading")}</h6>
                                    <h2>{t("trade_professionally")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="../assets/images/banner/banner-img-3.jpg" alt=""/></figure>
                                    <div className='curve-text'>
                                        <div className="curved-circle"><CircleText text={t("circleText")} radius={58} /></div>
                                    </div>
                                    <div className="text-box">
                                        <p>{t("comprehensive_data")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="owl-dots">
                    <div className="swiper-pagination"></div>
                </div>

                <div className="owl-nav">
                    <button type="button" className="owl-prev"><span className="flaticon-left-align"></span></button>
                    <button type="button" className="owl-next"><span className="flaticon-right"></span></button>
                </div>
            </Swiper>
        </section>
        </>
    )
}