import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Service() {
  const t = useTranslations("Services")
  return (
    <>
        <section className="service-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>{t("sectionTitle")}</h6>
                    <h2>{t("sectionSubtitle")}</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <h6>{t("service1.label")}</h6>
                                <h3><Link href="/service-details">{t("service1.title")}</Link></h3>
                                <p>{t("service1.description")}</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/service/service-1.jpg" alt="Currency Pair Analysis"/></figure>
                                    <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>{t("service1.buttonText")}</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <h6>{t("service2.label")}</h6>
                                <h3><Link href="/service-details">{t("service2.title")}</Link></h3>
                                <p>{t("service2.description")}</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/service/service-1.jpg" alt="Currency Pair Analysis"/></figure>
                                    <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>{t("service2.buttonText")}</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <h6>{t("service3.label")}</h6>
                                <h3><Link href="/service-details">{t("service3.title")}</Link></h3>
                                <p>{t("service3.description")}</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/service/service-1.jpg" alt="Currency Pair Analysis"/></figure>
                                    <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>{t("service3.buttonText")}</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 image-block">
                        <div className="image-inner">
                            <figure className="image clearfix"><img src="assets/images/resource/vector-1.png" alt=""/></figure>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <h6>{t("service4.label")}</h6>
                                <h3><Link href="/service-details">{t("service4.title")}</Link></h3>
                                <p>{t("service4.description")}</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/service/service-1.jpg" alt="Currency Pair Analysis"/></figure>
                                    <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>{t("service4.buttonText")}</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-two">
                            <div className="inner-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/service/service-5.jpg)" }}></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="Expert Advice"/></div>
                                <h3>{t("service5.title")}</h3>  
                                <p>{t("service5.description")}</p>
                                <Link href="/" className="theme-btn"><span>{t("service5.buttonText")}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}