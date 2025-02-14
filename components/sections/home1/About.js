import { useTranslations } from "next-intl"
import Link from "next/link"

export default function About() {
  const t = useTranslations("About")
  return (
    <>
      <section className="about-section bg-color-1">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt=""/></figure>
                            <figure className="image image-2"><Link href="assets/images/resource/dashboard-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/resource/dashboard-1.jpg" alt=""/></Link></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>{t("about_title")}</h6>
                                <h2>{t("about_subtitle")}</h2>
                            </div>
                            <div className="text-box">
                                <p>{t("about_description")}</p>
                            </div>
                            <div className="inner-box">
                                <h3>{t("specialization_title")}</h3>
                                <ul className="list-style-one clearfix">
                                    <li>{t("specializations.0")}</li>
                                    <li>{t("specializations.1")}</li>
                                    <li>{t("specializations.2")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
