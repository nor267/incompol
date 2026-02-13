import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";

//config
import { API_URL } from "../../config";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Overview from "./Overview";
import ShapeFuture from "./ShapeFuture";
import History from "./History";
import Certifications from "./Certifications";
import Footer from "../Layout/Footer";
import Portefolio from "./Portefolio";

export default function AboutUs({ showWorkWithUs }) {
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
                        slug: "about-us",
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, [i18n.language]);

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
            <div className="flex justify-center items-center w-full mt-15 xl:mt-36 relative">
                {data?.banner_video && (
                    <video
                        className="object-cover w-full xl:max-w-[1259px] h-[200px] md:h-[250px] lg:h-[450px] xl:h-[537px] 4xl:max-w-[1700px] 4xl:h-[700px]"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src={appUrl + data.banner_video}
                            type="video/mp4"
                        />
                    </video>
                )}
                {data?.second_image && (
                    <div className="bg-laranja xl:w-[300px] xl:h-[300px] rounded-full hidden xl:block xl:absolute xl:right-3 2xl:right-70 -bottom-20">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="xl:w-[294px] xl:h-[294px] rounded-full overflow-hidden ">
                                <img
                                    src={appUrl + data?.second_image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Overview
                title={
                    i18n.language === "pt"
                        ? data.section_1_title?.pt
                        : data.section_1_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data.section_1_slogan?.pt
                        : data.section_1_slogan?.en
                }
                appUrl={appUrl}
            />
            <ShapeFuture banner={appUrl + data?.section_2_media} />
            <History
                slogan={
                    i18n.language === "pt"
                        ? data.section_2_slogan?.pt
                        : data.section_2_slogan?.en
                }
                title={
                    i18n.language === "pt"
                        ? data.section_2_title?.pt
                        : data.section_2_title?.en
                }
            />
            <Certifications
                slogan={
                    i18n.language === "pt"
                        ? data.section_3_slogan?.pt
                        : data.section_3_slogan?.en
                }
                title={
                    i18n.language === "pt"
                        ? data.section_3_title?.pt
                        : data.section_3_title?.en
                }
            />
            <Portefolio
                video={appUrl + data.section_4_media}
                slogan={
                    i18n.language === "pt"
                        ? data.section_4_slogan?.pt
                        : data.section_4_slogan?.en
                }
                title={
                    i18n.language === "pt"
                        ? data.section_4_title?.pt
                        : data.section_4_title?.en
                }
                button={
                    i18n.language === "pt"
                        ? data.section_4_text?.pt
                        : data.section_4_text?.en
                }
                banner={appUrl + data?.section_5_media}
                titleShape={
                    i18n.language === "pt"
                        ? data.section_5_title?.pt
                        : data.section_5_title?.en
                }
                sloganShape={
                    i18n.language === "pt"
                        ? data.section_5_slogan?.pt
                        : data.section_5_slogan?.en
                }
                buttonShape={
                    i18n.language === "pt"
                        ? data.section_5_text?.pt
                        : data.section_5_text?.en
                }
                showWorkWithUs={showWorkWithUs}
            />
            <Footer work={showWorkWithUs} showWorkWithUs={showWorkWithUs} />
        </>
    );
}
