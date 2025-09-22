import AboutCarousel from "../components/AboutCarousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function About(){
    useEffect(() => {
        AOS.init();
    }, []);

    const { t } = useTranslation();
    return (
        <div className="flex flex-col w-full 2xl:h-screen min-h-screen overflow-x-hidden" id="about">
            <div className="w-full text-center 2xl:h-[200px] h-[300px] flex justify-center items-center" id="about-hero">
                <h2 className="2xl:text-6xl text-5xl font-bold heading-text uppercase text-white">{t("about_us_header")}</h2>
            </div>
            <div className="flex justify-center items-center w-full h-full py-5 flex-col 2xl:flex-row 2xl:gap-20 gap-5">
                <section className="2xl:w-1/2 2xl:px-10 px-5 text-center 2xl:text-start" data-aos="fade-right" data-aos-duration="900">
                    <p className="text-lg main-text font-semibold pt-5">
                        <span className="text-[#ce2727]">Global Division Engineering</span> {t("about_us_section1")}  
                    </p>
                    <p className="text-lg main-text font-semibold pt-5">
                        {t("about_us_section2")}
                    </p>
                    <p className="text-lg main-text font-semibold pt-5">
                        {t("about_us_section3")}
                    </p>
                    <p className="text-lg main-text font-semibold pt-5">
                        {t("about_us_section4")}
                    </p>
                    <p className="text-lg main-text font-semibold pt-5">
                        {t("about_us_section5")}
                    </p>
                    <p className="text-lg main-text font-semibold pt-5">
                        {t("about_us_section6")} <span className="text-[#ce2727]">{t("about_us_catchphrase")}</span>
                    </p>
                </section>
                <section className="2xl:px-10 px-5 flex justify-center items-center" data-aos="fade-left" data-aos-duration="900">
                    <AboutCarousel />
                </section>
            </div>   
        </div>
    )
}