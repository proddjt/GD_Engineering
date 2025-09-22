import { t } from "i18next";

export default function WorkCard ({work}){
    return (
        <div className="card bg-base-100 2xl:w-96 w-72 h-[600px] shadow-sm">
            <figure>
                <img
                src={`./public/media/img/${work}_main_img.jpg`}
                alt={`Immagine principale lavoro ${work}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{t(`${work}_title`)}</h2>
                <p><span className="font-semibold">{t("work_at")}:</span> {t(`${work}_subtitle`)}</p>
                <p>{t(`${work}_description`)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{t("discover_more")}</button>
                </div>
            </div>
        </div>
    )
}