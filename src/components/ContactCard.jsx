import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const contact_details = {
    danilo: {
        email: "danilopaulillo@gdengineeringsrls.com",
        phone: "+393939159579"
    },
    giulio: {
        email: "giuliopaulillo@gdengineeringsrls.com",
        phone: "+393382296133"
    }
}

export default function ContactCard({ name, offset }){
    useEffect(() => {
        AOS.init();
    }, []);
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-center hover:scale-105 transition duration-200">
            <div className="md:w-96 h-80 rounded-lg border-2 border-[#ce2727] md:p-4 p-2 text-center shadow-lg bg-white flex justify-center items-center flex-col">
                <figure className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ce2727]">

                </figure>
                <h2 className="mt-4 text-xl font-bold text-[#ce2727] header-text">{t(`${name}_name`)}</h2>
                <p className="mb-4 text-black main-text">{t(`${name}_role`)}</p>
                <div className="flex items-center justify-center main-text flex-col gap-3 w-full">
                    <a href={`mailto:${contact_details[name].email}`} className="rounded-full bg-[#ce2727] md:px-4 px-2 py-2 text-white hover:bg-red-500 flex justify-center items-center gap-1 w-full"><MdEmail className="w-5 h-5"/>Email: <span className="text-xs">{contact_details[name].email}</span></a>
                    <a href={`tel:${contact_details[name].phone}`} className="rounded-full bg-red-900 px-4 py-2 hover:bg-[#ce2727] text-white flex justify-center items-center gap-1 w-full"><FaPhoneVolume className="w-4 h-4"/>{t("phone")}: {contact_details[name].phone}</a>
                </div>
            </div>
        </div>
    )
}