import i18n from "../../../../i18n/i18n";
//components
import Capacity from "./Capacity";
import SecondTitle from "../../Layout/SecondTitle";
import Technology from "./Technology";
import TechnologyRight from "./TecnologyRight";

export default function Technologies({
    title,
    slogan,
    text,
    tecnologies,
    appUrl,
    capacitySlogan,
    capacityTitle,
    capacityText,
    capacityVideo,
    capacityVideo2,
}) {
    return (
        <>
            <div className="text-center text-azul mt-15 xl:mt-38 flex flex-col justify-center items-center">
                <SecondTitle
                    slogan={slogan}
                    title={title}
                    className="text-azul text-center"
                />
                <p
                    className="text-base mt-10 xl:mt-18 xl:max-w-[450px]"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></p>
            </div>
            <div>
                <Technology
                    image={appUrl + tecnologies[0]?.icon}
                    title={
                        i18n.language === "pt"
                            ? tecnologies[0]?.first_title?.pt
                            : tecnologies[0]?.first_title?.en
                    }
                    slogan={
                        i18n.language === "pt"
                            ? tecnologies[0]?.second_title?.pt
                            : tecnologies[0]?.second_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? tecnologies[0]?.text?.pt
                            : tecnologies[0]?.text?.en
                    }
                    className="expertise-container flex-col-reverse! xl:flex-row!"
                />
                <TechnologyRight
                    image={appUrl + tecnologies[1]?.icon}
                    title={
                        i18n.language === "pt"
                            ? tecnologies[1]?.first_title?.pt
                            : tecnologies[1]?.first_title?.en
                    }
                    slogan={
                        i18n.language === "pt"
                            ? tecnologies[1]?.second_title?.pt
                            : tecnologies[1]?.second_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? tecnologies[1]?.text?.pt
                            : tecnologies[1]?.text?.en
                    }
                    className="expertise-container justify-end! xl:flex-row!"
                />
                <Technology
                    image={appUrl + tecnologies[2]?.icon}
                    title={
                        i18n.language === "pt"
                            ? tecnologies[2]?.first_title?.pt
                            : tecnologies[2]?.first_title?.en
                    }
                    slogan={
                        i18n.language === "pt"
                            ? tecnologies[2]?.second_title?.pt
                            : tecnologies[2]?.second_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? tecnologies[2]?.text?.pt
                            : tecnologies[2]?.text?.en
                    }
                    className="expertise-container flex-col-reverse! xl:flex-row!"
                />
                <TechnologyRight
                    image={appUrl + tecnologies[3]?.icon}
                    title={
                        i18n.language === "pt"
                            ? tecnologies[3]?.first_title?.pt
                            : tecnologies[3]?.first_title?.en
                    }
                    slogan={
                        i18n.language === "pt"
                            ? tecnologies[3]?.second_title?.pt
                            : tecnologies[3]?.second_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? tecnologies[3]?.text?.pt
                            : tecnologies[3]?.text?.en
                    }
                    className="expertise-container justify-end! xl:flex-row!"
                />
                <Technology
                    image={appUrl + tecnologies[4]?.icon}
                    title={
                        i18n.language === "pt"
                            ? tecnologies[4]?.first_title?.pt
                            : tecnologies[4]?.first_title?.en
                    }
                    slogan={
                        i18n.language === "pt"
                            ? tecnologies[4]?.second_title?.pt
                            : tecnologies[4]?.second_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? tecnologies[4]?.text?.pt
                            : tecnologies[4]?.text?.en
                    }
                    className="expertise-container flex-col-reverse! xl:flex-row!"
                />
            </div>
            <Capacity
                slogan={capacitySlogan}
                title={capacityTitle}
                text={capacityText}
                video={capacityVideo}
                video2={capacityVideo2}
            />
        </>
    );
}
