import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

//icons
import logo from "../../../images/logo/logo.svg";
import hamburguer from "../../../images/icons/hamburg.svg";

//components
import Menu from "./Menu";
import { API_URL } from "../../config";

export default function NavbarPages({ i18n, toggleLanguage, showWorkWithUs }) {
    const { t } = useTranslation();
    const [menu, setMenu] = useState(false);

    function handleMenu() {
        setMenu((prev) => !prev);
    }

    return (
        <>
            <Menu
                isOpen={menu}
                handleMenu={handleMenu}
                showWorkWithUs={showWorkWithUs}
            />

            <div className="flex justify-between w-full margin-website items-center h-[50px] lg:h-[60px]  xl:h-[80px] bg-azul fixed top-0 z-50">
                <a href="/" className="cursor-pointer">
                    <img
                        src={logo}
                        className="h-3 md:h-5 lg:h-6 xl:h-[33px]"
                    ></img>
                </a>

                <div className="flex items-center justify-center gap-2 xl:gap-4">
                    {showWorkWithUs && (
                        <a href="/people">
                            <button className="button-laranja mr-1 xl:mr-0 hidden md:block">
                                {t("footerNor.work_with_us")}
                            </button>
                        </a>
                    )}
                    <p className="change-language" onClick={toggleLanguage}>
                        {i18n.language === "pt" ? "EN" : "PT"}
                    </p>
                    <img
                        src={hamburguer}
                        className="hamburguer-menu"
                        onClick={handleMenu}
                    ></img>
                </div>
            </div>
        </>
    );
}
