//fake images

import certification1 from "../../../images/icons/footer/certification1.png";
import certification2 from "../../../images/icons/footer/certification2.png";
import certification3 from "../../../images/icons/footer/certification3.png";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Certification({ title, slogan, text, video, video2 }) {
    return (
        <div className="bg-azul">
            <SecondTitle
                className="pt-15 xl:pt-20 text-white"
                slogan={slogan}
                title={title}
            />
            <div className=" flex flex-col-reverse xl:flex-row  pt-8 xl:pt-36 lg:pb-30 xl:pb-30 xl:gap-68 justify-center items-center">
                <div className="relative">
                    {video && (
                        <video
                            key={video}
                            src={video}
                            className="xl:w-[570px] xl:h-[375px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <div className="bg-laranja w-[150px] h-[150px] xl:w-[260px] xl:h-[260px] rounded-full absolute -right-10 xl:-right-36 -bottom-15 xl:-bottom-20 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className=" w-[148px] h-[148px] xl:w-[255px] xl:h-[255px] rounded-full overflow-hidden ">
                                {video2 && (
                                    <video
                                        key={video2}
                                        src={video2}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-base text-white xl:max-w-[465px] px-8 lg:lg:px-[100px] xl:px-0 text-ambient">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></div>
                    <div className="flex justify-start flex-row xl:gap-2 items-center pt-5 xl:pt-8 pb-5 xl:pb-0">
                        <img
                            src={certification1}
                            className="w-20 xl:w-auto object-cover xl:h-[70px]"
                        ></img>
                        <img
                            src={certification3}
                            className="w-20 xl:w-auto  object-cover xl:h-[70px]"
                        ></img>
                        <img
                            src={certification2}
                            className="w-20 xl:w-auto  object-cover xl:h-[70px]"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
