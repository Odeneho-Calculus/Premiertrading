import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"


export default function Ved() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>

            <section className="page-title">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/page-title-2.jpg)" }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>107 97 108 107 117 108 117 115 71 117 121</h1>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}