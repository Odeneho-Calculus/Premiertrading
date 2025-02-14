'use client'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import VideoPopup from "@/components/elements/VideoPopup"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Chooseus from "@/components/sections/home1/Chooseus"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
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

export default function Account_one() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Accounts Overview">
                <section className="account-section sec-pad">
                    <div className="auto-container">
                        <div className="sec-title">
                            <h6>Account Types</h6>
                            <h2>Crypto Trading Accounts</h2>
                        </div>
                        <div className="inner-container">
                            <Swiper {...swiperOptions} className="theme_carousel">
                                <SwiperSlide>
                                    <div className="account-block-one">
                                        <div className="inner-box">
                                            <h3><Link href="/account-2">Demo Account</Link></h3>
                                            <div className="icon-box"><img src="assets/images/icons/icon-81.png" alt=""/></div>
                                            <figure className="image-box"><img src="assets/images/resource/account-1.jpg" alt=""/></figure>
                                            <p>Experience trading without risk using our demo account. Perfect for beginners to practice and learn.</p>
                                            <div className="link"><Link href="/account-2"><span>Explore More</span></Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="account-block-one">
                                        <div className="inner-box">
                                            <h3><Link href="/account-3">Individual Account</Link></h3>
                                            <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                            <figure className="image-box"><img src="assets/images/resource/account-2.jpg" alt=""/></figure>
                                            <p>Open an individual account to trade cryptocurrencies with full control over your investments.</p>
                                            <div className="link"><Link href="/account-3"><span>Explore More</span></Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="account-block-one">
                                        <div className="inner-box">
                                            <h3><Link href="/account-4">Professional Account</Link></h3>
                                            <div className="icon-box"><img src="assets/images/icons/icon-83.png" alt=""/></div>
                                            <figure className="image-box"><img src="assets/images/resource/account-3.jpg" alt=""/></figure>
                                            <p>Designed for experienced traders, our professional account offers advanced tools and features for optimal trading.</p>
                                            <div className="link"><Link href="/account-4"><span>Explore More</span></Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="dots-style-one">
                                <div className="swiper-pagination"></div>
                            </div>

                            <div className="nav-style-one">
                                <button type="button" className="owl-prev"><span className="flaticon-left"></span></button>
                                <button type="button" className="owl-next"><span className="flaticon-right-arrow-1"></span></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pricing-style-two bg-color-1">
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <h6>Join Premier</h6>
                            <h2>Enter a Trading Challenge</h2>
                        </div>
                        <div className="tabs-box">
                            <div className="tab-btn-box centred">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>1 Step Challenge</li>
                                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>2 Step Challenge</li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                            <div className="pricing-block-two">
                                                <div className="pricing-table">
                                                    <div className="table-header">
                                                        <h3>Starter Plan</h3>
                                                        <p>Ideal for beginners looking to start trading.</p>
                                                        <h2>$10k <span>Funding Amount</span></h2>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul className="feature-list clearfix">
                                                            <li>Target<span>$500</span></li>
                                                            <li>Min. Trading Days<span>5 Days</span></li>
                                                            <li>Daily Drawdown<span>5%</span></li>
                                                            <li>Max. Drawdown<span>10%</span></li>
                                                            <li>Trading Period<span>No Limit</span></li>
                                                            <li>Refundable Fee<span>$99</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="table-footer">
                                                        <div className="check-box">
                                                            <input className="check" type="checkbox" id="checkbox1"/>
                                                            <label htmlFor="checkbox1">Compare</label>
                                                        </div>
                                                        <Link href="/index-3"><span>Start Now</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                            <div className="pricing-block-two">
                                                <div className="special-text"><h6>Popular Plan</h6></div>
                                                <div className="pricing-table">
                                                    <div className="table-header">
                                                        <h3>Standard Plan</h3>
                                                        <p>Perfect for traders with some experience.</p>
                                                        <h2>$25k <span>Funding Amount</span></h2>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul className="feature-list clearfix">
                                                            <li>Target<span>$1000</span></li>
                                                            <li>Min. Trading Days<span>5 Days</span></li>
                                                            <li>Daily Drawdown<span>5%</span></li>
                                                            <li>Max. Drawdown<span>10%</span></li>
                                                            <li>Trading Period<span>No Limit</span></li>
                                                            <li>Refundable Fee<span>$199</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="table-footer">
                                                        <div className="check-box">
                                                            <input className="check" type="checkbox" id="checkbox2"/>
                                                            <label htmlFor="checkbox2">Compare</label>
                                                        </div>
                                                        <Link href="/index-3"><span>Start Now</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                            <div className="pricing-block-two">
                                                <div className="pricing-table">
                                                    <div className="table-header">
                                                        <h3>Advanced Plan</h3>
                                                        <p>For seasoned traders looking for higher funding.</p>
                                                        <h2>$50k <span>Funding Amount</span></h2>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul className="feature-list clearfix">
                                                            <li>Target<span>$2000</span></li>
                                                            <li>Min. Trading Days<span>5 Days</span></li>
                                                            <li>Daily Drawdown<span>5%</span></li>
                                                            <li>Max. Drawdown<span>10%</span></li>
                                                            <li>Trading Period<span>No Limit</span></li>
                                                            <li>Refundable Fee<span>$299</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="table-footer">
                                                        <div className="check-box">
                                                            <input className="check" type="checkbox" id="checkbox3"/>
                                                            <label htmlFor="checkbox3">Compare</label>
                                                        </div>
                                                        <Link href="/index-3"><span>Start Now</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="step_two">
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                            <div className="pricing-block-two">
                                                <div className="pricing-table">
                                                    <div className="table-header">
                                                        <h3>Starter Plan</h3>
                                                        <p>Ideal for beginners looking to start trading.</p>
                                                        <h2>$110k <span>Funding Amount</span></h2>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul className="feature-list clearfix">
                                                            <li>Target<span>$500</span></li>
                                                            <li>Min. Trading Days<span>5 Days</span></li>
                                                            <li>Daily Drawdown<span>5%</span></li>
                                                            <li>Max. Drawdown<span>10%</span></li>
                                                            <li>Trading Period<span>No Limit</span></li>
                                                            <li>Refundable Fee<span>$99</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="table-footer">
                                                        <div className="check-box">
                                                            <input className="check" type="checkbox" id="checkbox4"/>
                                                            <label htmlFor="checkbox4">Compare</label>
                                                        </div>
                                                        <Link href="/index-3"><span>Start Now</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                            <div className="pricing-block-two">
                                                <div className="special-text"><h6>Popular Plan</h6></div>
                                                <div className="pricing-table">
                                                    <div className="table-header">
                                                        <h3>Standard Plan</h3>
                                                        <p>Perfect for traders with some experience.</p>
                                                        <h2>$125k <span>Funding Amount</span></h2>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul className="feature-list clearfix">
                                                            <li>Target<span>$1000</span></li>
                                                            <li>Min. Trading Days<span>5 Days</span></li>
                                                            <li>Daily Drawdown<span>5%</span></li>
                                                            <li>Max. Drawdown<span>10%</span></li>
                                                            <li>Trading Period<span>No Limit</span></li>
                                                            <li>Refundable Fee<span>$199</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="table-footer">
                                                        <div className="check-box">
                                                            <input className="check" type="checkbox" id="checkbox5"/>
                                                            <label htmlFor="checkbox5">Compare</label>
                                                        </div>
                                                        <Link href="/index-3"><span>Start Now</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                            <div className="pricing-block-two">
                                                <div className="pricing-table">
                                                    <div className="table-header">
                                                        <h3>Advanced Plan</h3>
                                                        <p>For seasoned traders looking for higher funding.</p>
                                                        <h2>$150k <span>Funding Amount</span></h2>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul className="feature-list clearfix">
                                                            <li>Target<span>$2000</span></li>
                                                            <li>Min. Trading Days<span>5 Days</span></li>
                                                            <li>Daily Drawdown<span>5%</span></li>
                                                            <li>Max. Drawdown<span>10%</span></li>
                                                            <li>Trading Period<span>No Limit</span></li>
                                                            <li>Refundable Fee<span>$299</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="table-footer">
                                                        <div className="check-box">
                                                            <input className="check" type="checkbox" id="checkbox6"/>
                                                            <label htmlFor="checkbox6">Compare</label>
                                                        </div>
                                                        <Link href="/index-3"><span>Start Now</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Chooseus/>

                <section className="profit-calculator alternat-2">
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 profit-column">
                                <div className="profit-inner">
                                    <div className="bg-layer"></div>
                                    <span className="big-text">Calculator</span>
                                    <div className="inner-box">
                                        <h5>Select Account Size</h5>
                                        <button className="w-125"><span id="accountSizeLabel">$1,000</span></button><br/>
                                        <div className="single-item">
                                            <input type="range" id="accountSizeRange" min="1000" max="100000" step="10"/>
                                            <div className="currency-list">
                                                <span>$1,000</span>
                                                <span>$100,000</span>
                                            </div>
                                        </div>

                                        <h5>Profit Rate</h5>
                                        <button className="w-125"><span id="profitRateLabel">0.5%</span></button><br/>
                                        <div className="single-item">
                                            <input type="range" id="profitRateRange" min="0.005" max="0.1" step="0.0001"/>
                                            <div className="currency-list">
                                                <span>0.5%</span>
                                                <span>10%</span>
                                            </div>
                                        </div>

                                        <br/>

                                        <div className="btn-box">
                                            <h3>$20<span>/Month</span></h3>
                                            <button className="theme-btn btn-two"><span>START TRADING</span></button>
                                        </div>

                                        <h4 id="result"></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <h6>Profit Calculator</h6>
                                        <h2>Estimate the earnings for a full-time trader</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>Calculate your potential earnings and manage your risks effectively with our profit calculator.</p>
                                        <ul className="list-style-two clearfix">
                                            <li>Accurate Profit Calculation</li>
                                            <li>Risk Management</li>
                                            <li>Improved Decision Making</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="working-style-two alternat-2 bg-color-1">
                    <div className="auto-container">
                        <div className="sec-title">
                            <h6>How It Works</h6>
                            <h2>Deep Dive into Evaluation</h2>
                            <div className="video-inner">
                                <VideoPopup />
                                <h5>Watch this video for <br />trading success</h5>
                            </div>
                        </div>
                        <div className="inner-container">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }}></div>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                    <div className="working-block-two">
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <h3>Trading Challenge</h3>
                                                <p>Participate in our trading challenge to test your skills and earn rewards.</p>
                                            </div>
                                            <div className="decore"></div>
                                            <div className="step"><h6>Step 01</h6></div>
                                            <div className="icon-box"><img src="assets/images/icons/icon-84.png" alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                    <div className="working-block-two">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-85.png" alt=""/></div>
                                            <div className="step"><h6>Step 02</h6></div>
                                            <div className="decore"></div>
                                            <div className="text-box">
                                                <h3>Get Verified</h3>
                                                <p>Complete the verification process to ensure your trading account is secure.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                    <div className="working-block-two">
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <h3>Get Funded</h3>
                                                <p>Receive funding to start trading and maximize your potential earnings.</p>
                                            </div>
                                            <div className="decore"></div>
                                            <div className="step"><h6>Step 03</h6></div>
                                            <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                                    <div className="working-block-two">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-87.png" alt=""/></div>
                                            <div className="step"><h6>Step 04</h6></div>
                                            <div className="decore"></div>
                                            <div className="text-box">
                                                <h3>Get Paid</h3>
                                                <p>Withdraw your profits and enjoy the rewards of your trading success.</p>
                                            </div>
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