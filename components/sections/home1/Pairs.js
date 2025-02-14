import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Pairs() {
  const t = useTranslations("Pairs")
  return (
    <>
        <section className="pairs-section sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-6.png)" }}></div>
            <div className="image-layer">
                <figure className="image-1"><img src="../assets/images/resource/vector-3.png" alt=""/></figure>
                <figure className="image-2"><img src="../assets/images/resource/vector-4.png" alt=""/></figure>
            </div>
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>{t("popular_pairs")}</h6>
                    <h2>{t("top_pairs_pricing")}</h2>
                </div>
                <div className="inner-container">
                    <div className="pairs-block-one red-block">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                <ul className="list-item clearfix">
                                    <li>{t("eur_usd.currency")}</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>{t("eur_usd.exchange")}</li>
                                </ul>
                                <span className="currency">{t("eur_usd.price")}</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">+0.04%</span>
                                    {/*<span className="sell">{t("eur_usd.sell")}</span>*/}
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>{t("eur_usd.trade")}</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="pairs-block-one">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                <ul className="list-item clearfix">
                                    <li>{t("usd_jpy.currency")}</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>{t("usd_jpy.exchange")}</li>
                                </ul>
                                <span className="currency">{t("usd_jpy.price")}</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">+0.04%</span>
                                   {/*} <span className="sell">{t("usd_jpy.sell")}</span>*/}
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>{t("usd_jpy.trade")}</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="pairs-block-one">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-up"></i></div>
                                <ul className="list-item clearfix">
                                    <li>{t("gbp_usd.currency")}</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>{t("gbp_usd.exchange")}</li>
                                </ul>
                                <span className="currency">{t("gbp_usd.price")}</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">+0.05%</span>
                                    {/*<span className="sell">{t("gbp_usd.sell")}</span>*/}
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>{t("gbp_usd.trade")}</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="pairs-block-one red-block">
                        <div className="inner-box">
                            <div className="left-column">
                                <div className="icon-box"><i className="flaticon-right-down"></i></div>
                                <ul className="list-item clearfix">
                                    <li>{t("eur_gbp.currency")}</li>
                                    <li><i className="flaticon-exchange"></i></li>
                                    <li>{t("eur_gbp.exchange")}</li>
                                </ul>
                                <span className="currency">{t("eur_gbp.price")}</span>
                            </div>
                            <div className="right-column">
                                <div className="text">
                                    <span className="currency-rate">-0.12%</span>
                                    {/*<span className="sell">{t("eur_gbp.sell")}</span>*/}
                                </div>
                                <div className="btn-box"><Link href="/" className="theme-btn"><span>{t("eur_gbp.trade")}</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn centred">
                        <Link href="/" className="theme-btn btn-two"><span>{t("see_more_pairs")}</span></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
