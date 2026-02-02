import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";

//config
import { API_URL } from "../../config";

//fake images
import area1 from "../../../images/fake/portefolio/area1.jpg";
import area2 from "../../../images/fake/portefolio/area2.jpg";
import area3 from "../../../images/fake/portefolio/area3.jpg";
import component from "../../../images/fake/portefolio/component.png";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import SecondTitle from "../Layout/SecondTitle";
import Title from "../Layout/Title";
import Area from "./Area";
import Map from "./Map";
import Partners from "./Partners/Partners";
import Component from "./Component";

export default function Portefolio({ showWorkWithUs }) {
    const [data, setData] = new useState([]);
    const [click, setClick] = new useState(false);

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

    const components = (
        <div className="mt-0 xl:mt-[50px]">
            <div className="area-componets">
                <Component image={component} />
                <Component image={component} />
                <Component image={component} />
            </div>
            <div className="area-componets xl:mt-14">
                <Component image={component} />
                <Component image={component} />
                <Component image={component} />
            </div>
            <div className="area-componets xl:mt-14">
                <Component image={component} />
                <Component image={component} />
            </div>
        </div>
    );

    function handleClick() {
        setClick((prev) => !prev);
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
                    className="pt-15 xl:pt-20 4xl:pt-30 text-azul text-center"
                />
                <div className="flex flex-col xl:flex-row justify-between mt-5 xl:mt-32 margin-website gap-5 xl:gap-9">
                    <Area
                        image={area1}
                        text="automotive"
                        onClick={handleClick}
                        clicked={click}
                    />
                    {click && <div className=" xl:hidden"> {components}</div>}
                    <Area
                        image={area2}
                        text="HOME & APPLIANCE"
                        onClick={handleClick}
                        clicked={click}
                    />
                    <Area
                        image={area3}
                        text="AEROSPACE & DEFENSE"
                        onClick={handleClick}
                        clicked={click}
                    />
                </div>
                {click && <div className="hidden xl:block"> {components}</div>}
            </div>
            <div className="mb-10 xl:mb-52">
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
                video={appUrl + data.section_5_media}
            />
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
