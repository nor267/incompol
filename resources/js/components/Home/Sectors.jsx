import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import i18n from "../../../i18n/i18n";

//config
import { API_URL } from "../../config";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";

export default function Sectors({ title, slogan, appUrl }) {
    const [data, setData] = new useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-icons",
                    data: {
                        id: 1,
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    return (
        <div>
            <div className="text-azul text-center pt-12 xl:pt-[100px] 4xl:pt-[150px]">
                <p
                    className="uppercase xl:text-[17px] xl:leading-[22px] tracking-[0.03em]"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
                <h1
                    className="uppercase font-eurostile xl:text-[32px] xl:leading-[32px] tracking-[0.14em] font-semibold xl:pt-[28px] "
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
            <div className="xl:max-h-[561px] flex flex-col md:flex-row md:gap-10 lg:gap-30 xl:gap-24 4xl:gap-50 items-center mt-8 lg:mt-20 xl:mt-20 2xl:mt-[190px]">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="sector relative h-full">
                        <img
                            src={appUrl + data[0]?.icon}
                            className=" object-cover w-full "
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-1/2 translate-x-1/2 xl:translate-x-0 xl:-right-2 -top-1 xl:top-1/2 xl:-translate-y-1/2 xl:rotate-90 h-8! xl:w-[58px]! xl:h-[50px]!"
                        ></img>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-5 pt-5 xl:pt-0 xl:gap-26">
                        <h1
                            className="uppercase text-azul font-eurostile text-[20px] leading-[22px] xl:text-[35px] tracking-[0.05em] xl:leading-[50px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data[0]?.first_title?.pt
                                        : data[0]?.first_title?.en,
                            }}
                        ></h1>
                        <div className="flex flex-col">
                            {data[0]?.second_title && (
                                <h4
                                    className="text-[16px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            i18n.language === "pt"
                                                ? data[0]?.second_title?.pt
                                                : data[0]?.second_title?.en,
                                    }}
                                ></h4>
                            )}

                            <p
                                className="text-[14px] leading-[24px] xl:text-[17px] xl:leading-[28px] tracking-[0.03em] text-azul mt-5 xl:mt-[37px] max-w-[280px] lg:max-w-auto"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data[0]?.text?.pt
                                            : data[0]?.text?.en,
                                }}
                            ></p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="xl:max-h-[561px] flex flex-col-reverse md:flex-row md:gap-10 lg:gap-30 xl:gap-24 4xl:gap-50 items-start xl:items-center mt-10 xl:mt-[80px] justify-end">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex flex-row-reverse lg:flex-row items-center gap-5 xl:gap-26">
                        <div className="flex flex-col ">
                            {data[1]?.second_title && (
                                <h4
                                    className="text-[16px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            i18n.language === "pt"
                                                ? data[1]?.second_title?.pt
                                                : data[1]?.second_title?.en,
                                    }}
                                ></h4>
                            )}
                            <p
                                className="text-[14px] leading-[24px] xl:text-[17px] xl:leading-[28px] tracking-[0.03em] text-azul mt-5 xl:mt-0 xl:text-right max-w-[280px] lg:max-w-auto"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data[1]?.text?.pt
                                            : data[1]?.text?.en,
                                }}
                            ></p>
                        </div>
                        <h1
                            className=" pr-10 xl:pr-0 uppercase text-azul font-eurostile text-[20px] leading-[22px]  xl:text-[35px] tracking-[0.05em] xl:leading-[50px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data[1]?.first_title?.pt
                                        : data[1]?.first_title?.en,
                            }}
                        ></h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="sector  relative h-full">
                        <img
                            src={appUrl + data[1]?.icon}
                            className="object-cover w-full"
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute -translate-x-1/2 left-1/2 xl:translate-x-0 xl:-left-2 -top-1 xl:top-1/2 xl:-translate-y-1/2 xl:-rotate-90 h-8! xl:w-[58px]! xl:h-[50px]!"
                        ></img>
                    </div>
                </motion.div>
            </div>
            <div className="xl:max-h-[561px] flex flex-col md:flex-row md:gap-10 lg:gap-30 xl:gap-24 4xl:gap-50 items-center mt-5 lg:mt-10 xl:mt-[80px] xl:mb-[190px]">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="sector relative h-full">
                        <img
                            src={appUrl + data[2]?.icon}
                            className=" object-cover w-full "
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-1/2 translate-x-1/2 xl:translate-x-0 xl:-right-2 -top-1 xl:top-1/2 xl:-translate-y-1/2 xl:rotate-90 h-8! xl:w-[58px]! xl:h-[50px]!"
                        ></img>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-5 pt-5 pb-5 xl:pb-0 xl:pt-0 xl:gap-26">
                        <h1
                            className="uppercase text-azul font-eurostile text-[20px] leading-[22px] xl:text-[35px] tracking-[0.05em] xl:leading-[50px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data[2]?.first_title?.pt
                                        : data[2]?.first_title?.en,
                            }}
                        ></h1>
                        <div className="flex flex-col">
                            {data[2]?.second_title && (
                                <h4
                                    className="text-[16px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            i18n.language === "pt"
                                                ? data[1]?.second_title?.pt
                                                : data[1]?.second_title?.en,
                                    }}
                                ></h4>
                            )}
                            <p
                                className="text-[14px] leading-[24px] xl:text-[17px] xl:leading-[28px] tracking-[0.03em] text-azul xl:mt-0 max-w-[280px] lg:max-w-auto"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data[2]?.text?.pt
                                            : data[2]?.text?.en,
                                }}
                            ></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
