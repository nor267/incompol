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
                    className="text-azul"
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
                    title={tecnologies[0]?.first_title?.en}
                    slogan={tecnologies[0]?.second_title?.en}
                    text={tecnologies[0]?.text?.en}
                    className="expertise-container"
                />
                <TechnologyRight
                    image={appUrl + tecnologies[1]?.icon}
                    title={tecnologies[1]?.first_title?.en}
                    slogan={tecnologies[1]?.second_title?.en}
                    text={tecnologies[1]?.text?.en}
                    className="expertise-container justify-end! flex-col-reverse! xl:flex-row!"
                />
                <Technology
                    image={appUrl + tecnologies[2]?.icon}
                    title={tecnologies[2]?.first_title?.en}
                    slogan={tecnologies[2]?.second_title?.en}
                    text={tecnologies[2]?.text?.en}
                    className="expertise-container"
                />
                <TechnologyRight
                    image={appUrl + tecnologies[3]?.icon}
                    title={tecnologies[3]?.first_title?.en}
                    slogan={tecnologies[3]?.second_title?.en}
                    text={tecnologies[3]?.text?.en}
                    className="expertise-container justify-end! flex-col-reverse! xl:flex-row!"
                />
                <Technology
                    image={appUrl + tecnologies[4]?.icon}
                    title={tecnologies[4]?.first_title?.en}
                    slogan={tecnologies[4]?.second_title?.en}
                    text={tecnologies[4]?.text?.en}
                    className="expertise-container"
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
