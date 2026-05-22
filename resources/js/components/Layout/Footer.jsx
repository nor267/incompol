import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { API_URL } from "../../config";
//icons
import logo from "../../../images/logo/logo.svg";
import reclamacoes from "../../../images/icons/footer/reclamacoes.svg";
import certification1 from "../../../images/icons/footer/certification1.png";
import certification2 from "../../../images/icons/footer/certification2.png";
import certification3 from "../../../images/icons/footer/certification3.png";

export default function Footer({ work, showWorkWithUs }) {
    const [data, setData] = new useState([]);
    const { t, i18n } = useTranslation();
    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-pages",
                    data: {
                        en: i18n.language === "en" ? true : false,
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, [i18n.language]);

    let classes =
        "pt-[50px] xl:pb-6 flex flex-col lg:flex-row xl:items-end justify-center lg:justify-between";
    if (work) {
        classes += " lg:pt-[100px] xl:pt-[200px]";
    } else classes += " lg:pt-[80px] xl:pt-[100px]";

    return (
        <>
            <div className="bg-azul w-full h-full margin-website text-white pb-5 xl:pb-0">
                <div className={classes}>
                    <div>
                        <img src={logo} className="h-7 xl:h-auto"></img>
                        <h1 className="uppercase font-eurostile text-[22px] leading-[22px] lg:text-[20px] xl:text-[28px] xl:leading-[28px] pt-10 xl:pt-20">
                            we <br></br> create
                            <br></br> solutions
                        </h1>
                    </div>
                    <div className="flex justify-between xl:justify-center lg:gap-20 2xl:gap-56 pt-10 xl:pt-0">
                        <div className="text-[14px] leading-[24px] xl:text-[15px] xl:leading-[25px] tracking-[0.03em] font-light flex-col flex">
                            {data.map((item, index) => (
                                <div className="" key={index}>
                                    <a
                                        href={"/" + item?.slug}
                                        className="hover:text-laranja duration-300 transition-all"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                i18n.language === "pt"
                                                    ? item?.name_menu?.pt
                                                    : item?.name_menu?.en,
                                        }}
                                    ></a>
                                </div>
                            ))}
                        </div>
                        <div className="text-[14px] leading-[24px] xl:text-[15px] xl:leading-[25px] tracking-[0.03em] font-light flex flex-col">
                            <a
                                href="/terms"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                {t("footerNor.privacy")}
                            </a>
                            <a
                                href={appUrl + data[4]?.section_7_media}
                                target="__blank"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                {t("footerNor.conduta")}
                            </a>
                            <div className="xl:pt-8 pt-3">
                                <a
                                    className="cursor-pointer"
                                    target="__blank"
                                    href="https://www.livroreclamacoes.pt/inicio/"
                                    alt="Livro de reclamações"
                                >
                                    <img src={reclamacoes}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-end items-end flex-col lg:gap-3 xl:gap-4 hidden">
                        <a href="/profile" className="button-laranja">
                            {t("footerNor.parceiros")}
                        </a>
                        <div className="flex lg:gap-2">
                            {showWorkWithUs && (
                                <a href="/people" className="button-laranja">
                                    {t("footerNor.team")}
                                </a>
                            )}
                            <a
                                href="https://www.linkedin.com/company/incompol"
                                target="__blank"
                                alt="linkedin"
                                className="button-laranja"
                            >
                                Linkedin
                            </a>
                        </div>
                        <div className="flex lg:gap-2 xl:gap-3">
                            <img
                                src={certification3}
                                className="w-auto h-10"
                            ></img>
                            <img
                                src={certification1}
                                className="w-auto h-10"
                            ></img>
                            <img
                                src={certification2}
                                className="w-auto h-10"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="lg:items-start xl:items-center lg:max-w-[320px] xl:max-w-[313px] lg:justify-start xl:justify-between pt-10 xl:pt-18 xl:pb-5.5 hidden lg:flex flex-col xl:flex-row">
                    <p className="xl:text-[13px] xl:leading-[22px] font-light">
                        {new Date().getFullYear()} © INCOMPOL
                    </p>
                    <a
                        href="https://www.nor267.com/"
                        target="__blank"
                        className="font-courier xl:text-[13px] xl:leading-[22px] cursor-pointer hover:text-laranja duration-300 transition-all"
                    >
                        {t("footerNor.madeby")}
                    </a>
                </div>
                <div className="flex justify-center items-start flex-col gap-4 pt-15 lg:hidden">
                    {showWorkWithUs && (
                        <a href="/people">
                            <button className="text-laranja border-3 border-laranja uppercase xl:px-4 rounded-[40px] xl:py-1 px-4 cursor-pointer font-bold">
                                {t("footerNor.team")}
                            </button>
                        </a>
                    )}
                    <a
                        href="https://www.linkedin.com/company/incompol"
                        target="__blank"
                        alt="linkedin"
                    >
                        <button className="text-laranja border-3 border-laranja uppercase xl:px-4 rounded-[40px] xl:py-1 cursor-pointer font-bold px-4">
                            Linkedin
                        </button>
                    </a>

                    <div className="flex gap-4 xl:gap-1">
                        <img
                            src={certification3}
                            className="w-auto h-10 "
                        ></img>
                        <img src={certification1} className="w-auto h-10"></img>
                        <img src={certification2} className="w-auto h-10"></img>
                    </div>
                </div>
            </div>
            <div className="h-[10px] lg:h-[30px] bg-laranja"></div>
        </>
    );
}
