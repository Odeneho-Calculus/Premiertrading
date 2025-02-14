'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
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

export default function Trader_two() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Crypto Investment Education">

            <section className="course-section centred sec-pad">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>Courses Offered</h6>
                        <h2>Start Your Crypto Investment Journey</h2>
                    </div>
                    <div className="industry-tab">
                        <div className="tab-btns industry-tab-btns centred">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "p-tab-btn"}><h6><span>Beginner</span><i className="flaticon-down-arrow"></i></h6></li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "p-tab-btn"}><h6><span>Intermediate</span><i className="flaticon-down-arrow"></i></h6></li>
                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "p-tab-btn"}><h6><span>Advanced</span><i className="flaticon-down-arrow"></i></h6></li>
                        </div>
                        <div className="p-tabs-content">
                            <div className={activeIndex === 1 ? "p-tab active-tab" : "p-tab"}>
                                <Swiper {...swiperOptions} className="theme_carousel">
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>5 Lectures _ 1h 26 Mins Duration</p></div>
                                                <h3><Link href="/education">Introduction to Cryptocurrency and Blockchain</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>40 Lectures _ 8h 35 Mins Duration</p></div>
                                                <h3><Link href="/education">The Complete Crypto Investment Course-2023</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>4 Lectures _ 2h 45 Mins Duration</p></div>
                                                <h3><Link href="/education">Crypto Trading Strategies for Beginners</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={activeIndex === 2 ? "p-tab active-tab" : "p-tab"} id="tab2">
                                <Swiper {...swiperOptions} className="theme_carousel">
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>5 Lectures _ 1h 26 Mins Duration</p></div>
                                                <h3><Link href="/education">Intermediate Crypto Trading Techniques</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>40 Lectures _ 8h 35 Mins Duration</p></div>
                                                <h3><Link href="/education">Advanced Crypto Portfolio Management</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>4 Lectures _ 2h 45 Mins Duration</p></div>
                                                <h3><Link href="/education">Understanding DeFi and Smart Contracts</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={activeIndex === 3 ? "p-tab active-tab" : "p-tab"} id="tab3">
                                <Swiper {...swiperOptions} className="theme_carousel">
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>5 Lectures _ 1h 26 Mins Duration</p></div>
                                                <h3><Link href="/education">Mastering Crypto Technical Analysis</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>40 Lectures _ 8h 35 Mins Duration</p></div>
                                                <h3><Link href="/education">Advanced Crypto Risk Management</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="course-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/resource/course-1.png" alt=""/></figure>
                                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="assets/images/icons/icon-90.png" alt=""/></Link>
                                                </div>
                                                <div className="text"><p><i className="flaticon-read"></i>4 Lectures _ 2h 45 Mins Duration</p></div>
                                                <h3><Link href="/education">Crypto Futures and Options Trading</Link></h3>
                                                <div className="link"><Link href="/education"><span>Learn Now</span></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="dots-style-one">
                                <div className="swiper-pagination-two"></div>
                            </div>
                            <div className="nav-style-one">
                                <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                                <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lesson-section bg-color-1">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>Lessons</h6>
                        <h2>Comprehensive Crypto Investment Lessons</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 lesson-block">
                            <div className="lesson-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/lesson-1.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <span className="rating"><i className="flaticon-rate-star-button"></i>4.9</span>
                                        <h4>$120</h4>
                                        <h3><Link href="/education">Understanding Blockchain Technology</Link></h3>
                                        <ul className="info-list clearfix">
                                            <li><i className="flaticon-growth"></i>Beginner</li>
                                            <li><i className="flaticon-clock"></i>12 Hrs</li>
                                            <li><i className="flaticon-read"></i>24 Lessons</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 lesson-block">
                            <div className="lesson-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/lesson-2.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <span className="rating"><i className="flaticon-rate-star-button"></i>5.0</span>
                                        <h4>$99</h4>
                                        <h3><Link href="/education">Crypto Market Analysis and Trends</Link></h3>
                                        <ul className="info-list clearfix">
                                            <li><i className="flaticon-growth"></i>Advanced</li>
                                            <li><i className="flaticon-clock"></i>20 Hrs</li>
                                            <li><i className="flaticon-read"></i>35 Lessons</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 lesson-block">
                            <div className="lesson-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/lesson-3.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <span className="rating"><i className="flaticon-rate-star-button"></i>5.0</span>
                                        <h4>$49</h4>
                                        <h3><Link href="/education">Risk Management in Crypto Investments</Link></h3>
                                        <ul className="info-list clearfix">
                                            <li><i className="flaticon-growth"></i>Advanced</li>
                                            <li><i className="flaticon-clock"></i>20 Hrs</li>
                                            <li><i className="flaticon-read"></i>35 Lessons</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 lesson-block">
                            <div className="lesson-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="assets/images/resource/lesson-4.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <span className="rating"><i className="flaticon-rate-star-button"></i>4.9</span>
                                        <h4>$84</h4>
                                        <h3><Link href="/education">Crypto Trading Tools and Platforms</Link></h3>
                                        <ul className="info-list clearfix">
                                            <li><i className="flaticon-growth"></i>Beginner</li>
                                            <li><i className="flaticon-clock"></i>12 Hrs</li>
                                            <li><i className="flaticon-read"></i>24 Lessons</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}