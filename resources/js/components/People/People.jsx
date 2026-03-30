import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

//config
import { API_URL } from "../../config";
import i18n from "../../../i18n/i18n";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Form from "./Form";
import Hiring from "./Hiring";
import Jobs from "./Jobs/Jobs";
import Transparency from "./Transparency";
import Footer from "../Layout/Footer";

export default function People({ showWorkWithUs }) {
    const [data, setData] = new useState([]);

    const appUrl = window.location.origin + "/storage/";
    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };
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
            <div className="bg-azul xl:h-[500px] flex flex-col lg:flex-row text-white mt-15 xl:mt-25">
                <div className="flex w-screen h-[280px] md:h-[250px] lg:h-auto lg:w-1/2">
                    <img
                        src={appUrl + data?.second_image}
                        className="w-full object-cover"
                    ></img>
                </div>
                <div className="pb-5 xl:pb-0 pt-5 px-8 xl:px-0 md:pl-[80px] lg:pl-20 xl:pl-10 2xl:pl-[130px] md:pt-10 lg:pt-20 xl:pt-[100px]">
                    <p
                        className="text-[15px] md:text-[17px] xl:leading-[22px] tracking-[0.03em]"
                        dangerouslySetInnerHTML={{
                            __html:
                                i18n.language === "pt"
                                    ? data?.section_1_slogan?.pt
                                    : data?.section_1_slogan?.en,
                        }}
                    ></p>

                    <h1
                        className="font-eurostile text-[16px] pt-2 md:text-[22px] xl:text-[32px] xl:leading-[38px] tracking-[0.14em] font-bold uppercase xl:max-w-[600px] xl:pt-7"
                        dangerouslySetInnerHTML={{
                            __html:
                                i18n.language === "pt"
                                    ? data?.section_1_title?.pt
                                    : data?.section_1_title?.en,
                        }}
                    ></h1>
                    <div className="flex flex-row items-start pt-6 md:pt-10 lg:pt-15 xl:pt-28 justify-between md:justify-center md:gap-20 lg:gap-15 xl:gap-28">
                        <div className="flex flex-col justify-center items-center gap-2 lg:gap-0">
                            <CountUp
                                className="w-10 md:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] md:text-[28px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.05em] text-center xl:pr-3.5"
                                start={0}
                                end={
                                    i18n.language === "pt"
                                        ? Number(
                                              data?.section_2_title?.pt
                                                  .replace("<p>", "")
                                                  .replace("</p>", ""),
                                          )
                                        : Number(
                                              data?.section_2_title?.en
                                                  .replace("<p>", "")
                                                  .replace("</p>", ""),
                                          )
                                }
                                duration={2.5}
                                separator=","
                            />
                            <p
                                className="text-[14px] md:text-[18px] xl:leading-[24px] font-medium uppercase text-center"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data?.section_2_slogan?.pt
                                            : data?.section_2_slogan?.en,
                                }}
                            ></p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 lg:gap-0">
                            <CountUp
                                className="w-10 md:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] md:text-[28px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.05em] text-center xl:pr-3.5"
                                start={0}
                                end={
                                    i18n.language === "pt"
                                        ? Number(
                                              data?.section_3_title?.pt
                                                  .replace("<p>", "")
                                                  .replace("</p>", ""),
                                          )
                                        : Number(
                                              data?.section_3_title?.en
                                                  .replace("<p>", "")
                                                  .replace("</p>", ""),
                                          )
                                }
                                duration={2.5}
                                separator=","
                            />
                            <p
                                className="text-[14px] xl:text-[18px] xl:leading-[24px] font-medium uppercase text-center"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data?.section_3_slogan?.pt
                                            : data?.section_3_slogan?.en,
                                }}
                            ></p>
                        </div>
                        <div className="flex flex-col justify-center items-center  gap-2 lg:gap-0">
                            <CountUp
                                className="w-10 md:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] md:text-[28px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.05em] text-center xl:pr-3.5"
                                start={0}
                                end={
                                    i18n.language === "pt"
                                        ? Number(
                                              data?.section_4_title?.pt
                                                  .replace("<p>", "")
                                                  .replace("</p>", ""),
                                          )
                                        : Number(
                                              data?.section_4_title?.en
                                                  .replace("<p>", "")
                                                  .replace("</p>", ""),
                                          )
                                }
                                duration={2.5}
                                separator=","
                            />
                            <p
                                className="text-[14px] xl:text-[18px] xl:leading-[24px] font-medium uppercase text-center"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.language === "pt"
                                            ? data?.section_4_slogan?.pt
                                            : data?.section_4_slogan?.en,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
            {showWorkWithUs && (
                <>
                    <Jobs
                        title={
                            i18n.language === "pt"
                                ? data?.section_6_title?.pt
                                : data?.section_6_title?.en
                        }
                        slogan={
                            i18n.language === "pt"
                                ? data?.section_6_slogan?.pt
                                : data?.section_6_slogan?.en
                        }
                    />
                    <Hiring
                        text={
                            i18n.language === "pt"
                                ? data?.section_5_title?.pt
                                : data?.section_5_title?.en
                        }
                    />
                    <Form
                        text={
                            i18n.language === "pt"
                                ? data?.section_6_text?.pt
                                : data?.section_6_text?.en
                        }
                        image={appUrl + data?.section_6_media}
                    />
                </>
            )}

            <Transparency
                title={
                    i18n.language === "pt"
                        ? data?.section_7_title?.pt
                        : data?.section_7_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data?.section_7_slogan?.pt
                        : data?.section_7_slogan?.en
                }
                text={
                    i18n.language === "pt"
                        ? data?.section_7_text?.pt
                        : data?.section_7_text?.en
                }
                pdf={appUrl + data?.section_7_media}
            />
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
