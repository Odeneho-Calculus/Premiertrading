'use client'
import { useTranslations } from "next-intl"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        el: '.swiper-pagination-two',
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Chooseus() {
  const t = useTranslations("Chooseus")
  return (
    <>
        <section className="chooseus-section sec-pad bg-color-2">
            <div className="auto-container">
                <div className="sec-title light">
                    <h6>{t("key_features")}</h6>
                    <h2>{t("why_trade_with_us")}</h2>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="theme_carousel">
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="../assets/images/icons/icon-11.png" alt=""/></div>
                                    </div>
                                    <h3>{t("trading_access.title")}</h3>
                                    <p>{t("trading_access.description")}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="../assets/images/icons/icon-12.png" alt=""/></div>
                                    </div>
                                    <h3>{t("competitive_fees.title")}</h3>
                                    <p>{t("competitive_fees.description")}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="../assets/images/icons/icon-13.png" alt=""/></div>
                                    </div>
                                    <h3>{t("advanced_security.title")}</h3>
                                    <p>{t("advanced_security.description")}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="../assets/images/icons/icon-11.png" alt=""/></div>
                                    </div>
                                    <h3>{t("multiple_trading_pairs.title")}</h3>
                                    <p>{t("multiple_trading_pairs.description")}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="../assets/images/icons/icon-12.png" alt=""/></div>
                                    </div>
                                    <h3>{t("professional_tools.title")}</h3>
                                    <p>{t("professional_tools.description")}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="../assets/images/icons/icon-13.png" alt=""/></div>
                                    </div>
                                    <h3>{t("dedicated_support.title")}</h3>
                                    <p>{t("dedicated_support.description")}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="dots-style-one">
                        <div className="swiper-pagination-two"></div>
                    </div>

                    <div className="nav-style-one">
                        <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                        <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}