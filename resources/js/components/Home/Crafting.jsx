import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

//icons
import arrowGrey from "../../../images/icons/triangle-white.svg";
import background from "../../../images/bg-grid.jpg";
import component from "../../../images/icons/home/component-parallax.png";
import component2 from "../../../images/icons/home/component-parallax2.png";
import component3 from "../../../images/icons/home/component-parallax3.png";
import component4 from "../../../images/icons/home/component-parallax4.png";

//fake images
import shapeFuture from "../../../images/fake/home/work-with-us.jpg";

//components
import ShapeFuture from "../Layout/ShapeFuture";
export default function Crafting() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const { scrollY } = useScroll();

    const y = useTransform(scrollY, (v) => v * (isMobile ? -0.1 : -0.2));
    const y2 = useTransform(scrollY, (v) => v * (isMobile ? 0.1 : 0.2));

    return (
        <div className="relative mt-15 xl:mt-0">
            <div className="relative h-[200px] xl:h-[780px] ">
                {/* CONTENT */}
                <div className="relative flex h-full flex-col items-center justify-center gradient-blue uppercase text-white text-center">
                    <img
                        src={arrowGrey}
                        className="absolute -top-1 left-1/2 -translate-x-1/2 h-8 xl:h-auto"
                        alt=""
                    />

                    <h4 className="font-eurostile text-[18px] xl:text-[32px] xl:leading-[26px] z-20">
                        Crafting components.
                    </h4>

                    <h1 className="font-eurostile text-[20px] xl:text-[74px] xl:leading-[79px] xl:pt-25 z-20">
                        DRIVING
                        <br />
                        INDUSTRIES.
                    </h1>
                </div>

                {/* PARALLAX IMAGE */}
                <motion.img
                    src={component}
                    alt=""
                    style={{ y }}
                    className="absolute -bottom-[450px] right-0 xl:right-20 xl:-bottom-[1600px] z-30 h-[100px] xl:h-[560px] w-fit object-contain will-change-transform"
                />
                <motion.img
                    src={component2}
                    alt=""
                    style={{ y2 }}
                    className="hidden xl:absolute xl:block right-10 bottom-[400px] z-30 h-[240px] w-fit object-contain will-change-transform"
                />

                <motion.img
                    src={component3}
                    alt=""
                    style={{ y }}
                    className="absolute  -bottom-[300px] right-80 xl:right-280 xl:-bottom-[900px] z-10 h-[50px] xl:h-[240px] w-fit object-contain will-change-transform"
                />
                <motion.img
                    src={component4}
                    alt=""
                    style={{ y }}
                    className="absolute -left-[450px] xl:-left-[1680px] -bottom-[50px] xl:bottom-[0px] z-10 h-[100px] xl:h-[640px] w-fit object-contain will-change-transform rotate-90"
                />
            </div>

            {/* NEXT SECTION */}
            <div className="h-[430px] xl:h-[1000px]">
                <img
                    className="h-full w-full object-cover"
                    src={background}
                    alt=""
                />
            </div>

            <ShapeFuture shapeFuture={shapeFuture} />
        </div>
    );
}
