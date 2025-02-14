import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function Footer1() {
    const t = useTranslations('Footer');
    return (
        <>
        <footer className="main-footer bg-color-2">
            <div className="footer-top">
                <div className="auto-container">
                    <div className="footer-top-content">
                        <div className="form-inner">
                            <h2>{t('BecomeAPart')}</h2>
                        </div>
                        <div className="lower-box">
                            <h2>{t('UpdateCommunity')}</h2>
                            <div className="subscriber-box">
                                <figure className="thumb-box"><img src="assets/images/resource/thumb-1.jpg" alt=""/></figure>
                                <span>5M+</span>
                                <h6>{t('Subscribers')}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/logo1.png" alt="" style={{ maxWidth: '150px', height: 'auto' }} /></Link></figure>
                                <p>{t('RegulatedBy')}</p>
                                {/*<div className="link-box">
                                    <div className="icon-box"><i className="flaticon-book"></i></div>
                                    <h6><Link href="/">Free <br />Trading Guides <i className="flaticon-right-arrow"></i></Link></h6>
                                </div>*/}
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>{t('Trading.Title')}</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/trader-1">{t('Trading.MetaTrader4')}</Link></li>
                                        {/*<li><Link href="https://pc.premiertradingplatform.com/">{t('Trading.MetaTrader5')}</Link></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>{t('Services.Title')}</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/service">{t('Services.ServicesOverview')}</Link></li>
                                                <li><Link href="/service-details-3">{t('Services.PlatformTools')}</Link></li>
                                                {/*<li><Link href="/service-details-4">{t('Services.CurrencyPairs')}</Link></li>
                                                <li><Link href="/service-details-2">{t('Services.TradingAccounts')}</Link></li>
                                                <li><Link href="/service-details-4">{t('Services.MonitoringSupports')}</Link></li>
                                                <li><Link href="/service-details-5">{t('Services.EducationTraining')}</Link></li>*/}
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><Link href="/about">{t('Services.AboutCompany')}</Link></li>
                                                <li><Link href="/contact">{t('Services.Contact')}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    {/*<h3>{t('Social.Title')}</h3>*/}
                                </div>
                                <div className="widget-content">
                                    {/*<ul className="social-links">
                                        <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram-logo"></i></Link></li>
                                        <li><Link href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="flaticon-youtube"></i></Link></li>
                                    </ul>*/}
                                    <ul className="download-list">
                                        <li  className="app-store">
                                            <Link href="https://apps.apple.com/app/easyfx6/id6740037390">{t('Downloads.AppStore')}</Link>
                                        </li>
                                        <li className="play-store">
                                            <Link href="https://play.google.com/store/apps/details?id=com.owineioqq.abmlnt5">{t('Downloads.GooglePlay')}</Link>
                                        </li>
                                        <li className="play-store">
                                            <Link href="https://pc.premiertradingplatform.com/">{t('Downloads.webver')}</Link>
                                        </li>
                                        <li className="play-store">
                                            <Link href="https://mobile.premiertradingplatform.com/">{t('Downloads.h5ver')}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} <a href="/">Premier</a> {t('Copyright')}</p>
                        </div>
                        {/*<ul className="footer-nav">
                            <li><Link href="/privacy-policy">{t('Legal.PrivacyPolicy')}</Link></li>
                            <li><Link href="/terms-conditions">{t('Legal.TermsConditions')}</Link></li>
                            <li><Link href="/legal">{t('Legal.Legal')}</Link></li>
                        </ul>*/}
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
