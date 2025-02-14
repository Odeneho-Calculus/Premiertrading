import { useTranslations } from "next-intl";
import Link from "next/link"

export default function Menu() {
    const t = useTranslations("Header");

    return (
        <>

            <ul className="navigation clearfix">
                <li><Link href="/">{ t("Menu.Home") }</Link>
                </li>
                <li className="dropdown"><Link href="#">{ t("Menu.About") }</Link>
                    <ul>
                        <li><Link href="/about">{ t("Menu.AboutCompany") }</Link></li>
                     {/*<li><Link href="/history">History</Link></li>
                        <li><Link href="/team">Team Members</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                         <li><Link href="/error">404</Link></li> */}
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">{ t("Menu.Trading") }</Link>
                    <ul>
                        <li className=""><Link href="/trader-1">{ t("Menu.Platform") }</Link>
                           {/*} <ul>
                                <li><Link href="/trader-1">MetaTrader 4</Link></li>
                                <li><Link href="/trader-2">MetaTrader 5</Link></li>
                            </ul>*/}
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">{ t("Menu.Services") }</Link>
                    <ul>
                        <li><Link href="/service">{t("Menu.ServicesOverview")}</Link></li>
                        {/*<li><Link href="/service-details">Currency Pairs</Link></li>
                        <li><Link href="/service-details-2">Trading Accounts</Link></li>
                        <li><Link href="/service-details-4">Monitoring & Support</Link></li>
                        <li><Link href="/service-details-5">Education & Training</Link></li>*/}
                        <li><Link href="/service-details-3">{t("Menu.PlatformTools")}</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">{ t("Menu.Contact") }</Link></li>
            </ul>
        </>
    )
}
