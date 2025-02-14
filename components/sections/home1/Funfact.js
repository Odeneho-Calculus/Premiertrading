'use client'
import { useTranslations } from "next-intl";
import { useState } from "react"

export default function Funfact() {
    const t = useTranslations("Funfact")
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <>
            <section className="funfact-section bg-color-1">
                <div className="bg-layer"></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                <div className="sec-title">
                                    <h6>{t("keyMetrics")}</h6>
                                    <h2>{t("performance")}</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="funfact-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt=""/></div>
                                        <h2>24 <span>{t("hours")}</span></h2>
                                        <p>{t("averagePayout")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="funfact-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt=""/></div>
                                        <h2>1 <span>{t("day")}</span></h2>
                                        <p>{t("timeToOpenAccount")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="funfact-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt=""/></div>
                                        <h2>900 <span>{t("million")}</span></h2>
                                        <p>{t("numberOfTrades")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                                <div className="funfact-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-9.png" alt=""/></div>
                                        <h2>10+ <span>{t("years")}</span></h2>
                                        <p>{t("experience")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                <div className="tabs-box chart-one">
                                    <h5>{t("topUp")}</h5>
                                    <div className="tab-btn-box">
                                        <ul className="tab-btns tab-buttons">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>{t("months.apr")}</li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>{t("months.may")}</li>
                                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}>{t("months.jun")}</li>
                                            <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}>{t("months.jul")}</li>
                                            <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn" : "tab-btn"}>{t("months.aug")}</li>
                                            <li onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "p-tab-btn active-btn" : "tab-btn"}>{t("months.sep")}</li>
                                        </ul>
                                    </div>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                            <div className="content-box">
                                                <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                                <div className="text-box">
                                                    <h3>$10,123,145</h3>
                                                    <p><i className="flaticon-right-up"></i>+6.39%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="may">
                                            <div className="content-box">
                                                <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                                <div className="text-box">
                                                    <h3>$12,556,778</h3>
                                                    <p><i className="flaticon-right-up"></i>+5.39%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="jun">
                                            <div className="content-box">
                                                <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                                <div className="text-box">
                                                    <h3>$14,567,235</h3>
                                                    <p><i className="flaticon-right-up"></i>+8.39%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="jul">
                                            <div className="content-box">
                                                <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                                <div className="text-box">
                                                    <h3>$15,677,300</h3>
                                                    <p><i className="flaticon-right-up"></i>+11.39%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"} id="aug">
                                            <div className="content-box">
                                                <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                                <div className="text-box">
                                                    <h3>$18,677,670</h3>
                                                    <p><i className="flaticon-right-up"></i>+8.39%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 6 ? "tab p-tab active-tab" : "tab"} id="sep">
                                            <div className="content-box">
                                                <div className="graph-image"><img src="assets/images/icons/graph-1.png" alt=""/></div>
                                                <div className="text-box">
                                                    <h3>$19,567,246</h3>
                                                    <p><i className="flaticon-right-up"></i>+3.39%</p>
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