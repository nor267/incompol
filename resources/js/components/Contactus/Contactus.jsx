import axios from "axios";
import { useEffect, useState } from "react";

//config
import { API_URL } from "../../config";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import Footer from "../Layout/Footer";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Form from "./Form";

export default function Contactus() {
    const [data, setData] = new useState([]);

    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-page",
                    data: {
                        slug: "contacts",
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
            <div className="mt-15 xl:mt-40 relative">
                <img
                    src={appUrl + data?.second_image}
                    className="h-[200px] lg:h-[450px] xl:h-[760px] w-full object-cover"
                ></img>
                <img
                    src={triangleWhite}
                    className="h-5 xl:h-auto absolute top-0 left-1/2 -translate-x-1/2"
                ></img>
            </div>
            <div className="py-15 lg:py-20 xl:py-38 4xl:px-[200px]">
                <div className=" margin-website flex justify-between flex-col lg:flex-row">
                    <div className="">
                        <div className="uppercase text-[18px] xl:text-[28px] xl:leading-[32px] text-azul font-bold flex">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: data.section_1_title?.en,
                                }}
                            ></span>
                            <span className="text-laranja pl-2">(Sede)</span>
                        </div>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html: data.section_1_slogan?.en,
                            }}
                        ></p>
                        <h1
                            className="uppercase text-[18px] xl:text-[28px] xl:leading-[32px] text-azul font-bold pt-8 xl:pt-22"
                            dangerouslySetInnerHTML={{
                                __html: data.section_2_title?.en,
                            }}
                        ></h1>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html: data.section_2_text?.en,
                            }}
                        ></p>
                    </div>
                    <div className="pt-3 xl:pt-0">
                        <img
                            src={appUrl + data?.section_2_media}
                            className="lg:w-[700px] xl:w-auto"
                        ></img>
                    </div>
                </div>
                <div className="pt-20 xl:pt-20 margin-website flex flex-col lg:flex-row-reverse  justify-end xl:gap-28">
                    <div className="">
                        <h1
                            className="uppercase text-[18px]  xl:text-[28px] xl:leading-[32px] text-azul font-bold"
                            dangerouslySetInnerHTML={{
                                __html: data.section_3_title?.en,
                            }}
                        ></h1>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html: data.section_3_text?.en,
                            }}
                        ></p>
                        <h1
                            className="uppercase text-[18px] xl:text-[28px] xl:leading-[32px] text-azul font-bold pt-8 xl:pt-22"
                            dangerouslySetInnerHTML={{
                                __html: data.section_4_title?.en,
                            }}
                        ></h1>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html: data.section_4_text?.en,
                            }}
                        ></p>
                    </div>
                    <div className="pt-3 xl:pt-0">
                        <img
                            src={appUrl + data?.section_4_media}
                            className="lg:w-[700px] xl:w-auto"
                        ></img>
                    </div>
                </div>
            </div>
            <Form
                title={data?.section_5_title?.en}
                slogan={data?.section_5_slogan?.en}
                contactTitle={data?.section_5_title?.en}
                contacts={data?.section_5_text?.en}
                linkedin={data?.section_6_title?.en}
            />
            <Footer work={true} />
        </>
    );
}
