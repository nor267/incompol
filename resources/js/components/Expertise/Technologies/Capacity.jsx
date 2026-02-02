import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../../i18n/i18n";
//config
import { API_URL } from "../../../config";

//components
import Type from "./Type";

//components
import SecondTitle from "../../Layout/SecondTitle";

export default function Capacity({ slogan, title, text, video, video2 }) {
    const [data, setData] = new useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-equipment",
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
        <>
            <SecondTitle
                slogan={slogan}
                title={title}
                className="mt-20 xl:mt-32 text-azul text-left lg:text-center"
            />

            <div className="text-azul flex flex-col lg:flex-row justify-between pt-8 lg:px-[100px] xl:px-[137px] 2xl:px-[230px] xl:pt-[140px] pb-15 xl:pb-18">
                <div>
                    <p
                        className="text-base lg:max-w-[550px] xl:max-w-[465px] font-light px-8 lg:px-0"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></p>
                    <div className="relative mt-15 xl:mt-36 lg:w-[550px] xl:w-auto">
                        <div className="xl:ml-10">
                            {video && (
                                <video
                                    key={video}
                                    src={video}
                                    className="h-[200px] w-full object-cover lg:w-[600px] lg:h-[380px] 2xl:w-[740px] 2xl:h-[370px]"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            )}
                        </div>
                        <div className="hidden xl:block bg-laranja w-[150px] h-[150px] xl:w-[220px] xl:h-[220px] 2xl:w-[260px] 2xl:h-[260px] rounded-full xl:absolute -right-15 bottom-30 xl:-right-30 xl:bottom-50 2xl:-right-40 2xl:bottom-70 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className="w-[148px] h-[148px] xl:w-[215px] xl:h-[215px]  2xl:w-[255px] 2xl:h-[255px] rounded-full overflow-hidden ">
                                    {video && (
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
                </div>
                <div className="flex flex-col gap-1 xl:gap-3 px-8 lg:px-0 pt-10 lg:pt-20 xl:pt-0">
                    <h1 className="text-left font-eurostile text-[16px] xl:text-[18px] xl:leading-[26px] tracking-[0.14em] uppercase font-bold mb-5 xl:mb-10">
                        equipments
                    </h1>
                    {data.map((item, index) => (
                        <Type
                            text={
                                i18n.language === "pt"
                                    ? item?.title?.pt
                                    : item?.title?.en
                            }
                            key={index}
                            dimensions={
                                i18n.language === "pt"
                                    ? item?.description?.pt
                                    : item?.description?.en
                            }
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
