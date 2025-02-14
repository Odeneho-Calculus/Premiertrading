//import VideoPopup from "@/components/elements/VideoPopup"

import { useTranslations } from "next-intl"

export default function Working() {
  const t = useTranslations("Work")
  return (
    <>
        <section className="working-section bg-color-2">
            <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-3.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <h6>{t("howItWorks")}</h6>
                    <h2>{t("understandingTheEvaluationProcess")}</h2>
                </div>
                <div className="inner-container">
                    <div className="video-inner">
                        <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-2.png)" }}></div>
                        <span className="big-text">{t("process")}</span>
                        {/*<h5>Evaluation</h5>
                        <div className="video-btn">
                            <VideoPopup />
                        </div>*/}
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="icon-box"><img src="../assets/images/icons/icon-10.png" alt="Trading Challenge Icon"/></div>
                                <h6>{t("step1.title")}</h6>
                                <div className="inner-box">
                                    <h3>{t("step1.heading")}</h3>
                                    <p>{t("step1.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="icon-box"><img src="../assets/images/icons/icon-10.png" alt="Trading Challenge Icon"/></div>
                                <h6>{t("step2.title")}</h6>
                                <div className="inner-box">
                                    <h3>{t("step2.heading")}</h3>
                                    <p>{t("step2.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="icon-box"><img src="../assets/images/icons/icon-10.png" alt="Trading Challenge Icon"/></div>
                                <h6>{t("step3.title")}</h6>
                                <div className="inner-box">
                                    <h3>{t("step3.heading")}</h3>
                                    <p>{t("step3.description")}</p>
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