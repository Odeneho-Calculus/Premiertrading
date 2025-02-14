import Layout from "@/components/layout/Layout";
import "app/favicon.ico";
import Funfact from "@/components/sections/home1/Funfact";
import Banner from "@/components/sections/home1/Banner";
import Service from "@/components/sections/home1/Service";
import About from "@/components/sections/home1/About";
import Working from "@/components/sections/home1/Working";
import Pairs from "@/components/sections/home1/Pairs";
import Chooseus from "@/components/sections/home1/Chooseus";
import Testimonial from "@/components/sections/home1/Testimonial";
import Featured from "@/components/sections/home1/Featured";

export default function Home({ params }) {
    
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Service />
                <Funfact />
                <About />
                <Working />
                <Pairs />
                <Chooseus />
                <Testimonial />
                <Featured />
            </Layout>
        </div>
    );
}