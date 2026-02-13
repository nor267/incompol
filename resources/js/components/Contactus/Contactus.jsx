import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

//config
import { API_URL } from "../../config";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import Footer from "../Layout/Footer";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Form from "./Form";

export default function Contactus({ showWorkWithUs }) {
    const [data, setData] = new useState([]);

    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };
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

    return (
        <>
            <NavbarPages
                i18n={i18n}
                toggleLanguage={toggleLanguage}
                showWorkWithUs={showWorkWithUs}
            />
            <Title
                title={i18n.language === "pt" ? data.name?.pt : data.name?.en}
                slogan={
                    i18n.language === "pt" ? data.slogan?.pt : data.slogan?.en
                }
                text={
                    i18n.language === "pt"
                        ? data.description?.pt
                        : data.description?.en
                }
            />
            <div className="mt-15 xl:mt-20 relative">
                <img
                    src={appUrl + data?.second_image}
                    className="h-[200px] md:h-[350px] lg:h-[450px] xl:h-[550px] w-full object-cover"
                ></img>
                <img
                    src={triangleWhite}
                    className="h-5 md:h-9 xl:h-auto absolute top-0 left-1/2 -translate-x-1/2"
                ></img>
            </div>
            <div className="py-15 lg:py-20 xl:py-38 4xl:px-[200px]">
                <div className="lg:gap-8 margin-website flex justify-between flex-col lg:flex-row">
                    <div className="">
                        <div className="uppercase text-[18px] xl:text-[28px] xl:leading-[32px] text-azul font-bold flex">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data.section_1_title?.pt +
                                              "(Sede)"
                                            : data.section_1_title?.en,
                                }}
                            ></span>
                        </div>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_1_slogan?.pt
                                        : data.section_1_slogan?.en,
                            }}
                        ></p>
                        <h1
                            className="uppercase text-[18px] xl:text-[28px] xl:leading-[32px] text-azul font-bold pt-8 xl:pt-22"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_2_title?.pt
                                        : data.section_2_title?.en,
                            }}
                        ></h1>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_2_text?.pt
                                        : data.section_2_text?.en,
                            }}
                        ></p>
                    </div>
                    <div className="pt-3 lg:pt-0 xl:pt-0">
                        <img
                            src={appUrl + data?.section_2_media}
                            className="md:w-[500px] lg:w-[550px] xl:w-auto"
                        ></img>
                    </div>
                </div>
                <div className="pt-20 md:pt-10 xl:pt-20 margin-website flex flex-col lg:flex-row-reverse justify-end md:gap-10 lg:gap-10 xl:gap-28">
                    <div className="">
                        <h1
                            className="uppercase text-[18px]  xl:text-[28px] xl:leading-[32px] text-azul font-bold"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_3_title?.pt
                                        : data.section_3_title?.en,
                            }}
                        ></h1>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_3_text?.pt
                                        : data.section_3_text?.en,
                            }}
                        ></p>
                        <h1
                            className="uppercase text-[18px] xl:text-[28px] xl:leading-[32px] text-azul font-bold pt-8 xl:pt-22"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_4_title?.pt
                                        : data.section_4_title?.en,
                            }}
                        ></h1>
                        <p
                            className="text-base text-azul pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html:
                                    i18n.language === "pt"
                                        ? data.section_4_text?.pt
                                        : data.section_4_text?.en,
                            }}
                        ></p>
                    </div>
                    <div className="pt-3 lg:pt-0 xl:pt-0">
                        <img
                            src={appUrl + data?.section_4_media}
                            className="md:w-[500px] lg:w-[550px] xl:w-auto"
                        ></img>
                    </div>
                </div>
            </div>
            <Form
                title={
                    i18n.language === "pt"
                        ? data.section_5_title?.pt
                        : data.section_5_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data.section_5_slogan?.pt
                        : data.section_5_slogan?.en
                }
                contactTitle={
                    i18n.language === "pt"
                        ? data.section_5_title?.pt
                        : data.section_5_title?.en
                }
                contacts={
                    i18n.language === "pt"
                        ? data.section_5_text?.pt
                        : data.section_5_text?.en
                }
                linkedin={
                    i18n.language === "pt"
                        ? data.section_6_title?.pt
                        : data.section_6_title?.en
                }
            />
            <Footer work={false} showWorkWithUs={showWorkWithUs} />
        </>
    );
}
