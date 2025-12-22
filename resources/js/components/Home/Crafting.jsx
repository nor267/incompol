import arrowGrey from "../../../images/icons/triangle-grey.svg";
import background from "../../../images/bg-grid.jpg";
import WorkWithUs from "./WorkWithUs";

export default function Crafting() {
    return (
        <>
            <div className="relative xl:h-[780px]">
                <div className="flex justify-center items-center flex-col relative gradient-blue h-full uppercase text-white text-center">
                    <img
                        src={arrowGrey}
                        className="absolute top-0 left-1/2 -translate-x-1/2"
                    ></img>
                    <h4 className="font-eurostile xl:text-[32px] xl:leading-[26px]">
                        Crafting components.
                    </h4>
                    <h1 className="font-eurostile xl:text-[74px] xl:leading-[79px] xl:pt-25">
                        DRIVING<br></br>INDUSTRIES.
                    </h1>
                </div>
            </div>
            <div className="xl:h-[1000px]">
                <img className="object-cover w-full" src={background}></img>
            </div>
        </>
    );
}
