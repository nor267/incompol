import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";

//icons
import arrowWhite from "../../../images/icons/triangle-white.svg";
import arrowGrey from "../../../images/icons/triangle-grey.svg";

//components
import SecondTitle from "../Layout/SecondTitle";

//config
import { API_URL } from "../../config";

export default function Certifications({ slogan, title }) {
    const [data, setData] = new useState([]);

    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-certification",
                    data: {},
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    return (
        <div className="bg-light-grey pt-10 pb-20 xl:pt-25 xl:pb-80 2xl:pb-40">
            <div className="text-center text-azul flex justify-center items-center flex-col">
                <SecondTitle
                    slogan={slogan}
                    title={title}
                    className="text-azul text-center"
                />
            </div>
            <div className="pt-10 lg:pt-20 xl:pt-25 flex flex-col xl:flex-row margin-website justify-center items-center">
                <div className="bg-white text-azul xl:w-[400px] 2xl:w-[500px] lg:h-[280px] xl:h-[500px] 2xl:h-[550px] certification-box ">
                    <h1 className="font-eurostile text-[18px] md:text-[25px] xl:text-[23px] text-center uppercase pt-8 lg:pt-5 xl:pt-10">
                        {i18n.language === "pt"
                            ? data[0]?.title?.pt
                            : data[0]?.title?.en}
                    </h1>
                    {data[0]?.second_title && (
                        <p
                            className="text-[14px] xl:leading-[19px] tracking-[0.03em] text-center"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data[0]?.second_title?.pt
                                        : data[0]?.second_title?.en,
                            }}
                        ></p>
                    )}
                    <div
                        className="text-base xl:text-[16px]! w-full md:px-10 lg:px-0 lg:max-w-[750px] 2xl:max-w-[424px] pt-5 lg:pt-5 xl:pt-8 2xl:pt-5"
                        dangerouslySetInnerHTML={{
                            __html:
                                i18n.language === "pt"
                                    ? data[0]?.description?.pt
                                    : data[0]?.description?.en,
                        }}
                    ></div>
                    <img
                        src={appUrl + data[0]?.icon}
                        className="w-40 xl:hidden pt-2 pb-10 lg:pb-0"
                    ></img>

                    <div className="xl:w-[340px] bg-azul  xl:h-[200px] 2xl:h-[250px] xl:absolute xl:-bottom-30 2xl:-bottom-10 xl:left-1/2 xl:-translate-x-1/2 hidden xl:block">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowWhite}
                                className="xl:absolute top-0 left-1/2 -translate-x-1/2"
                            ></img>
                            <img
                                src={arrowGrey}
                                className="xl:absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={appUrl + data[0]?.icon}
                                className="xl:absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:w-40 2xl:w-50"
                            ></img>
                        </div>
                    </div>
                </div>

                <div className="bg-azul text-white xl:w-[400px] 2xl:w-[500px] lg:h-[300px] xl:h-[600px] 2xl:h-[600px] certification-box ">
                    <h1 className="font-eurostile text-white text-[18px] md:text-[25px] xl:text-[23px] text-center uppercase pt-8 lg:pt-5 xl:pt-14 xl:max-w-[300px]">
                        {i18n.language === "pt"
                            ? data[1]?.title?.pt
                            : data[1]?.title?.en}
                    </h1>
                    {data[1]?.second_title && (
                        <p
                            className="text-[14px] xl:leading-[19px] tracking-[0.03em] text-center"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data[1]?.second_title?.pt
                                        : data[1]?.second_title?.en,
                            }}
                        ></p>
                    )}

                    <div
                        className="text-base xl:text-[16px]! w-full  md:px-10 lg:px-0 lg:max-w-[750px] 2xl:max-w-[424px] pt-5 xl:pt-5 "
                        dangerouslySetInnerHTML={{
                            __html:
                                i18n.language === "pt"
                                    ? data[1]?.description?.pt
                                    : data[1]?.description?.en,
                        }}
                    ></div>
                    <img
                        src={appUrl + data[1]?.icon}
                        className="w-40 xl:hidden pt-2 xl:pb-3 pb-10"
                    ></img>
                    <div className="xl:w-[340px] bg-[#94999E] xl:h-[250px] xl:absolute xl:-bottom-20 2xl:-bottom-15 left-1/2 -translate-x-1/2 xl:block hidden">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowGrey}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={appUrl + data[1]?.icon}
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:w-40 2xl:w-50"
                            ></img>
                        </div>
                    </div>
                </div>

                <div className="bg-white text-azul xl:w-[400px] 2xl:w-[500px] lg:h-[400px] xl:h-[500px] 2xl:h-[550px] certification-box">
                    <h1 className="font-eurostile text-[18px]  md:text-[25px]  xl:text-[23px] text-center uppercase pt-8 lg:pt-5 xl:pt-10 xl:leading-[32px]">
                        {i18n.language === "pt"
                            ? data[2]?.title?.pt
                            : data[2]?.title?.en}
                    </h1>
                    {data[2]?.second_title && (
                        <p
                            className="text-[14px] xl:leading-[19px] tracking-[0.03em] text-center"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data[2]?.second_title?.pt
                                        : data[2]?.second_title?.en,
                            }}
                        ></p>
                    )}
                    <p
                        className="text-base xl:text-[16px]! w-full  md:px-10 lg:px-0 lg:max-w-[750px]  xl:max-w-[424px] pt-5 xl:pt-5"
                        dangerouslySetInnerHTML={{
                            __html:
                                i18n.language === "pt"
                                    ? data[2]?.description?.pt
                                    : data[2]?.description?.en,
                        }}
                    ></p>
                    <img
                        src={appUrl + data[2]?.icon}
                        className="w-40 xl:hidden pt-2 xl:pb-3 pb-10"
                    ></img>
                    <div className="xl:w-[340px] bg-azul xl:h-[200px] 2xl:h-[250px] xl:block hidden xl:absolute xl:-bottom-25 2xl:-bottom-8 left-1/2 -translate-x-1/2 ">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowWhite}
                                className="absolute top-0 left-1/2 -translate-x-1/2"
                            ></img>
                            <img
                                src={arrowGrey}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={appUrl + data[2]?.icon}
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:w-30 2xl:w-25"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
