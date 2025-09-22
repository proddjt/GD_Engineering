import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";


export default function Footer (){
    return (
    <>
        <footer className="footer footer-horizontal footer-center bg-[#ce2727] text-primary-content px-10 py-5 gap-2">
            <aside className="flex lg:flex-row flex-col">
                <img src="/media/img/gd_footer_png.png" alt="Logo GD Engineering footer" className="w-24"/>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold heading-text">
                    <span className="text-white">Even skyscrapers were born from some little pieces of paper.</span>
                    <br />
                    Global Division Engineering s.r.l.s. - P.IVA 10124461210 - REA: NA-1082467
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-white">
                    <a href="https://www.instagram.com/gdengineering.srls/" target="_blank">
                        <FaInstagramSquare className="text-3xl"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553820454836" target="_blank">
                        <FaFacebookSquare className="text-3xl"/>
                    </a>
                </div>
            </nav>
        </footer>
    </>
    )
}