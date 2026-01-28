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
    return (
        <div className="pt-10 xl:pt-0">
            <SecondTitle title={title} slogan={slogan} className=" text-azul" />
            <div className="flex flex-col xl:flex-row justify-center items-center mt-10 xl:mt-20 xl:gap-14">
                <GoalIcon
                    icon={appUrl + goals[0]?.icon}
                    title={goals[0]?.first_title?.en}
                    text={goals[0]?.text?.en}
                    className="bg-azul w-full h-full text-white"
                />
                <GoalIcon
                    grey={true}
                    icon={appUrl + goals[1]?.icon}
                    title={goals[1]?.first_title?.en}
                    text={goals[1]?.text?.en}
                    className="bg-light-grey w-full h-full text-azul"
                />
                <GoalIcon
                    icon={appUrl + goals[2]?.icon}
                    title={goals[2]?.first_title?.en}
                    text={goals[2]?.text?.en}
                    grey={true}
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
