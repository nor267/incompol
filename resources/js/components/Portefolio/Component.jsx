//fake images
import image from "../../../images/fake/portefolio/component.png";

import { useState } from "react";
import ComponentInfo from "./ComponentInfo";

export default function Component({ image }) {
    const [info, seeInfo] = useState(false);

    function handleInfo() {
        seeInfo((prev) => !prev);
    }
    return (
        <>
            <div onClick={handleInfo} className="cursor-pointer">
                <div className="bg-light-grey xl:w-[520px] xl:h-[421px]  4xl:w-[655px] 4xl:h-[470px] flex justify-center items-center">
                    <img
                        src={image}
                        className="object-cover w-full xl:max-h-[421px]"
                    ></img>
                </div>
                <div className="flex justify-between xl:mt-[38px] items-center xl:items-start">
                    <h1 className="font-eurostile font-black text-[14px] leading-[18px] mt-4 xl:mt-0 xl:text-[22px] xl:leading-[24px] tracking-[0.14em] uppercase text-azul text-left">
                        Steering<br></br>Wheels
                    </h1>
                    <button className="button-laranja h-7 xl:h-[33px]">
                        saber mais
                    </button>
                </div>
            </div>
            {info && (
                <ComponentInfo
                    image={image}
                    title="Steering Wheels"
                    onClick={handleInfo}
                />
            )}
        </>
    );
}
