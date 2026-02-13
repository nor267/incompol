import { useEffect, useState } from "react";
import axios from "axios";

import i18n from "../../../i18n/i18n";
//config
import { API_URL } from "../../config";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import Footer from "../Layout/Footer";
//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Commitment from "./Commitment";
import Goals from "./Goals";

export default function Sustainability({ showWorkWithUs }) {
    const [data, setData] = new useState([]);
    const [goals, setGoals] = new useState([]);

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
                        slug: "sustainability",
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-icons",
                    data: {
                        id: 6,
                    },
                });

                setGoals(response.data);
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

            <div className="mt-15 xl:mt-32 relative">
                <img
                    src={appUrl + data?.second_image}
                    className="w-full object-cover h-[200px] md:h-[350px] xl:h-[594px]"
                ></img>
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src={triangleWhite} className="h-5 xl:h-fit"></img>
                </div>
                <div className="absolute bottom-5 left-8 md:left-20 xl:left-[120px] xl:bottom-[50px]">
                    <h1
                        className="text-white uppercase font-eurostile font-medium md:text-[30px] xl:text-[40px] xl:leading-[50px] 2xl:text-[50px] 2xl:leading-[65px] w-full max-w-[250px] md:max-w-[400px] xl:max-w-[800px]"
                        dangerouslySetInnerHTML={{
                            __html:
                                i18n.language === "pt"
                                    ? data.section_1_title?.pt
                                    : data.section_1_title?.en,
                        }}
                    ></h1>
                </div>
            </div>
            <Commitment
                title={
                    i18n.language === "pt"
                        ? data.section_2_title?.pt
                        : data.section_2_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data.section_2_slogan?.pt
                        : data.section_2_slogan?.en
                }
                text={
                    i18n.language === "pt"
                        ? data.section_2_text?.pt
                        : data.section_2_text?.en
                }
                video={appUrl + data?.section_2_media}
                image={appUrl + data?.section_2_media_1}
            />
            <Goals
                title={
                    i18n.language === "pt"
                        ? data.section_3_title?.pt
                        : data.section_3_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data.section_3_slogan?.pt
                        : data.section_3_slogan?.en
                }
                text={
                    i18n.language === "pt"
                        ? data.section_3_text?.pt
                        : data.section_3_text?.en
                }
                goals={goals}
                titleRecognition={
                    i18n.language === "pt"
                        ? data.section_4_title?.pt
                        : data.section_4_title?.en
                }
                sloganRecognition={
                    i18n.language === "pt"
                        ? data.section_4_slogan?.pt
                        : data.section_4_slogan?.en
                }
                textRecognition={
                    i18n.language === "pt"
                        ? data.section_4_text?.pt
                        : data.section_4_text?.en
                }
                videoRecognition={appUrl + data?.section_4_media}
                imageRecognition={appUrl + data?.section_4_media_1}
            />
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
