import axios from "axios";
import { useEffect, useState } from "react";

//icons
import arrowWhite from "../../../images/icons/triangle-white.svg";
import arrowGrey from "../../../images/icons/triangle-grey.svg";

//components
import SecondTitle from "../Layout/SecondTitle";
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
        <div className="bg-light-grey pt-10 pb-20 xl:pt-38 xl:pb-52">
            <div className="text-center text-azul flex justify-center items-center flex-col">
                <SecondTitle
                    slogan={slogan}
                    title={title}
                    className="text-azul"
                />
            </div>
            <div className="pt-10 lg:pt-20 xl:pt-38 flex flex-col xl:flex-row margin-website justify-center items-center">
                <div className="bg-white text-azul lg:h-[250px] xl:h-[660px] certification-box ">
                    <h1 className="font-eurostile text-[18px] xl:text-[32px] text-center uppercase pt-10 lg:pt-10 xl:pt-18">
                        {data[0]?.title?.en}
                    </h1>
                    <div
                        className="text-base w-full lg:max-w-[750px] xl:max-w-[424px] pt-5 lg:pt-8 xl:pt-10"
                        dangerouslySetInnerHTML={{
                            __html: data[0]?.description?.en,
                        }}
                    ></div>
                    <img
                        src={appUrl + data[0]?.icon}
                        className="w-40 xl:hidden pt-2 pb-10 lg:pb-0"
                    ></img>

                    <div className="xl:w-[340px] bg-azul xl:h-[314px] xl:absolute xl:-bottom-10 xl:left-1/2 xl:-translate-x-1/2 hidden xl:block">
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
                                className="xl:absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 3xl:w-50"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="bg-azul text-white lg:h-[300px] xl:h-[740px] certification-box ">
                    <h1 className="font-eurostile text-white text-[18px] xl:text-[32px] text-center uppercase pt-10 lg:pt-10 xl:pt-14 ">
                        {data[1]?.title?.en}
                    </h1>
                    <div
                        className="text-base w-full lg:max-w-[750px]   xl:max-w-[424px] pt-5 xl:pt-10"
                        dangerouslySetInnerHTML={{
                            __html: data[1]?.description?.en,
                        }}
                    ></div>
                    <img
                        src={appUrl + data[1]?.icon}
                        className="w-40 xl:hidden pt-2 xl:pb-3 pb-10"
                    ></img>
                    <div className="xl:w-[340px] bg-[#94999E] xl:h-[314px] xl:absolute -bottom-10 left-1/2 -translate-x-1/2 xl:block hidden">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowGrey}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={appUrl + data[1]?.icon}
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 2xl:w-60"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-azul lg:h-[400px] xl:h-[660px] certification-box">
                    <h1 className="font-eurostile text-[18px] xl:text-[32px] text-center uppercase pt-10 lg:pt-10 xl:pt-18 xl:leading-[32px]">
                        {data[2]?.title?.en}
                    </h1>
                    <p className="text-[14px] xl:leading-[19px] tracking-[0.03em] text-center">
                        (Environmental, Social and Governance)
                    </p>
                    <p
                        className="text-base w-full lg:max-w-[750px]  xl:max-w-[424px] pt-5 xl:pt-10"
                        dangerouslySetInnerHTML={{
                            __html: data[2]?.description?.en,
                        }}
                    ></p>
                    <img
                        src={appUrl + data[2]?.icon}
                        className="w-40 xl:hidden pt-2 xl:pb-3 pb-10"
                    ></img>
                    <div className="xl:w-[340px] bg-azul xl:h-[314px] xl:block hidden xl:absolute -bottom-10 left-1/2 -translate-x-1/2 ">
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
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 3xl:w-40"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
