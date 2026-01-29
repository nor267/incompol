import { motion } from "framer-motion";

//icons
import triangleWhite from "../../../../images/icons/triangle-white.svg";

export default function Technology({ image, title, slogan, text, className }) {
    return (
        <div className={className}>
            <motion.div
                initial={{ x: -250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="w-screen xl:w-[1228px] relative h-full">
                    {image && (
                        <video
                            key={image}
                            src={image}
                            className="h-[200px] lg:h-[400px] xl:h-[560px] w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <img
                        src={triangleWhite}
                        className="absolute right-82 translate-x-0 xl:translate-x-0 xl:-right-2 translate-y-0 top-0  xl:top-1/2 xl:-translate-y-1/2 xl:rotate-90 h-7 xl:w-[58px] xl:h-[50px]"
                    ></img>
                </div>
            </motion.div>
            <div className="flex flex-col xl:flex-row  xl:items-center pb-8 xl:pb-0 xl:pt-0 gap-5 xl:gap-26 xl:pr-[137px] w-full xl:w-auto px-8 xl:px-0">
                <h1
                    className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] xl:[writing-mode:vertical-rl] xl:rotate-180 font-semibold text-left xl:text-center"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
                <div className="flex flex-col items-start lg:items-center w-full">
                    <h4 className="text-[14px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul">
                        {slogan}
                    </h4>
                    <p
                        className={
                            slogan == ""
                                ? "text-base leading-[24px]! xl:leading-[40px]! text-azul lg:text-center xl:text-left"
                                : "text-base leading-[24px]! xl:leading-[40px]! text-azul xl:mt-[20px]"
                        }
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
