import { useState } from "react";

//fake images

import Component from "./Component";

export default function Area({ image, text, clicked, onClick }) {
    const [active, setActive] = new useState(false);

    function handleClick() {
        setActive((prev) => !prev);
    }

    let classes = "xl:h-[20px] duration-300 transition-all w-full";
    let titleClasses =
        "font-eurostile font-bold text-[16px] xl:text-[24px] xl:leading-[54px] tracking-[0.05em] uppercase duration-300 transition-all text-center w-full";
    let imageClasses = "h-[200px] w-full xl:w-[520px] xl:h-[520px]";

    if (clicked) {
        imageClasses += " hidden";
    }

    if (active) {
        classes += " bg-laranja xl:mt-[18px]";
        titleClasses += " text-laranja";
    } else {
        classes += " bg-azul xl:mt-[18px]";
        titleClasses += " text-azul";
    }

    return (
        <div className="relative w-full" onClick={onClick}>
            <button
                tyoe="button"
                className="flex flex-col justify-center items-center cursor-pointer w-full"
                onClick={handleClick}
            >
                <h1 className={titleClasses}>{text}</h1>
                <div className={imageClasses}>
                    <div className={classes}></div>
                    <img
                        src={image}
                        className="object-cover w-full h-full"
                    ></img>
                </div>
                {clicked && <div className={classes}></div>}
            </button>
        </div>
    );
}
