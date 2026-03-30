import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";

//icons
import logo from "../../../images/logo/logo.svg";
import hamburguer from "../../../images/icons/hamburg.svg";
import login from "../../../images/icons/login.svg";
import loginOrange from "../../../images/icons/login-orange.svg";

//components
import Menu from "./Menu";
import NavbarPages from "./NavbarPages";

export default function Navbar({ showWorkWithUs }) {
    const [menu, setMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [iconLogin, setIconLogin] = useState(login);

    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };

    /**
     * Abre o menu quando se clica no hamburguer
     */
    function handleMenu() {
        setMenu((prev) => !prev);
    }

    /**
     * Quando se faz scrool aparece o menu em cima fixed
     */
    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Menu
                isOpen={menu}
                handleMenu={handleMenu}
                showWorkWithUs={showWorkWithUs}
            />

            <div className="flex justify-between w-full absolute top-0 margin-website pt-4 lg:pt-[35px] xl:pt-[40px] z-20">
                <img src={logo} className="h-4 md:h-6 lg:h-7 xl:h-auto"></img>
                <div className="flex items-center justify-center md:gap-2 lg:gap-3 xl:gap-4 gap-2">
                    <div className="change-language" onClick={toggleLanguage}>
                        {i18n.language === "pt" ? "EN" : "PT"}
                    </div>

                    <img
                        src={hamburguer}
                        className="hamburguer-menu"
                        onClick={handleMenu}
                    ></img>
                </div>
            </div>
            {showNavbar && (
                <NavbarPages
                    i18n={i18n}
                    toggleLanguage={toggleLanguage}
                    showWorkWithUs={showWorkWithUs}
                />
            )}
        </>
    );
}
