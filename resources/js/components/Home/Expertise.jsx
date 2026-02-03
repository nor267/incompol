import { motion } from "framer-motion";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import fourIcons from "../../../images/icons/home/expertise/four-icons.svg";
import fourIconsLeft from "../../../images/icons/home/expertise/four-icons-left.svg";
import fourIconsRight from "../../../images/icons/home/expertise/icon-triangle.svg";

export default function Expertise({
    video1,
    video2,
    video3,
    appUrl,
    title,
    slogan,
    title1,
    slogan1,
    title2,
    slogan2,
    title3,
    slogan3,
}) {
    return (
        <div className="pt-10 xl:mt-[80px] bg-white text-white">
            <div className="lg:h-[850px] xl:h-[1480px] gradient-black-blue relative margin-website pb-15 xl:pb-0">
                <img
                    src={triangleWhite}
                    className="h-8 xl:h-auto -top-1 left-1/2 -translate-x-1/2 absolute"
                ></img>

                <div className="flex justify-center items-center w-full flex-col text-white pt-15 xl:pt-[140px]">
                    <p
                        className="font-light text-[14px] md:text-[15px] xl:text-[17px] xl:leading-[22px] tracking-widest uppercase"
                        dangerouslySetInnerHTML={{
                            __html: slogan,
                        }}
                    ></p>
                    <h1
                        className="font-eurostile text-[14px] md:text-[25px] xl:text-[32px] uppercase tracking-[0.20em] xl:leading-[32px] pt-1 xl:pt-[30px]"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    {/* main circle */}
                    <div className="rounded-full w-[330px] h-[330px] md:w-[400px] md:h-[400px] xl:w-[590px] xl:h-[590px] bg-azul mt-10 xl:mt-[90px] flex justify-center items-center flex-col text-center relative">
                        <img
                            src={fourIcons}
                            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[170px] xl:h-[170px]"
                        ></img>
                        <h1
                            className=" font-medium uppercase text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] xl:text-[28px] xl:leading-[36px] tracking-[0.14em] pt-4 md:pt-6 xl:pt-[53px]"
                            dangerouslySetInnerHTML={{
                                __html: title1,
                            }}
                        ></h1>
                        <p
                            className="text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[22px] xl:leading-[28px] tracking-[0.03em] font-light w-full max-w-[220px] xl:max-w-[370px] pt-3 xl:pt-[30px]"
                            dangerouslySetInnerHTML={{
                                __html: slogan1,
                            }}
                        ></p>
                        {/* main circle oragen */}
                        <div className="bg-laranja w-[130px] h-[130px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px]  xl:w-[370px] xl:h-[370px]  2xl:w-[394px] 2xl:h-[394px] rounded-full -right-7 -top-0 md:-right-22 lg:-top-10 lg:-right-30 xl:-right-60 xl:-top-20 absolute">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[125px] h-[125px] md:w-[195px] md:h-[195px]  lg:w-[195px] lg:h-[195px]  xl:w-[365px] xl:h-[365px] 2xl:w-[388px] 2xl:h-[388px] rounded-full overflow-hidden ">
                                    {video1 && (
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source
                                                src={appUrl + video1}
                                                type="video/mp4"
                                            />
                                        </video>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* left orange circle */}
                    <div className="absolute left-4 bottom-160 md:left-[80px] lg:left-20 lg:bottom-100 xl:left-28 xl:bottom-[460px] 4xl:left-[250px]">
                        <div className="bg-laranja w-[130px] h-[130px] md:w-[190px] md:h-[190px] lg:w-[180px] lg:h-[180px] xl:w-[280px] xl:h-[280px] 2xl:w-[309px] 2xl:h-[309px] rounded-full ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[125px] h-[125px] md:w-[185px] md:h-[185px] lg:w-[175px] lg:h-[175px] xl:w-[275px] xl:h-[275px] 2xl:w-[304px] 2xl:h-[304px] rounded-full overflow-hidden ">
                                    {video2 && (
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source
                                                src={appUrl + video2}
                                                type="video/mp4"
                                            />
                                        </video>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:absolute xl:bottom-40 lg:bottom-20 lg:left-40 xl:bottom-0 xl:left-[280px] 2xl:left-[350px] 4xl:left-[550px] mt-40 md:mt-20 lg:mt-0">
                        <motion.div
                            initial={{ x: -250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="flex justify-center items-center flex-col">
                                <img
                                    src={fourIconsLeft}
                                    className="w-25 md:w-30 xl:w-[121px] xl:h-[121px]"
                                ></img>
                                <h1
                                    className=" font-medium uppercase text-[16px] leading-[20px] md:text-[20px] md:leading-[27px] tracking-[0.14em] pt-5 xl:pt-[53px] text-center"
                                    dangerouslySetInnerHTML={{
                                        __html: title2,
                                    }}
                                ></h1>
                                <p
                                    className="text-[14px] leading-[18px]  md:text-[17px] md:leading-[23px] xl:leading-[26px] tracking-[0.05em] font-light w-full md:max-w-[350px] lg:max-w-[250px] xl:max-w-[315px] pt-5 xl:pt-[30px] text-center"
                                    dangerouslySetInnerHTML={{
                                        __html: slogan2,
                                    }}
                                ></p>
                            </div>
                        </motion.div>
                    </div>

                    {/* right */}
                    <div className="absolute right-4 bottom-75 md:bottom-70 md:right-[80px] lg:bottom-100 lg:right-20 xl:right-28 xl:bottom-[460px] 4xl:right-[250px] mt-6 xl:mt-0">
                        <div className="bg-laranja w-[130px] h-[130px] md:w-[190px] md:h-[190px] xl:w-[280px] xl:h-[280px] 2xl:w-[309px] 2xl:h-[309px] rounded-full ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className="w-[125px] h-[125px] md:w-[185px] md:h-[185px] xl:w-[275px] xl:h-[275px] 2xl:w-[304px] 2xl:h-[304px] rounded-full overflow-hidden ">
                                    {video3 && (
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source
                                                src={appUrl + video3}
                                                type="video/mp4"
                                            />
                                        </video>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:absolute lg:bottom-14 xl:bottom-26 2xl:bottom-30 lg:right-35 xl:right-[280px] 2xl:right-[350px] 4xl:right-[550px] mt-40 lg:mt-0">
                        <motion.div
                            initial={{ x: 250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="flex justify-center items-center flex-col">
                                <img
                                    src={fourIconsRight}
                                    className="w-25 xl:w-[121px] xl:h-[121px]"
                                ></img>
                                <h1
                                    className="font-medium uppercase text-[16px] leading-[20px] xl:text-[20px] xl:leading-[27px] tracking-[0.14em]  pt-5 xl:pt-[53px] text-center"
                                    dangerouslySetInnerHTML={{
                                        __html: title3,
                                    }}
                                ></h1>
                                <p
                                    className=" text-[14px] leading-[18px] md:text-[17px] md:leading-[23px] xl:leading-[26px] tracking-[0.03em] font-light w-full md:max-w-[350px] lg:max-w-[250px] xl:max-w-[320px] pt-4 xl:pt-[30px] text-center"
                                    dangerouslySetInnerHTML={{
                                        __html: slogan3,
                                    }}
                                ></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
