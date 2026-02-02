import { useMediaQuery } from "react-responsive";
import i18n from "../../../i18n/i18n";
//components
import SecondTitle from "../Layout/SecondTitle";
import GoalIcon from "./GoalIcon";
import Recognition from "./Recognition";

export default function Goals({
    title,
    slogan,
    goals,
    titleRecognition,
    sloganRecognition,
    textRecognition,
    videoRecognition,
    imageRecognition,
}) {
    const appUrl = window.location.origin + "/storage/";
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="pt-20 md:pt-20 xl:pt-0">
            <SecondTitle
                title={title}
                slogan={slogan}
                className=" text-azul text-center"
            />
            <div className="flex flex-col md:flex-row flex-col xl:flex-row justify-center items-center mt-10 xl:mt-20 xl:gap-10 2xl:gap-14 px-8 md:px-[80px] lg:px-0">
                <GoalIcon
                    icon={appUrl + goals[0]?.icon}
                    title={
                        i18n.language === "pt"
                            ? goals[0]?.first_title?.pt
                            : goals[0]?.first_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? goals[0]?.text?.pt
                            : goals[0]?.text?.en
                    }
                    className="bg-azul w-full h-full text-white"
                />
                <GoalIcon
                    grey={false}
                    blue={isMobile ? true : false}
                    icon={appUrl + goals[1]?.icon}
                    title={
                        i18n.language === "pt"
                            ? goals[1]?.first_title?.pt
                            : goals[1]?.first_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? goals[1]?.text?.pt
                            : goals[1]?.text?.en
                    }
                    className="bg-light-grey w-full h-full text-azul"
                />
                <GoalIcon
                    icon={appUrl + goals[2]?.icon}
                    title={
                        i18n.language === "pt"
                            ? goals[2]?.first_title?.pt
                            : goals[2]?.first_title?.en
                    }
                    text={
                        i18n.language === "pt"
                            ? goals[2]?.text?.pt
                            : goals[2]?.text?.en
                    }
                    grey={isMobile ? true : false}
                    className="bg-azul w-full h-full text-white"
                />
            </div>
            <Recognition
                title={titleRecognition}
                slogan={sloganRecognition}
                text={textRecognition}
                video={videoRecognition}
                image={imageRecognition}
            />
        </div>
    );
}
