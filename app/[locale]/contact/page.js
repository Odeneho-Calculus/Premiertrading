"use client"

import { useTranslations } from "next-intl"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"
import { Headphones } from "lucide-react"

export default function Contact() {
    const t = useTranslations("contactUs")

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <section className="contact-style-two">
                    <div className="auto-container">
                        <div className="title-inner">
                            <div className="sec-title">
                                <h6>{t("sendMessage")}</h6>
                                <h2>{t("getInTouch")}</h2>
                                <p>{t("assistMessage")}</p>
                            </div>
                            <div className="special-text">
                                <div className="shape" style={{ backgroundImage: "url(../assets/images/shape/shape-48.png)" }}></div>
                                <h6>
                                    <img src="../assets/images/icons/icon-63.png" alt=""/> {t("connectWithUs")}
                                </h6>
                            </div>
                        </div>
                        <div className="contact-info-cards py-6">
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="bg-white shadow-sm rounded-lg p-4 w-64">
                                    <h6 className="text-sm font-medium text-gray-700 mb-2">{t("companyEmail")}</h6>
                                    <a href="mailto:info@premiertradingplatform.com" className="text-blue-600 hover:text-blue-700 text-sm">
                                        {t("emailAddress")}
                                    </a>
                                </div>
                                <div className="bg-white shadow-sm rounded-lg p-4 w-64">
                                    <h6 className="text-sm font-medium text-gray-700 mb-2">{t("officeAddress")}</h6>
                                    <p className="text-gray-600 text-sm">
                                        {t("address.street")}<br />
                                        {t("address.city")}<br />
                                        {t("address.country")}
                                    </p>
                                </div>
                                <div className="bg-white shadow-sm rounded-lg p-4 w-64">
                                    <Link href="https://direct.lc.chat/18996309/" className="group flex items-center space-x-3">
                                        <Headphones size={16} className="text-blue-600 group-hover:text-blue-700" />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                            {t("customerService")}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="google-map-section">
                    <div className="map-inner">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.934802479594!2d-0.019518140734317928!3d51.50545790605766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602a5f62c37b1%3A0xcbb9b4c9d9a64556!2s30%20Churchill%20Pl%2C%20Canary%20Wharf%2C%20London%20E14%205RE%2C%20UK!5e0!3m2!1sen!2suk!4v1707150000000!5m2!1sen!2suk"
                            height={550}
                            style={{ border: 0, width: "100%" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="map-content">
                        <div className="icon-box"><i className="flaticon-map-point"></i></div>
                        <div className="location-box">
                            <h5>{t("address.city")}</h5>
                            <p>{t("address.street")}, 1st Floor <br /> {t("address.country")}</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
