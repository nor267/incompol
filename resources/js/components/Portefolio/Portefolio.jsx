import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";
import { useMediaQuery } from "react-responsive";

//config
import { API_URL } from "../../config";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import SecondTitle from "../Layout/SecondTitle";
import Title from "../Layout/Title";
import Area from "./Area";
import Map from "./Map";
import Partners from "./Partners/Partners";
import Component from "./Component";

function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

export default function Portefolio({ showWorkWithUs }) {
    const [data, setData] = new useState([]);
    const [click, setClick] = new useState(false);
    const [partners, setPartners] = new useState([]);
    const [portefolio, setPortefolio] = new useState([]);
    const [gallery, setGallery] = new useState([]);
    const [filteredComponents, setFilteredComponents] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    const appUrl = window.location.origin + "/storage/";
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };

    const cols = isMobile ? 2 : 3;
    const rows = chunkArray(filteredComponents, cols);

    /**
     * Obtém os dados da página portefolio
     */
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-page",
                    data: {
                        slug: "portfolio",
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
                        id: 4,
                    },
                });

                setPartners(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    /**
     * Obtém todos os dados do portefolio
     */
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-portefolio",
                });

                setPortefolio(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    function handleComponents(id) {
        const filtered = portefolio?.components?.filter(
            (item) => item.portefolio_id === id,
        );

        setFilteredComponents(filtered);
    }

    function handleGallery(id) {
        const filtered = portefolio?.gallery?.filter(
            (item) => item.portefolio_sub_category_id === id,
        );

        setGallery(filtered);
    }

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
            <div>
                <SecondTitle
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
                    className="pt-15 xl:pt-20 4xl:pt-20 text-azul text-center"
                />
                <div className="grid  flex-1 lg:grid-cols-3 flex mt-5 xl:mt-20 margin-website gap-8 xl:gap-9 2xl:gap-11 w-full">
                    {portefolio?.portefolio?.map((item, index) => (
                        <>
                            <Area
                                key={item.id}
                                image={appUrl + item.image}
                                text={
                                    i18n.language === "pt"
                                        ? item.name.pt
                                        : item.name.en
                                }
                                active={openIndex === index}
                                onClick={() => {
                                    handleComponents(item.id);
                                    setOpenIndex(
                                        openIndex === index ? null : index,
                                    );

                                    if (openIndex !== index) {
                                        setClick(true);
                                    } else setClick(false);
                                }}
                                clicked={click}
                            />
                            <div
                                className={`
    block grid-cols-2 lg:hidden overflow-hidden
    transition-all duration-500 ease-in-out
    ${click ? "max-h-full opacity-100" : "max-h-0 opacity-0"}
  `}
                            >
                                <div className=" xl:mt-[50px]">
                                    {rows.map((row, rowIndex) => (
                                        <div
                                            key={rowIndex}
                                            className={`area-componets ${rowIndex > 0 ? "xl:mt-14" : ""}`}
                                        >
                                            {row.map(
                                                function (component, index) {
                                                    if (
                                                        component.portefolio_id ===
                                                        item.id
                                                    )
                                                        return (
                                                            <Component
                                                                appUrl={appUrl}
                                                                onClick={() =>
                                                                    handleGallery(
                                                                        component.id,
                                                                    )
                                                                }
                                                                gallery={
                                                                    gallery
                                                                }
                                                                key={index}
                                                                title={
                                                                    i18n.language ===
                                                                    "pt"
                                                                        ? component
                                                                              .name
                                                                              .pt
                                                                        : component
                                                                              .name
                                                                              .en
                                                                }
                                                                text={
                                                                    i18n.language ===
                                                                    "pt"
                                                                        ? component
                                                                              .text
                                                                              .pt
                                                                        : component
                                                                              .text
                                                                              .en
                                                                }
                                                                secondText={
                                                                    i18n.language ===
                                                                    "pt"
                                                                        ? component
                                                                              .second_text
                                                                              .pt
                                                                        : component
                                                                              .second_text
                                                                              .en
                                                                }
                                                                image={
                                                                    appUrl +
                                                                    component.image
                                                                }
                                                            />
                                                        );
                                                    return null;
                                                },
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div
                    className={`
    hidden lg:block overflow-hidden
    transition-all duration-500 ease-in-out
    ${click ? "max-h-full opacity-100" : "max-h-0 opacity-0"}
  `}
                >
                    <div className="mt-0 xl:mt-[50px]">
                        {rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`area-componets margin-website ${rowIndex > 0 ? "mt-5 xl:mt-14" : ""}`}
                            >
                                {row.map((item, index) => (
                                    <Component
                                        appUrl={appUrl}
                                        onClick={() => handleGallery(item.id)}
                                        gallery={gallery}
                                        key={index}
                                        title={
                                            i18n.language === "pt"
                                                ? item.name.pt
                                                : item.name.en
                                        }
                                        text={
                                            i18n.language === "pt"
                                                ? item.text.pt
                                                : item.text.en
                                        }
                                        secondText={
                                            i18n.language === "pt"
                                                ? item.second_text.pt
                                                : item.second_text.en
                                        }
                                        image={appUrl + item.image}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-10 xl:mb-30">
                <Title
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
                />
            </div>
            <Partners
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
                partners={partners}
                appUrl={appUrl}
            />
            <Map
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
                image1={appUrl + data.section_5_media}
                image2={appUrl + data.section_5_media_1}
                image3={appUrl + data.section_6_media}
            />
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
