import { useState } from "react";
import i18n from "../../../i18n/i18n";

//components
import ComponentInfo from "./ComponentInfo";

export default function Component({
    image,
    title,
    gallery,
    text,
    secondText,
    appUrl,
    ...props
}) {
    const [info, seeInfo] = useState(false);

    function handleInfo() {
        seeInfo((prev) => !prev);
    }
    return (
        <>
            <div {...props}>
                <div onClick={handleInfo} className="cursor-pointer">
                    <div className="bg-light-grey h-[150px] xl:w-auto xl:h-[300px]  4xl:h-[350px] flex justify-center items-center mt-2 md:mt-0">
                        <img
                            src={image}
                            className="object-cover w-full h-full"
                        ></img>
                    </div>
                    <div className="flex flex-col 2xl:flex-row md:justify-between mt-2 xl:mt-[25px] items-start 2xl:items-center ">
                        <h1
                            className="font-eurostile font-black text-[12px] md:text-[14px] leading-[18px] mt-4 xl:mt-0 xl:text-[18px] xl:leading-[20px] tracking-[0.14em] uppercase text-azul text-left 2xl:max-w-[200px] 3xl:max-w-[300px]"
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        ></h1>
                        <button className="button-laranja-blue h-7 xl:h-[30px] py-0! mt-0! mt-2! 2xl:mt-0! hidden md:block">
                            {i18n.language === "pt"
                                ? "saber mais"
                                : "know more"}
                        </button>
                    </div>
                </div>
                {info && (
                    <ComponentInfo
                        image={image}
                        title={title}
                        text={text}
                        secondText={secondText}
                        gallery={gallery}
                        onClick={handleInfo}
                        appUrl={appUrl}
                    />
                )}
            </div>
        </>
    );
}
