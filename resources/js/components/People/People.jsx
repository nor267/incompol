import axios from "axios";
import { useEffect, useState } from "react";

//config
import { API_URL } from "../../config";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Form from "./Form";
import Hiring from "./Hiring";
import Jobs from "./Jobs/Jobs";
import Transparency from "./Transparency";
import Footer from "../Layout/Footer";

export default function People() {
    const [data, setData] = new useState([]);

    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-page",
                    data: {
                        slug: "people",
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);
    console.log(data);

    return (
        <>
            <NavbarPages />

            <Title
                title={data.name?.en}
                slogan={data.slogan?.en}
                text={data.description?.en}
            />
            <div className="bg-azul xl:h-[579px] flex flex-col lg:flex-row text-white mt-15 xl:mt-40">
                <div className="flex w-full lg:w-auto">
                    <img
                        src={appUrl + data?.second_image}
                        className="w-full max-w-screen lg:max-w-[200px] 4xl:max-w-[600px] xl:max-w-[900px] object-cover"
                    ></img>
                </div>
                <div className="pb-5 xl:pb-0 pt-5 px-8 xl:px-0 lg:pl-20 xl:pl-[130px] lg:pt-20 xl:pt-[150px]">
                    <p
                        className="text-[15px] xl:text-[17px] xl:leading-[22px] tracking-[0.03em]"
                        dangerouslySetInnerHTML={{
                            __html: data?.section_1_slogan?.en,
                        }}
                    ></p>
                    <h1
                        className="font-eurostile text-[16px] pt-2 xl:text-[32px] xl:leading-[32px] tracking-[0.14em] font-bold uppercase xl:max-w-[600px] xl:pt-7"
                        dangerouslySetInnerHTML={{
                            __html: data?.section_1_title?.en,
                        }}
                    ></h1>
                    <div className="flex flex-row items-start pt-6 lg:pt-15 xl:pt-28 justify-between lg:gap-15 xl:gap-28">
                        <div className="flex flex-col justify-center items-center gap-2 lg:gap-0">
                            <h1
                                className="w-10 xl:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.05em]"
                                dangerouslySetInnerHTML={{
                                    __html: data?.section_2_title?.en,
                                }}
                            ></h1>
                            <p
                                className="text-[14px] xl:text-[18px] xl:leading-[24px] font-medium uppercase"
                                dangerouslySetInnerHTML={{
                                    __html: data?.section_2_slogan?.en,
                                }}
                            ></p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 lg:gap-0">
                            <h1
                                className="w-10 xl:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]"
                                dangerouslySetInnerHTML={{
                                    __html: data?.section_3_title?.en,
                                }}
                            ></h1>
                            <p
                                className="text-[14px] xl:text-[18px] xl:leading-[24px] font-medium uppercase"
                                dangerouslySetInnerHTML={{
                                    __html: data?.section_3_slogan?.en,
                                }}
                            ></p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 lg:gap-0">
                            <h1
                                className="w-10 xl:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]"
                                dangerouslySetInnerHTML={{
                                    __html: data?.section_4_title?.en,
                                }}
                            ></h1>
                            <p
                                className="text-[14px] xl:text-[18px] xl:leading-[24px] font-medium uppercase"
                                dangerouslySetInnerHTML={{
                                    __html: data?.section_4_slogan?.en,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
            <Hiring text={data?.section_5_title?.en} />
            <Jobs
                title={data?.section_6_title?.en}
                slogan={data?.section_6_slogan?.en}
            />
            <Form
                text={data?.section_6_text?.en}
                image={appUrl + data?.section_6_media}
            />
            <Transparency
                title={data?.section_7_title?.en}
                slogan={data?.section_7_slogan?.en}
                text={data?.section_7_text?.en}
            />
            <Footer />
        </>
    );
}
