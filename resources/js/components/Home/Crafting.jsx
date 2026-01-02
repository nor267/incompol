//icons
import arrowGrey from "../../../images/icons/triangle-grey.svg";
import background from "../../../images/bg-grid.jpg";
import component from "../../../images/icons/home/component-parallax.png";

//fake images
import shapeFuture from "../../../images/fake/home/work-with-us.jpg";

//components
import ShapeFuture from "../Layout/ShapeFuture";

export default function Crafting() {
    return (
        <>
            <div className="relative">
                <div className="relative h-[200px] xl:h-[780px]">
                    <div className="flex justify-center items-center flex-col relative gradient-blue h-full uppercase text-white text-center">
                        <img
                            src={arrowGrey}
                            className="absolute top-0 left-1/2 -translate-x-1/2 h-5 xl:h-auto"
                        ></img>
                        <h4 className="font-eurostile text-[18px] xl:text-[32px] xl:leading-[26px]">
                            Crafting components.
                        </h4>
                        <h1 className="font-eurostile text-[20px]  xl:text-[74px] xl:leading-[79px] xl:pt-25">
                            DRIVING<br></br>INDUSTRIES.
                        </h1>
                    </div>
                </div>
                <div className="h-[300px] xl:h-[1000px]">
                    <img className="object-cover w-full" src={background}></img>
                </div>

                <ShapeFuture shapeFuture={shapeFuture} />
            </div>
        </>
    );
}
