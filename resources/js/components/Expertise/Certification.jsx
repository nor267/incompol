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
                className="pt-15 xl:pt-20 text-white text-center"
                slogan={slogan}
                title={title}
            />
            <div className=" flex flex-col-reverse xl:flex-row  pt-8 xl:pt-20 lg:pb-30 pb-25 xl:pb-20 xl:gap-50 2xl:gap-68 justify-center items-center margin-website">
                <div className="relative">
                    {video && (
                        <video
                            key={video}
                            src={video}
                            className="md:h-[280px] lg:w-[800px] lg:h-[400px] xl:w-[500px] xl:h-[370px]  2xl:w-[570px] 2xl:h-[375px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <div className="bg-laranja w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] 2xl:w-[260px] 2xl:h-[260px] rounded-full absolute -right-5 xl:-right-20 2xl:-right-36 -bottom-15 xl:-bottom-20 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className=" w-[98px] h-[98px] lg:w-[195px] lg:h-[195px] 2xl:w-[255px] 2xl:h-[255px] rounded-full overflow-hidden ">
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
                <div className="text-base text-white xl:max-w-[465px]  2xl:px-0 text-ambient">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></div>
                    <div className="flex justify-start flex-row lg:gap-3 xl:gap-2 items-center pt-5 xl:pt-8 pb-5 xl:pb-0">
                        <img
                            src={certification1}
                            className="max-h-[100px] w-23 md:w-fit lg:w-40 xl:w-50 object-cover xl:max-h-[64px]"
                        ></img>
                        <img
                            src={certification3}
                            className="max-h-[100px] w-23 md:w-fit lg:w-40 xl:w-50  object-cover xl:max-h-[64px]"
                        ></img>
                        <img
                            src={certification2}
                            className="max-h-[100px] w-18 md:w-fit xl:w-50  object-cover xl:max-h-[83px]"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
