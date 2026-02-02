import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Technologies from "./Technologies/Technologies";
import Production from "./Production";
import Footer from "../Layout/Footer";
import Certification from "./Certification";
import Laboratory from "./Laboratory";
import Crafting from "./Crafting";

//config
import { API_URL } from "../../config";

export default function Expertise({ showWorkWithUs }) {
    const [data, setData] = new useState([]);
    const [tecnologies, setTecnologies] = new useState([]);

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
                    url: API_URL + "/get-icons",
                    data: {
                        id: 3,
                    },
                });

                setTecnologies(response.data);
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
                    url: API_URL + "/get-page",
                    data: {
                        slug: "expertise",
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
            <div className="mt-15 xl:mt-40">
                <img
                    src={appUrl + data?.second_image}
                    className="w-full object-cover h-[200px] lg:h-[450px] xl:h-[600px]"
                ></img>
            </div>
            <Technologies
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
                text={
                    i18n.language === "pt"
                        ? data.section_1_text?.pt
                        : data.section_1_text?.en
                }
                tecnologies={tecnologies}
                appUrl={appUrl}
                capacitySlogan={
                    i18n.language === "pt"
                        ? data.section_2_slogan?.pt
                        : data.section_2_slogan?.en
                }
                capacityTitle={
                    i18n.language === "pt"
                        ? data.section_2_title?.pt
                        : data.section_2_title?.en
                }
                capacityText={
                    i18n.language === "pt"
                        ? data.section_2_text?.pt
                        : data.section_2_text?.en
                }
                capacityVideo={appUrl + data?.section_2_media_1}
                capacityVideo2={appUrl + data?.section_2_media}
            />
            <Production
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
                market={appUrl + data?.section_3_media}
            />
            <Crafting
                title={
                    i18n.language === "pt"
                        ? data.section_4_title?.pt
                        : data.section_4_title?.en
                }
                slogan={
                    i18n.language === "pt"
                        ? data.section_4_slogan?.pt
                        : data.section_4_slogan?.en
                }
                text={
                    i18n.language === "pt"
                        ? data.section_4_text?.pt
                        : data.section_4_text?.en
                }
                video={appUrl + data?.section_4_media}
                image={appUrl + data?.section_4_media_1}
            />
            <Certification
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
                text={
                    i18n.language === "pt"
                        ? data.section_5_text?.pt
                        : data.section_5_text?.en
                }
                video={appUrl + data?.section_5_media}
                video2={appUrl + data?.section_5_media_1}
            />
            <Laboratory
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
                text={
                    i18n.language === "pt"
                        ? data.section_6_text?.pt
                        : data.section_6_text?.en
                }
                video={appUrl + data?.section_6_media}
                video2={appUrl + data?.section_6_media_1}
            />

            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
