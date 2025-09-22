import { useTranslation } from "react-i18next";
import ContactCard from "../components/ContactCard";
import { MdEmail } from "react-icons/md";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import Mappa from "../components/Mappa";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedContent from "../components/AnimatedContent";

export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col" id="contact">
            <div className="w-full text-center 2xl:h-[200px] h-[300px] flex justify-center items-center" id="contact-hero">
                <h2 className="md:text-6xl text-5xl font-bold heading-text uppercase text-white">{t("contact_header")}</h2>
            </div>
            <h3 className="md:text-3xl text-2xl md:px-0 px-2 font-bold text-white pt-10 heading-text text-center">{t("contact_us")}</h3>
            <div className="w-full flex flex-wrap gap-20 justify-center items-center py-5">
                <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.2}
                delay={0}
                >
                <div className="flex items-center justify-center hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-bold text-white"></h3>
                    <div className="md:w-96 h-80 rounded-lg border-2 border-[#ce2727] md:p-4 p-2 text-center shadow-lg bg-white flex justify-center items-center flex-col">
                        <figure className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ce2727]">
                            <img src="/media/img/gd_contact.png" alt="Avatar GDEngineering" />
                        </figure>
                        <h2 className="mt-4 text-xl font-bold text-[#ce2727] header-text">GD Engineering s.r.l.s.</h2>
                        <p className="mb-4 text-black main-text">{t("gd_contact")}</p>
                        <div className="flex items-center justify-center main-text flex-col gap-3 w-full">
                            <a href="mailto:info@gdengineeringsrls.com" className="rounded-full bg-[#ce2727] px-4 py-2 text-white hover:bg-red-500 flex justify-center items-center gap-1 w-full">
                                <MdEmail className="w-5 h-5"/>
                                Email: <span className="text-xs select-text">info@gdengineeringsrls.com</span></a>
                            <p className="text-black flex justify-center items-center gap-1 select-text"><FaEnvelopeCircleCheck />PEC: gdengineeringsrls@pec.it</p>
                        </div>
                    </div>
                </div>
                </AnimatedContent>
                
                <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.2}
                delay={0.2}
                >
                    <ContactCard name="danilo"/>
                </AnimatedContent>

                <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.2}
                delay={0.4}
                >
                    <ContactCard name="giulio"/>
                </AnimatedContent>
            </div>
            <h3 className="text-3xl font-bold text-white pt-20 heading-text">{t("contact_map")}</h3>
            <div className="w-2/3 pb-15 pt-5">
                <Mappa />
            </div>
        </div>
    )
}