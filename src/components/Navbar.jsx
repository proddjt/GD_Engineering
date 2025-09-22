import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from 'react'
import i18n from "../translations/i18n";
import Flag from 'react-world-flags'


export default function Navbar (){
    const { t } = useTranslation();
    const langRef = useRef(null);
    const subLangRef = useRef(null);
    const dropdownRef = useRef(null);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (langRef.current) {
            langRef.current.removeAttribute("open");
        }
        if (subLangRef.current) {
            subLangRef.current.removeAttribute("open");
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dropdownRef.current.removeAttribute("open");
            }
            if (langRef.current && !langRef.current.contains(event.target)) {
                langRef.current.removeAttribute("open");
            }
            if (subLangRef.current && !subLangRef.current.contains(event.target)) {
                subLangRef.current.removeAttribute("open");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <nav className="navbar bg-[#e6e6e6] shadow-sm">
            <div className="navbar-start">
                <details className="dropdown" ref={dropdownRef}>
                    <summary className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </summary>
                    <ul className="menu menu-sm dropdown-content rounded-box z-5 mt-3 w-52 p-2 shadow bg-white" tabIndex={0} >
                        <li>
                            <Link to={"/"} onClick={() => dropdownRef.current?.removeAttribute("open")} className="main-text text-md hover:text-red-500/70 font-bold">{t("home")}</Link>
                        </li>
                        <li>
                            <Link to={"/works"} onClick={() => dropdownRef.current?.removeAttribute("open")} className="main-text text-md hover:text-red-500/70 font-bold">{t("works")}</Link>
                        </li>
                        <li>
                            <Link to={"/about"} onClick={() => dropdownRef.current?.removeAttribute("open")} className="main-text text-md hover:text-red-500/70 font-bold">{t("about")}</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} onClick={() => dropdownRef.current?.removeAttribute("open")} className="main-text text-md hover:text-red-500/70 font-bold">{t("contact")}</Link>
                        </li>
                        <li>
                            <details className="dropdown block lg:hidden" ref={subLangRef}>
                                <summary className="flex justify-start items-center gap-2 main-text text-md hover:text-red-500/70 font-bold">{t("language")}{i18n.language === "en" ? <Flag code="gb" width={"20"}/> : <Flag code="it"  width={"20"}/>}</summary>
                                <ul className="menu dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a onClick={() => changeLanguage("it")} className="flex justify-start items-center gap-2 font-semibold main-text hover:bg-red-300"><Flag code="it"  width={"20"}/> Italiano</a></li>
                                    <li><a onClick={() => changeLanguage("en")} className="flex justify-start items-center gap-2 font-semibold main-text hover:bg-red-300"><Flag code="gb" width={"20"}/> English</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
                <Link to={"/"} className="main-text text-md hover:text-red-500/70 font-bold">
                    <h1 className="lg:text-xl text-md font-semibold heading-text lg:ps-5 text-[#ce2727]">Global Division Engineering s.r.l.s.</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-5">
                    <li>
                        <Link to={"/"} className="main-text text-md hover:text-red-500/70 font-bold">{t("home")}</Link>
                    </li>
                    <li>
                        <Link to={"/works"} className="main-text text-md hover:text-red-500/70 font-bold">{t("works")}</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="main-text text-md hover:text-red-500/70 font-bold">{t("about")}</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="main-text text-md hover:text-red-500/70 font-bold">{t("contact")}</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center gap-5">
                    <details className="dropdown hidden lg:block" ref={langRef}>
                        <summary className="flex justify-center items-center gap-2 main-text text-md hover:text-red-500/70 font-bold">{t("language")}{i18n.language === "en" ? <Flag code="gb" width={"24"}/> : <Flag code="it"  width={"24"}/>}</summary>
                        <ul className="menu dropdown-content bg-[#e6e6e6] rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => changeLanguage("it")} className="flex justify-start items-center gap-2 font-semibold main-text hover:bg-red-300"><Flag code="it"  width={"24"}/> Italiano</a></li>
                            <li><a onClick={() => changeLanguage("en")} className="flex justify-start items-center gap-2 font-semibold main-text hover:bg-red-300"><Flag code="gb" width={"24"}/> English</a></li>
                        </ul>
                    </details>
                    <img src="/media/img/gd_png.png" alt="Logo GD Engineering" className="w-12 me-5"/>
                </div>
            </div>
        </nav>
    )
}