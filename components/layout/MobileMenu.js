'use client'
import { useTranslations } from "next-intl";
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const t = useTranslations("MobileMenu");

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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

    // New function to handle link clicks
    const handleLinkClick = () => {
        handleMobileMenu() // Close the mobile menu
    }

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/" onClick={handleLinkClick}>
                            <img src="../assets/images/logo-2.png" alt="" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">                                
                                <li><Link href="/" onClick={handleLinkClick}>{ t("Home") }</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                                    <Link href="#" onClick={handleLinkClick}>{t("About")}</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/about" onClick={handleLinkClick}>{t("AboutCompany")}</Link></li>
                                        {/*<li><Link href="/history" onClick={handleLinkClick}>{t("History")}</Link></li>
                                        <li><Link href="/team" onClick={handleLinkClick}>{t("TeamMembers")}</Link></li>
                                        <li><Link href="/faq" onClick={handleLinkClick}>{t("Faqs")}</Link></li>*/}
                                        {/*<li><Link href="/error" onClick={handleLinkClick}>404</Link></li>*/}
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}>
                                        <span className="fa fa-angle-right" />
                                    </div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/trader-1" onClick={handleLinkClick}>{t("Trading")}</Link>
                                    {/*<ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/trader-1" onClick={handleLinkClick}>MetaTrader 4</Link></li>
                                        <li><Link href="/trader-2" onClick={handleLinkClick}>MetaTrader 5</Link></li>
                                    </ul>*/}
                                    {/*<div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}>
                                        <span className="fa fa-angle-right" />
                                    </div>*/}
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleLinkClick}>{t("Services")}</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/service" onClick={handleLinkClick}>{t("ServicesOverview")}</Link></li>
                                        <li><Link href="/service-details-3" onClick={handleLinkClick}>{t("PlatformTools")}</Link></li>
                                        {/*<li><Link href="/service-details" onClick={handleLinkClick}>Currency Pairs</Link></li>
                                        <li><Link href="/service-details-2" onClick={handleLinkClick}>Trading Accounts</Link></li>
                                        <li><Link href="/service-details-4" onClick={handleLinkClick}>Monitoring & Support</Link></li>
                                        <li><Link href="/service-details-5" onClick={handleLinkClick}>Education & Training</Link></li>*/}
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}>
                                        <span className="fa fa-angle-right" />
                                    </div>
                                </li>
                                <li><Link href="/contact" onClick={handleLinkClick}>{t("Contact")}</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*Social Links*/}
                   {/*} <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>*/}
                </nav>
            </div>
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}