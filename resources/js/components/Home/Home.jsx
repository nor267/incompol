import { useEffect, useState } from "react";
import axios from "axios";
import i18n from "../../../i18n/i18n";

//configs
import { API_URL } from "../../config";

//components
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Crafting from "./Crafting";
import Expertise from "./Expertise";
import Manucfacture from "./Manufacture";
import News from "./News/News";
import Sectors from "./Sectors";

export default function Home({ showWorkWithUs }) {
    const [data, setData] = new useState([]);
    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-page",
                    data: {
                        slug: "/",
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
            <div className="relative xl:h-[650px] 2xl:h-[800px] 3xl:h-[900px] hidden lg:block">
                {data?.banner_video && (
                    <>
                        <video
                            className="object-cover w-screen h-[550px] xl:h-[650px] 2xl:h-[800px] 3xl:h-[900px] overflow-hidden"
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
                        <div className="absolute top-0 z-10 gradiente-menu h-full w-screen"></div>
                    </>
                )}
            </div>
            <div className="relative h-[550px]  lg:hidden">
                {data?.banner_video_mobile && (
                    <>
                        <video
                            className="object-cover w-full h-[550px] xl:h-screen 3xl:h-[900px] overflow-hidden"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source
                                src={appUrl + data.banner_video_mobile}
                                type="video/mp4"
                            />
                        </video>
                        <div className="absolute top-0 z-10 gradiente-menu h-full w-screen"></div>
                    </>
                )}
            </div>
            <Navbar showWorkWithUs={showWorkWithUs} />
            <Expertise
                video1={data?.section_2_media}
                video2={data?.section_3_media}
                video3={data?.section_4_media}
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
                title1={
                    i18n.language === "pt"
                        ? data.section_2_title?.pt
                        : data.section_2_title?.en
                }
                slogan1={
                    i18n.language === "pt"
                        ? data.section_2_text?.pt
                        : data.section_2_text?.en
                }
                title2={
                    i18n.language === "pt"
                        ? data.section_3_title?.pt
                        : data.section_3_title?.en
                }
                slogan2={
                    i18n.language === "pt"
                        ? data.section_3_text?.pt
                        : data.section_3_text?.en
                }
                title3={
                    i18n.language === "pt"
                        ? data.section_4_title?.pt
                        : data.section_4_title?.en
                }
                slogan3={
                    i18n.language === "pt"
                        ? data.section_4_slogan?.pt
                        : data.section_4_slogan?.en
                }
                appUrl={appUrl}
            />
            <News appUrl={appUrl} />
            <Manucfacture
                banner={data?.section_5_media}
                appUrl={appUrl}
                title={
                    i18n.language === "pt"
                        ? data.section_5_title?.pt
                        : data.section_5_title?.en
                }
                button={
                    i18n.language === "pt"
                        ? data.section_5_slogan?.pt
                        : data.section_5_slogan?.en
                }
            />
            <Sectors
                title={
                    i18n.language === "pt"
                        ? data.section_6_title?.pt
                        : data.section_6_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data.section_6_slogan?.pt
                        : data.section_6_slogan?.en
                }
                appUrl={appUrl}
            />
            <Crafting
                slogan={
                    i18n.language === "pt"
                        ? data.section_7_slogan?.pt
                        : data.section_7_slogan?.en
                }
                title={
                    i18n.language === "pt"
                        ? data.section_7_title?.pt
                        : data.section_7_title?.en
                }
                image={appUrl + data?.section_8_media}
                titleShape={
                    i18n.language === "pt"
                        ? data.section_8_title?.pt
                        : data.section_8_title?.en
                }
                sloganShape={
                    i18n.language === "pt"
                        ? data.section_8_slogan?.pt
                        : data.section_8_slogan?.en
                }
                buttonShape={
                    i18n.language === "pt"
                        ? data.section_8_text?.pt
                        : data.section_8_text?.en
                }
                showWorkWithUs={showWorkWithUs}
            />
            <Footer work={showWorkWithUs} showWorkWithUs={showWorkWithUs} />
        </>
    );
}
