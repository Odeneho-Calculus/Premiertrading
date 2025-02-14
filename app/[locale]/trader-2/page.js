'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
//import CircleText from "../../components/elements/CircleText"

export default function Trader_two() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="MetaTrader 5">
                
            <section className="platform-section trader-page-1 sec-pad bg-color-1">
                <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-45.png)" }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="../assets/images/resource/mockup-1.png" alt=""/></figure>
                                <div className="text-1"><h6>Multiple Charting</h6></div>
                                <div className="text-2"><h6>News Feed</h6></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>Platform Mt5</h6>
                                    <h2>Use 5? Get exclusive tools with Premier</h2>
                                </div>
                                <div className="text-box">
                                    <p>Denouncing pleasure and praising pain was born and  will give you a complete account of the system, and expound the actual teachings .</p>
                                    <ul className="list-style-three clearfix">
                                        <li>Ultra fast trade execution <span>01</span></li>
                                        <li>Trading from a smartphone or tablet <span>02</span></li>
                                        <li>No dealing desk, no requotes <span>03</span></li>
                                    </ul>
                                    {/*<Link href="/trader-1" className="theme-btn btn-two"><span>Start Trading</span></Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="download-section centred">
                <div className="auto-container">
                    <div className="inner-container">
                        <h2>Download MetaTrader 5</h2>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h6>Metatrader 5</h6>
                                    <h3>For Mobile Users</h3>
                                    <p>Available on Android & iPhone platforms.</p>
                                    {/*<ul className="download-list">
                                        <li className="play-store">
                                            <Link href="/trader-1"><img src="../assets/images/icons/icon-18.png" alt=""/></Link>
                                        </li>
                                        <li className="app-store">
                                            <Link href="/trader-1"><i className="flaticon-apple"></i></Link>
                                        </li>
                                    </ul>*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h6>Metatrader 5</h6>
                                    <h3>For Desktop Users</h3>
                                    <p>Available on Windows & macOS platforms.</p>
                                    {/*<ul className="download-list">
                                        <li className="play-store">
                                            <Link href="/trader-1"><img src="../assets/images/icons/icon-18.png" alt=""/></Link>
                                        </li>
                                        <li className="app-store">
                                            <Link href="/trader-1"><i className="flaticon-apple"></i></Link>
                                        </li>
                                    </ul>*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h6>Metatrader 5</h6>
                                    <h3>For Web Terminal</h3>
                                    <p>Trading directly via your web browser.</p>
                                    {/*<Link href="/trader-1" className="theme-btn btn-two"><span>web platform</span></Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                            <div className="video-content">
                                <div className="video-inner">
                                    <div className="bg-layer" style={{ backgroundImage: "url(../assets/images/background/video-bg-2.jpg)" }}></div>
                                    {/*<div className="video-btn">
                                        <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><img src="../assets/images/icons/icon-56.png" alt=""/></Link> 
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>Video Tutorial</h6>
                                    <h2>MT5 platform clear & useful videos</h2>
                                </div>
                                <div className="text-box">
                                    <h3>Introduction to forex trading</h3>
                                    <h6>Duration: 6.05 Mins</h6>
                                    <p>Watch our forex trading videos to get the most from the markets & become a profitable forex trader.</p>
                                    {/*<Link href="/index-4" className="theme-btn btn-two"><span>More Videos</span></Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="chooseus-style-three trader-page-1 sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred light">
                        <h6>Key Highlights</h6>
                        <h2>MT5 platform features</h2>
                    </div>
                    <div className="inner-container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 col-sm-12 left-column">
                                <div className="left-content clearfix">
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> 90% Virtual Profit Split</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> 10% Virtual Profit</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> 1-step Evaluation</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="../assets/images/resource/chooseus-1.jpg" alt=""/></figure>
                                    <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-20.png)" }}></div>
                                    <span className="big-text">MT5</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                                <div className="right-content clearfix">
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> 90% Virtual Profit Split</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> 10% Virtual Profit</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> 1-step Evaluation</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="lower-content centred">
                        <h3>90% Virtual Profit Split</h3>
                        <p>Packages and web page editors now use lorem ipsum as their default model text, and a search for lorem <br />will uncover many web sites still in their infancy. Various versions</p>
                        <Link href="/trader-1" className="theme-btn btn-two"><span>More Details</span></Link>
                    </div>*/}
                </div>
            </section>

            {/*<section className="faq-section alternat-2 sec-pad">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="../assets/images/resource/faq-1.png" alt=""/></figure>
                                <div className="text"><h6>24/7 Support</h6></div>
                                <div className="icon-box"><img src="../assets/images/icons/icon-89.png" alt=""/></div>
                                <div className="curve-text">
                                    <div className="link"><a href="index-2.html"><i className="flaticon-right-arrow-1"></i></a></div>
                                    <div className='circle-text'><CircleText text="ask your questions to experts&nbsp;.&nbsp;" radius={70} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>Faq’s</h6>
                                    <h2>Common queries & solutions</h2>
                                </div>
                                <ul className="accordion-box">
                                    <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                            <h5>Does Premier have a good reputation?</h5>
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="text">
                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                            <h5>How can i start my journey as an Premier trader?</h5>
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="text">
                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                            <h5>Who is eligible to join?</h5>
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="text">
                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={isActive.key == 4 ? "accordion block current" : "accordion"}>
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                            <h5>Is my income subject to taxation?</h5>
                                        </div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="text">
                                                <p>Trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            <section className="cta-style-two bg-color-1 centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-46.png)" }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>Not sure if MT5 is for you?</h2>
                        <p>For platform feature comparisons, consult our table.</p>
                        <ul className="info-list">
                            <li>
                                <span>Mail us!</span>
                                <h5><Link href="mailto: premierltd@gmail.com"> premierltd@gmail.com</Link></h5>
                            </li>
                            {/*<li>
                                <span>Call us!</span>
                                <h5><Link href="tel:1800766123456">+1 800 766-1234 & 56</Link></h5>
                            </li>*/}
                        </ul>
                        {/*<Link href="/trader-1" className="theme-btn btn-two"><span>Compare Platform</span></Link>*/}
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}