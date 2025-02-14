import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Service_page() {
    const t = useTranslations("OurServices")
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle= {t("pageTitle")} >

            <section className="service-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>{t("service1.label")}</h6>
                                    <h3><Link href="/service-details">{t("service1.title")}</Link></h3>
                                    <p>{t("service1.description")}</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="../assets/images/service/service-1.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>{t("service1.button")}</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>{t("service2.label")}</h6>
                                    <h3><Link href="/service-details-2">{t("service2.title")}</Link></h3>
                                    <p>{t("service2.description")}</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="../assets/images/service/service-2.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-2" className="theme-btn"><span>{t("service2.button")}</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>{t("service3.label")}</h6>
                                    <h3><Link href="/service-details-3">{t("service3.title")}</Link></h3>
                                    <p>{t("service3.description")}</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="../assets/images/service/service-3.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-3" className="theme-btn"><span>{t("service3.button")}</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>{t("service4.label")}</h6>
                                    <h3><Link href="/service-details-4">{t("service4.title")}</Link></h3>
                                    <p>{t("service4.description")}</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="../assets/images/service/service-4.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-4" className="theme-btn"><span>{t("service4.button")}</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>{t("service5.label")}</h6>
                                    <h3><Link href="/service-details-5">{t("service5.title")}</Link></h3>
                                    <p>{t("service5.description")}</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="../assets/images/service/service-6.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-5" className="theme-btn"><span>{t("service5.button")}</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <h6>{t("service6.label")}</h6>
                                    <h3><Link href="/service-details-4">{t("service6.title")}</Link></h3>
                                    <p>{t("service6.description")}</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="../assets/images/service/service-7.jpg" alt=""/></figure>
                                        <div className="btn-box"><Link href="/service-details-4" className="theme-btn"><span>{t("service6.button")}</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-style-two bg-color-1 centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-46.png)" }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>
                        <ul className="info-list">
                            <li>
                                <span>{t("cta.emailLabel")}</span>
                                <h5><Link href="mailto:info@premiertradingplatform.com ">info@premiertradingplatform.com </Link></h5>
                            </li>
                            {/*<li>
                                <span>Call Us</span>
                                <h5><Link href="tel:1800766123456">+1 800 766-1234 & 56</Link></h5>
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}