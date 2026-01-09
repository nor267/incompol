import { useState } from "react";

export default function Type({ text }) {
    const [info, setInfo] = useState(false);

    function handleInfo() {
        setInfo((prev) => !prev);
    }

    return (
        <>
            <div
                className="bg-laranja rounded-3xl w-fit duration-300 cursor-pointer"
                onClick={handleInfo}
            >
                <div className="bg-azul text-white font-bold text-[14px] leading-[24px] xl:text-[17px] xl:leading-[38px] tracking-[0.03em] rounded-[40px] px-4 py-1 w-full">
                    {text}
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                        ${
                            info
                                ? "max-h-96 opacity-100 px-4 py-3"
                                : "max-h-0 opacity-0 px-0 py-0"
                        }`}
                >
                    <p className="text-white text-[12px] ">
                        <strong>Max. Capacity: </strong>350/150 Ton.
                    </p>
                    <p className="text-white text-[12px]">
                        <strong>Max. Dimension: </strong>2500x1370 mm
                    </p>
                </div>
            </div>
        </>
    );
}
