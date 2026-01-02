import logo from "../../../images/logo/logo.svg";
import hamburguer from "../../../images/icons/hamburg.svg";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
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
            <div className="flex justify-between w-full absolute top-0 margin-website pt-4 xl:pt-[40px] ">
                <img src={logo} className="h-4 xl:h-auto"></img>
                <div className="flex items-center justify-center xl:gap-4 gap-2">
                    <p className="text-white font-eurostile font-medium text-[12px] xl:text-[14px] xl:text-[22px] xl:leading-[22px] pt-1 xl:pt-2 cursor-pointer">
                        PT
                    </p>
                    <img
                        src={hamburguer}
                        className="cursor-pointer h-3 xl:h-[18px]"
                        onClick={handleMenu}
                    ></img>
                </div>
            </div>
            <div className="absolute bottom-[140px] text-white margin-website hidden">
                <div className="relative w-full xl:mac-w-[720px]">
                    <h1 className="font-eurostile xl:text-[86px] xl:leading-[87px] uppercase">
                        We<br></br> create<br></br> solutions.
                    </h1>
                    <p className="absolute right-0 text-white top-20 uppercase font-normal xl:text-[15px] text-right">
                        Through <br></br>innovation and<br></br> precision.
                    </p>
                </div>
            </div>
        </>
    );
}
