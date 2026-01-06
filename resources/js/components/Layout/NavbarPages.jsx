import logo from "../../../images/logo/logo.svg";
import hamburguer from "../../../images/icons/hamburg.svg";

//components
import Menu from "./Menu";
import { useState } from "react";

export default function NavbarPages() {
    const [menu, setMenu] = useState(false);

    function handleMenu() {
        setMenu((prev) => !prev);
    }
    return (
        <>
            <Menu
                handleMenu={handleMenu}
                className={menu ? "block" : "hidden"}
            />
            <div className="flex justify-between w-full margin-website items-center h-[40px]  xl:h-[80px] bg-azul fixed top-0 z-50">
                <a href="/" className="cursor-pointer">
                    <img src={logo} className="h-3 xl:h-[33px]"></img>
                </a>
                <div className="flex items-center justify-center gap-2 xl:gap-4">
                    <a href="/people">
                        <button className="button-laranja mr-1 xl:mr-0">
                            work with us
                        </button>
                    </a>
                    <p className="change-language">PT</p>
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
