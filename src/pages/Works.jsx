import { useTranslation } from "react-i18next";
import WorkCard from "../components/WorkCard";
import FadeContent from "../components/FadeContent";

export default function Works() {
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col">
            <div className="w-full text-center 2xl:h-[200px] h-[300px] flex justify-center items-center" id="works-hero">
                <h2 className="md:text-6xl text-5xl font-bold heading-text uppercase text-white">{t("works_header")}</h2>
            </div>
            <FadeContent blur={false} duration={600} easing="ease-out" initialOpacity={0} className="w-full flex flex-wrap gap-5 justify-center items-center py-5">
                <WorkCard work="ascensore" />
                <WorkCard work="uffici_airfield" />
                <WorkCard work="controlroom_hbs" />
                <WorkCard work="condotta_sottomarina" />
                <WorkCard work="ascensore" />
                <WorkCard work="uffici_airfield" />
                <WorkCard work="controlroom_hbs" />
                <WorkCard work="condotta_sottomarina" />
            </FadeContent>
        </div>
    )
}