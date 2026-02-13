import { useEffect, useState } from "react";
import axios from "axios";

import i18n from "../../i18n/i18n";
//config
import { API_URL } from "../config";

//icons
import Footer from "./Layout/Footer";
//components
import NavbarPages from "./Layout/NavbarPages";
import Title from "./Layout/Title";

export default function Sustainability({ showWorkWithUs }) {
    const [data, setData] = new useState([]);

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
                        slug: "terms",
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
            />

            <div
                className="text-base margin-website text-azul xl:mt-10 pb-20"
                dangerouslySetInnerHTML={{
                    __html:
                        i18n.language === "pt"
                            ? data.description?.pt
                            : data.description?.en,
                }}
            ></div>

            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
