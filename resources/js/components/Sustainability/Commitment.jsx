//fake images
import certification from "../../../images/fake/aboutus/certification1.png";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Commitment({ title, slogan, text, video, image }) {
    return (
        <>
            <SecondTitle
                slogan={slogan}
                title={title}
                className="text-azul pt-15 xl:pt-32"
            />
            <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-29 mt-8 xl:mt-32 xl:mb-52 px-8 xl:px-0">
                <div className="relative w-full xl:w-auto">
                    {video && (
                        <video
                            key={video}
                            src={video}
                            className=" xl:h-[728px] xl:w-[547px] w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <div className="bg-laranja w-[100px] h-[100px] xl:w-[300px] xl:h-[300px] rounded-full absolute -left-5 -top-10 xl:-left-40 xl:-top-40 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-[98px] h-[98px] xl:w-[295px] xl:h-[295px] rounded-full overflow-hidden ">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <img
                        src={certification}
                        className="hidden xl:block xl:absolute xl:-left-40 top-50"
                    ></img>
                </div>
                <div
                    className="xl:max-w-[545px] w-full pt-5 xl:pt-0 text-azul text-base text-ambient"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></div>
                <img
                    src={certification}
                    className="xl:hidden w-50 pt-2 pb-2"
                ></img>
            </div>
        </>
    );
}
