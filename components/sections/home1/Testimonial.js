'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {
    const t = useTranslations("Testimonial")
    return (
        <>
        <section className="testimonial-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>{t("sectionTitle")}</h6>
                    <h2>{t("mainTitle")}</h2>
                </div>
                <div className="upper-box">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <h3><img src="../assets/images/icons/icon-14.png" alt="Trustpilot"/>{t("trustpilot.title")}</h3>
                                <h6>{t("trustpilot.rating")} <br />4.9/5 <span>{t("trustpilot.reviewCount")}</span></h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <h5><img src="../assets/images/icons/icon-15.png" alt="Share your thoughts"/>{t("shareThoughts")}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="../assets/images/resource/testimonial-1.png" alt="Nathan Felix"/></figure>
                                    <h3>Nathan Felix</h3>
                                    <span className="designation">{t("testimonials.0.designation")}</span>
                                </div>
                                <div className="text-box">
                                    <h5>{t("testimonials.0.experienceTitle")}<img src="../assets/images/icons/icon-16.png" alt="Star Icon"/></h5>
                                    <p>{t("testimonials.0.experienceDescription")}</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="author-box">
                                    <div className="icon-box"><i className="flaticon-quotation"></i></div>
                                    <figure className="thumb-box"><img src="../assets/images/resource/testimonial-2.png" alt="Eloise Juniper"/></figure>
                                    <h3>Eloise Juniper</h3>
                                    <span className="designation">{t("testimonials.1.designation")}</span>
                                </div>
                                <div className="text-box">
                                    <h5>{t("testimonials.1.experienceTitle")}<img src="../assets/images/icons/icon-16.png" alt="Star Icon"/></h5>
                                    <p>{t("testimonials.1.experienceDescription")}</p>
                                    <ul className="rating">
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                        <li><i className="flaticon-rate-star-button"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        </>
    )
}