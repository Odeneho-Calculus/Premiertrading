'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
import { useTranslations } from "next-intl"
//import CircleText from "../../components/elements/CircleText"

export default function Trader_one() {

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
    const t = useTranslations("MetaTrader4")
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle= {t('platform.title')} >
                
            <section className="platform-section trader-page-1 sec-pad bg-color-1">
                <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-45.png)" }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="../assets/images/resource/mockup-1.png" alt=""/></figure>
                                <div className="text-1"><h6>{t("onImg.multiChart")}</h6></div>
                                <div className="text-2"><h6>{t("onImg.newfeed")}</h6></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6> {t('platform.title')}</h6>
                                    <h2> {t('platform.subtitle')}</h2>
                                </div>
                                <div className="text-box">
                                    <p> {t('platform.description')}</p>
                                    <ul className="list-style-three clearfix">
                                        <li> {t('platform.features.feature1')} <span>01</span></li>
                                        <li>{t('platform.features.feature2')} <span>02</span></li>
                                        <li>{t('platform.features.feature3')} <span>03</span></li>
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
                        <h2>{t('download.title')}</h2>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h6>{t('download.mobile.subtitle')}</h6>
                                    <h3>{t('download.mobile.title')}</h3>
                                    <p>{t('download.mobile.description')}</p>
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
                                    <h6>{t('download.desktop.subtitle')}</h6>
                                    <h3>{t('download.mobile.title')}</h3>
                                    <p>{t('download.mobile.description')}</p>
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
                                    <h6>{t('download.web.subtitle')}</h6>
                                    <h3>{t('download.web.title')}</h3>
                                    <p>{t('download.web.description')}</p>
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
                                    <div className="bg-layer" style={{ backgroundImage: "url(../assets/images/banner/banner-img-5.webp)" }}></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>{t('tutorial.title')}</h6>
                                    <h2>{t('tutorial.subtitle')}</h2>
                                </div>
                                <div className="text-box">
                                    <h3>{t('tutorial.videoTitle')}</h3>
                                    <p>{t('tutorial.description')}</p>
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
                        <h6>{t('features.title')}</h6>
                        <h2>{t('features.subtitle')}</h2>
                    </div>
                    <div className="inner-container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 col-sm-12 left-column">
                                <div className="left-content clearfix">
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> {t('features.items.item1')}</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i>  {t('features.items.item2')}</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i>  {t('features.items.item3')}</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="../assets/images/resource/chooseus-1.jpg" alt=""/></figure>
                                    <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-20.png)" }}></div>
                                    <span className="big-text">Premier</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                                <div className="right-content clearfix">
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> {t('features.items.item1')}</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> {t('features.items.item2')}</Link></h5>
                                    </div>
                                    <div className="single-item">
                                        <h5><Link href="/trader-1"><i className="flaticon-check-1"></i> {t('features.items.item3')}</Link></h5>
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
                        <h2> {t('cta.title')}</h2>
                        <p> {t('cta.subtitle')}</p>
                        <ul className="info-list">
                            <li>
                                <span> {t('cta.contact.email.label')}</span>
                                <h5><Link href="mailto: info@premiertradingplatform.com ">info@premiertradingplatform.com </Link></h5>
                            </li>
                            {/*<li>
                                <span>Call us!</span>
                                <h5><Link href="tel:1800766123456">+1 800 766-1234 & 56</Link></h5>
                            </li>*/}
                        </ul>
                       {/*} <Link href="/trader-1" className="theme-btn btn-two"><span>Compare Platform</span></Link>*/}
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}