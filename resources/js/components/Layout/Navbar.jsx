import { useEffect, useState } from "react";

//icons
import logo from "../../../images/logo/logo.svg";
import hamburguer from "../../../images/icons/hamburg.svg";

//components
import Menu from "./Menu";
import NavbarPages from "./NavbarPages";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    function handleMenu() {
        setMenu((prev) => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Menu isOpen={menu} handleMenu={handleMenu} />

            <div className="flex justify-between w-full absolute top-0 margin-website pt-4 lg:pt-[35px] xl:pt-[40px] z-20">
                <img src={logo} className="h-4 lg:h-7 xl:h-auto"></img>
                <div className="flex items-center justify-center lg:gap-3 xl:gap-4 gap-2">
                    <p className="change-language">PT</p>
                    <img
                        src={hamburguer}
                        className="hamburguer-menu"
                        onClick={handleMenu}
                    ></img>
                </div>
            </div>
            {showNavbar && <NavbarPages />}
        </>
    );
}
