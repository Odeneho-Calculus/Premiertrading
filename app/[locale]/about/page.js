import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
import Working from "@/components/sections/home1/Working"
import Pairs from "@/components/sections/home1/Pairs"
import Chooseus from "@/components/sections/home1/Chooseus"
import Testimonial from "@/components/sections/home1/Testimonial"
import Featured from "@/components/sections/home1/Featured"
import { useTranslations } from "next-intl"
//import News from "@/components/sections/home1/News"

export default function About_page() {
    const t = useTranslations("AboutPage")
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle= {t('breadcrumbTitle')} >
                
            <section className="about-style-four about-page sec-pad centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>{t("mainTitle")}</h6>
                        <h2>{t('subTitle')}</h2>
                    </div>
                    <div className="inner-box">
                        <div className="award-box">
                            <figure className="badge"><img src="../assets/images/icons/badge-1.png" alt=""/></figure>
                            <span>{t('awards.globalForex.title')} <br />{t('awards.globalForex.date')}</span>
                        </div>
                        <div className="text-box">
                            <p>{t('description')}</p>
                            <figure className="signature"><img src="../assets/images/clients/signature.png" width={200}  alt=""/></figure>
                            <h5>Taimoor IQBAL , <span>{t('ceoInfo.title')}</span></h5>
                        </div>
                        <div className="award-box">
                            <figure className="badge"><img src="../assets/images/icons/badge-2.png" alt=""/></figure>
                            <span>{t('awards.customerService.title')} <br />{t('awards.customerService.date')}</span>
                        </div>
                    </div>
                    <figure className="image-box"><img src="../assets/images/resource/about-3.jpg" alt=""/></figure>
                </div>
            </section>

            <section className="about-style-two">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="../assets/images/resource/about-2.jpg" alt=""/></figure>
                                <div className="experience-box">
                                    <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-35.png)" }}></div>
                                    <div className="icon-box"><img src="../assets/images/icons/icon-37.png" alt=""/></div>
                                    <h2>10+ <span>{t('stats.fundingExperience.unit')}</span></h2>
                                    <h5>{t('stats.fundingExperience.description')}</h5>
                                </div>
                                <div className="image-content">
                                    <h6>{t('performance.title')}</h6>
                                    <h3>84.65%</h3>
                                    <p><i className="flaticon-right-up"></i>+6.39%</p>
                                    <div className="bar"><img src="../assets/images/icons/bar-4.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <h6>{t('corporateJourney.title')}</h6>
                                    <h2>{t('corporateJourney.subtitle')}</h2>
                                </div>
                                <div className="text-box">
                                    {/*<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of  making here is that it has a more-or-less normal distribution all letters as opposed to using.</p>*/}
                                    <div className="single-item">
                                        <div className="icon-box"><img src="../assets/images/icons/icon-67.png" alt=""/></div>
                                        <h3>{t('corporateJourney.evolution.title')}</h3>
                                        <p>{t('corporateJourney.evolution.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="funfact-style-three bg-color-2 centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(../assets/images/shape/shape-36.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="../assets/images/icons/icon-68.png" alt=""/></div>
                                    <h2>24 <span>{t('stats.payoutTime.unit')}</span></h2>
                                    <p> {t('stats.payoutTime.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="../assets/images/icons/icon-69.png" alt=""/></div>
                                    <h2>1 <span>{t('stats.accountEarning.unit')}</span></h2>
                                    <p>{t('stats.accountEarning.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="../assets/images/icons/icon-70.png" alt=""/></div>
                                    <h2>900 <span>{t('stats.trades.unit')}</span></h2>
                                    <p>{t('stats.trades.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 single-column">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="../assets/images/icons/icon-71.png" alt=""/></div>
                                    <h2>10+ <span>{t('stats.fundingExperience.unit')}</span></h2>
                                    <p>{t('stats.fundingExperience.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="statements-section bg-color-1 centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>{t('statements.title')}</h6>
                        <h2>{t('statements.subtitle')}</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-one">
                                            <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/statement-1.jpg)" }}>
                                                <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-37.png)" }}></div>
                                                <h3>{t('statements.mission.title')}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="../assets/images/icons/icon-72.png" alt=""/></div>
                                                <p>{t('statements.mission.description')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="../assets/images/icons/icon-73.png" alt=""/></div>
                                                <p>{t('statements.vision.description')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 statements-block">
                                        <div className="statements-block-one">
                                            <div className="inner-box" style={{ backgroundImage: "url(../assets/images/resource/statement-2.jpg)" }}>
                                                <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-37.png)" }}></div>
                                                <h3>{t('statements.vision.title')}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <div className="statements-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="../assets/images/icons/icon-74.png" alt=""/></div>
                                        <h3>{t('statements.coreValues.title')}</h3>
                                        <p>{t('statements.coreValues.description')}</p>
                                        <ul className="list-item">
                                            <li>{t('statements.coreValues.values.0')}</li>
                                            <li>{t('statements.coreValues.values.1')}</li>
                                            <li>{t('statements.coreValues.values.2')}</li>
                                            <li>{t('statements.coreValues.values.3')}</li>
                                            <li>{t('statements.coreValues.values.4')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title">
                        <h6>{t('team.title')}</h6>
                        <h2>{t('team.subtitle')}</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="../assets/images/team/team-1.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Taimoor IQBAL</Link></h3>
                                        <p>{t('team.members.0.description')}</p>
                                        <div className="lower-box">
                                            <span className="designation">{t('team.members.0.role')}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="../assets/images/team/team-2.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Gerald Ivor</Link></h3>
                                        <p>{t('team.members.1.description')}</p>
                                        <div className="lower-box">
                                            <span className="designation">{t('team.members.1.role')}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="../assets/images/team/team-3.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Nora Lillian</Link></h3>
                                        <p>{t('team.members.2.description')}</p>
                                        <div className="lower-box">
                                            <span className="designation">{t('team.members.2.role')}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><Link href="/about"><img src="../assets/images/team/team-4.jpg" alt=""/></Link></figure>
                                    <div className="lower-content">
                                        <h3><Link href="/about">Michal Starck</Link></h3>
                                        <p>{t('team.members.3.description')}</p>
                                        <div className="lower-box">
                                            <span className="designation">{t('team.members.3.role')}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Working/>
            <Pairs/>
            <Chooseus/>
            <Testimonial/>
            <Featured/>
            {/*<News/>*/}

            </Layout>
        </div>
    )
}