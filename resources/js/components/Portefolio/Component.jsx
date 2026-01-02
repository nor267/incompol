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
            <button onClick={handleInfo} className="cursor-pointer">
                <div className="bg-light-grey xl:w-[520px] xl:h-[421px] flex justify-center items-center">
                    <img
                        src={image}
                        className="object-cover w-full xl:max-h-[421px]"
                    ></img>
                </div>
                <div className="flex justify-between xl:mt-[38px]">
                    <h1 className="font-eurostile font-black xl:text-[22px] xl:leading-[24px] tracking-[0.14em] uppercase text-azul text-left">
                        Steering<br></br>Wheels
                    </h1>
                    <button className="text-laranja uppercase border-laranja border-3 rounded-[40px] font-bold xl:px-4 xl:h-[33px]">
                        saber mais
                    </button>
                </div>
            </button>
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
