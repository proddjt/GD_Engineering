import { Link } from "react-router"
import './Homepage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Homepage (){
    useEffect(() => {
        AOS.init();
    }, []);
    const { t } = useTranslation();
    return (
        <div className="flex justify-start items-center flex-col w-full text-center">
                <div className="flex justify-center items-center flex-col gap-10 w-full h-screen homepageHero" id="homepage_hero1" data-aos="fade-up-right" data-aos-duration="900">
                    <h6 className="main-text font-semibold text-[#ce2727] lg:text-xl text-md">Even skyscrapers were born from some little pieces of paper</h6>
                    <h1 className="lg:text-6xl text-4xl font-bold heading-text text-white">Global Division Engineering s.r.l.s.</h1>
                    <Link to="/about" className="button main-text px-1">{t("about")}</Link>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 w-full homepageHero h-[500px]" id="homepage_hero2" data-aos="fade-up-left" data-aos-duration="500">
                    <h1 className="lg:text-6xl text-4xl font-bold heading-text text-white">{t("naples_airport")} <br /> Capodichino</h1>
                    <Link to="/works" className="button main-text px-1">{t("works_button")}</Link>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 w-full homepageHero h-[500px]" id="homepage_hero3" data-aos="fade-up-right" data-aos-duration="500">
                    <h1 className="lg:text-6xl text-4xl font-bold heading-text text-white">{t("salerno_airport")} <br /> Costa d'Amalfi</h1>
                    <Link to="/contact" className="button main-text px-1">{t("contact")}</Link>
                </div>
        </div>
            
        
    )
}