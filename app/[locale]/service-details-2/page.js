'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
import { useTranslations } from "next-intl"


export default function Service_details_page_two() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
    }

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
    const t = useTranslations("ServiceDetail")
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={t("tradingAccount")}>

            <section className="account-details service-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="account-sidebar default-sidebar">
                                {/*<div className="link-box"><Link href="/account-2" className="theme-btn btn-two"><span>Open Your Account</span></Link></div>*/}
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><Link href="/service-details"><span>{t('currencyPairs')}</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-2" className="current"><span>{t('tradingAccount')}</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-3"><span>{t('platformsAndTools')}</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-4"><span>{t('monitoringAndSupport')}</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                            <li><Link href="/service-details-5"><span>{t('educationAndTraining')}</span><i className="flaticon-right-arrow-1"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<div className="sidebar-widget download-widget">
                                    <div className="widget-title">
                                        <h3>Essentials</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="download-list clearfix">
                                            <li><button type="button">Service Details.pdf<i className="flaticon-download"></i></button></li>
                                            <li><button type="button">Terms & Conditions.pdf<i className="flaticon-download"></i></button></li>
                                        </ul>
                                    </div>
                                </div>*/}
                                <div className="sidebar-widget contact-widget">
                                    <div className="widget-content" style={{ backgroundImage: "url(../assets/images/resource/sidebar-1.jpg)" }}>
                                        <div className="shape-1" style={{ backgroundImage: "url(../assets/images/shape/shape-43.png)" }}></div>
                                        <div className="shape-2" style={{ backgroundImage: "url(../assets/images/shape/shape-44.png)" }}></div>
                                        <h3>{t("tradingConfidence")}</h3>
                                        <p> {t("navigatingMarkets")} </p>
                                        {/*<Link href="tel:18007661234" className="phone"><span>Phone: +1 800 766-1234</span></Link>
                                        <Link href="contact.html" className="theme-btn btn-two"><span>Start Now</span></Link>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="account-details-content">
                                <div className="content-one">
                                    <h2>{t("serviceD2.content1.title")}</h2>
                                    <p>
                                    {t("serviceD2.content1.description")} 
                                    </p>
                                    <figure className="image-box"><img src="../assets/images/resource/account-6.jpg" alt=""/></figure>
                                </div>
                                <div className="content-two">
                                    <div className="text-box">
                                        <h2>{t("serviceD2.content2.title")}</h2>
                                        <p>
                                        {t("serviceD2.content2.description")}
                                        </p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>01.</h4>
                                                <h3>{t('benefits.diversification.title')}</h3>
                                                <p>{t('benefits.diversification.shortDesc')}</p>
                                                <div className="overlay-content">
                                                    <h3>{t('benefits.diversification.title')}</h3>
                                                    <p>{t('benefits.diversification.longDesc')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>02.</h4>
                                                <h3>{t('benefits.globalExposure.title')}</h3>
                                                <p>{t('benefits.globalExposure.shortDesc')}</p>
                                                <div className="overlay-content">
                                                    <h3>{t('benefits.globalExposure.title')}</h3>
                                                    <p>{t('benefits.globalExposure.longDesc')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>03.</h4>
                                                <h3>{t('benefits.technicalAnalysis.title')}</h3>
                                                <p>{t('benefits.technicalAnalysis.shortDesc')}</p>
                                                <div className="overlay-content">
                                                    <h3>{t('benefits.technicalAnalysis.title')}</h3>
                                                    <p>{t('benefits.technicalAnalysis.longDesc')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <h4>04.</h4>
                                                <h3>{t('benefits.profitPotential.title')}</h3>
                                                <p>{t('benefits.profitPotential.shortDesc')}</p>
                                                <div className="overlay-content">
                                                    <h3>{t('benefits.profitPotential.title')}</h3>
                                                    <p>{t('benefits.profitPotential.longDesc')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scroll-text">
                                        <ul className="text-list">
                                            <li><i className="flaticon-checked-1"></i>{t('features.0')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.1')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.2')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.0')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.1')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.2')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.0')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.1')}</li>
                                            <li><i className="flaticon-checked-1"></i>{t('features.2')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content-three">
                                <div className="text-box">
                                        <h2>{t('whatsProvided.title')}</h2>
                                        <p>{t('whatsProvided.description')}</p>
                                    </div>
                                    <div className="tabs-box">
                                        <div className="tab-inner">
                                            <div className="tab-btn-box">
                                                <ul className="tab-btns tab-buttons clearfix">
                                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>{t('tabs.pairSelection')}</li>
                                                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>{t('tabs.majorCurrencyPair')}</li>
                                                    {/*<li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>{t('tabs.minorExoticPairs')}</li>*/}
                                                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>{t('tabs.marketAnalysis')}</li>
                                                    <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}>{t('tabs.leverageMargin')}</li>
                                                </ul>
                                            </div>
                                            <div className="tabs-content">
                                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                                    <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/poptradepairs2.jpg)" }}>
                                                        <div className="text-box">
                                                            <ul className="list-item">
                                                                <li>
                                                                    {t("tabs.tabContent.features.0")}
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                                                    <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/xauusd.jpg)" }}>
                                                        <div className="text-box">
                                                            <ul className="list-item">
                                                                <li>
                                                                {t("tabs.tabContent.features.1")}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="tab3">
                                                    <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <p>Cases are perfectly simple and easy to of choice and when nothing.</p>
                                                            <ul className="list-item">
                                                                <li>40+ Forex pairs</li>
                                                                <li>Deposit: USD, EUR, GBP, JPY</li>
                                                                <li>Trading Central</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>*/}
                                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="tab4">
                                                    <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/marketanalysis2.jpg)" }}>
                                                        <div className="text-box">
                                                            <ul className="list-item">
                                                                <li>
                                                                {t("tabs.tabContent.features.2")}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="tab5">
                                                    <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/account-5.jpg)" }}>
                                                        <div className="text-box">
                                                            <ul className="list-item">
                                                                <li>
                                                                {t("tabs.tabContent.features.3")} 
                                                                </li>
                                                            
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-four faq-section">
                                    <div className="text-box">
                                        <h2>{t('cryptoInvestment.title')}</h2>
                                        <p>{t('cryptoInvestment.description')}</p>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className={isActive.key == 1 ? "accordion block current" : "accordion"}>
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <span>01</span>
                                                <h5>{t('cryptoInvestment.steps.openAccount.title')}</h5>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>{t('cryptoInvestment.steps.openAccount.description')}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 2 ? "accordion block current" : "accordion"}>
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <span>02</span>
                                                <h5>{t('cryptoInvestment.steps.fundTransfer.title')}</h5>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>{t('cryptoInvestment.steps.fundTransfer.description')}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={isActive.key == 3 ? "accordion block current" : "accordion"}>
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <span>03</span>
                                                <h5>{t('cryptoInvestment.steps.exploreCrypto.title')}</h5>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="text">
                                                    <p>{t('cryptoInvestment.steps.exploreCrypto.description')}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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