import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Featured() {
  const t = useTranslations("Featured")
  return (
    <>
      <section className="featured-section"> 
            <div className="bg-layer" style={{ backgroundImage: "url(../assets/images/background/feature-bg.jpg)" }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                        <div className="sec-title light">
                            <h6>{t("industryRecognition")}</h6>
                            <h2>{t("featuredIn")}</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                    <div className="left-content">
                                        <div className="featured-slider">
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-1.png" alt=""/></figure>
                                                    <p>{t("topCryptoExchange")}</p>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-2.png" alt=""/></figure>
                                                    <p>{t("bestTradingPlatform")}</p>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-3.png" alt=""/></figure>
                                                    <p>{t("mostSecureExchange")}</p>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-2.png" alt=""/></figure>
                                                    <p>{t("excellenceInInnovation")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                    <div className="right-content">
                                        <div className="featured-slider">
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-4.png" alt=""/></figure>
                                                    <p>{t("bestCustomerService")}</p>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-5.png" alt=""/></figure>
                                                    <p>{t("mostTrustedBrand")}</p>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-6.png" alt=""/></figure>
                                                    <p>{t("fastestGrowingExchange")}</p>
                                                </div>
                                            </div>
                                            <div className="featured-block-one">
                                                <div className="inner-box">
                                                    <figure className="clients-logo"><img src="../assets/images/clients/clients-5.png" alt=""/></figure>
                                                    <p>{t("bestMobileTradingApp")}</p>
                                                </div>
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
    </>
  )
}