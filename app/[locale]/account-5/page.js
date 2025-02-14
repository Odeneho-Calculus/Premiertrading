'use client'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import AccountDetails from "@/components/sections/accound-details/AccountDetails"


export default function Account_four() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>

            <section className="funding-section alternat-2">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/funding-bg.jpg)" }}></div>
                <div className="auto-container">
                    <div className="sec-title light centred">
                        <h2>VIP Account</h2>
                    </div>
                    <div className="tabs-box-2">
                        <div className="tab-btn-two">
                            <ul className="tab-btns tab-buttons-2 clearfix">
                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn-2 active-btn" : "tab-btn"}>1 Step Challenge</li>
                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn-2 active-btn" : "tab-btn"}>2 Step Challenge</li>
                            </ul>
                        </div>
                        <div className="tabs-content-2">
                            <div className={activeIndex === 1 ? "tab-2 active-tab" : "tab"}>
                                <div className="content-box">
                                    <div className="row clearfix">
                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/vector-2.png" alt=""/></figure>
                                                <h2>10k<span>.USD</span></h2>
                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                <Link href="/" className="theme-btn"><span>Start Now</span></Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                            <ul className="trading-list clearfix">
                                                <li>Target<span>$800</span></li>
                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                <li>Daily Drawdown<span>5%</span></li>
                                                <li>Max.Drawdown<span>10%</span></li>
                                                <li>Trading Period<span>No Limit</span></li>
                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                <li>Leverage<span>Up to 1:100</span></li>
                                                <li>Monthly Fees<span>No Fees</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-2 active-tab" : "tab"} id="tab2">
                                <div className="content-box">
                                    <div className="row clearfix">
                                        <div className="col-lg-5 col-md-6 col-sm-12 inner-column">
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/resource/vector-2.png" alt=""/></figure>
                                                <h2>20k<span>.USD</span></h2>
                                                <p>Speed up your trading journey with our single-phase assessment.</p>
                                                <Link href="/" className="theme-btn"><span>Start Now</span></Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-sm-12 trading-column">
                                            <ul className="trading-list clearfix">
                                                <li>Target<span>$1600</span></li>
                                                <li>Min.Trading Days<span>5 Days</span></li>
                                                <li>Daily Drawdown<span>5%</span></li>
                                                <li>Max.Drawdown<span>10%</span></li>
                                                <li>Trading Period<span>No Limit</span></li>
                                                <li>Refundable Fee<span>$99 O/T</span></li>
                                                <li>Leverage<span>Up to 1:100</span></li>
                                                <li>Monthly Fees<span>No Fees</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="account-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <AccountDetails/>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="account-sidebar default-sidebar">
                                <div className="link-box"><Link href="/account-2" className="theme-btn btn-two"><span>Open Your Account</span></Link></div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Account Types</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><Link href="/account-2"><span>Demo Account</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/account-3"><span>Individual Account</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/account-4"><span>Professional Account</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/account-5" className="current"><span>VIP Account</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/account-6"><span>ECN Account</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget download-widget">
                                    <div className="widget-title">
                                        <h3>Essentials</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="download-list clearfix">
                                            <li><button type="button">Service Details.pdf<i className="flaticon-download"></i></button></li>
                                            <li><button type="button">Terms & Conditions.pdf<i className="flaticon-download"></i></button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget contact-widget">
                                    <div className="widget-content" style={{ backgroundImage: "url(assets/images/resource/sidebar-1.jpg)" }}>
                                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-44.png)" }}></div>
                                        <h3>Trading with <br />Confidence, Winning <br />with <span>Pre</span>mier!...</h3>
                                        <p>Navigating Markets, Maximizing Profits.</p>
                                        <Link href="tel:18007661234" className="phone"><span>Phone: +1 800 766-1234</span></Link>
                                        <Link href="contact.html" className="theme-btn btn-two"><span>Start Now</span></Link>
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