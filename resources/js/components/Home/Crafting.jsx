import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

//icons
import arrowGrey from "../../../images/icons/triangle-white.svg";
import background from "../../../images/bg-grid.jpg";
import component from "../../../images/icons/home/component-parallax.png";
import component2 from "../../../images/icons/home/component-parallax2.png";
import component3 from "../../../images/icons/home/component-parallax3.png";

//components
import ShapeFuture from "../Layout/ShapeFuture";

export default function Crafting({
    slogan,
    title,
    image,
    titleShape,
    sloganShape,
    buttonShape,
}) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const { scrollY } = useScroll();

    const y = useTransform(scrollY, (v) => v * (isMobile ? -0.1 : -0.2));
    const y2 = useTransform(scrollY, (v) => v * (isMobile ? 0.1 : 0.2));

    return (
        <div className="relative mt-15 xl:mt-0">
            <div className="relative h-[200px] lg:h-[450px] xl:h-[800px] 3xl:h-[780px] ">
                {/* CONTENT */}
                <div className="relative flex h-full flex-col items-center justify-center gradient-blue uppercase text-white text-center">
                    <img
                        src={arrowGrey}
                        className="absolute -top-1 left-1/2 -translate-x-1/2 h-8 xl:h-auto"
                        alt=""
                    />

                    <h4
                        className="font-eurostile text-[18px] lg:text-[28px] xl:text-[32px] xl:leading-[26px] z-20"
                        dangerouslySetInnerHTML={{
                            __html: slogan,
                        }}
                    ></h4>

                    <h1
                        className="font-eurostile text-[20px] lg:text-[40px] xl:text-[74px] xl:leading-[79px] lg:pt-15 xl:pt-25 z-20"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                </div>

                {/* PARALLAX IMAGE */}
                <motion.img
                    src={component}
                    alt=""
                    style={{ y }}
                    className="absolute -bottom-[450px] right-0 xl:right-0 lg:-bottom-[800px] xl:-bottom-[1600px] z-30 h-[100px] lg:h-[250px] xl:h-[560px] w-fit object-contain will-change-transform"
                />
                <motion.img
                    src={component2}
                    alt=""
                    style={{ y2 }}
                    className="hidden lg:absolute lg:block right-0 lg:bottom-[200px] xl:bottom-[400px] z-30 lg:h-[200px]  xl:h-[240px] w-fit object-contain will-change-transform"
                />

                <motion.img
                    src={component3}
                    alt=""
                    style={{ y }}
                    className="absolute  -bottom-[300px] right-80 lg:right-200 lg:-bottom-[500px] xl:right-280 xl:-bottom-[900px] z-10 h-[50px] lg:h-[200px] xl:h-[240px] w-fit object-contain will-change-transform"
                />
            </div>

            {/* NEXT SECTION */}
            <div className="h-[430px] lg:h-[500px] xl:h-[1000px]">
                <img
                    className="h-full w-full object-cover"
                    src={background}
                    alt=""
                />
            </div>

            <ShapeFuture
                shapeFuture={image}
                title={titleShape}
                slogan={sloganShape}
                button={buttonShape}
            />
        </div>
    );
}
