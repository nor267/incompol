import { motion } from "framer-motion";

//icons
import triangleWhite from "../../../../images/icons/triangle-white.svg";

export default function TechnologyRight({
    image,
    title,
    slogan,
    text,
    className,
}) {
    return (
        <div className={className}>
            <div className="flex flex-col-reverse pb-8 lg:px-[100px] xl:px-0 xl:pb-0 xl:pt-0 xl:flex-row xl:items-center xl:gap-26 xl:pl-[137px] w-full xl:w-auto px-8">
                <div className="flex flex-col items-start xl:items-center w-full xl:w-auto">
                    <h4
                        className="text-[14px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul pt-5 xl:pt-0"
                        dangerouslySetInnerHTML={{
                            __html: slogan,
                        }}
                    ></h4>
                    <p
                        className={
                            slogan == ""
                                ? "text-base leading-[14px]! xl:leading-[20px]! text-azul xl:text-right"
                                : "text-base leading-[14px]! xl:leading-[20px]! text-azul xl:text-right xl:mt-[20px]"
                        }
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></p>
                </div>
                <h1
                    className="uppercase text-azul font-eurostile lg:text-[25px] xl:text-[42px] tracking-[0.05em] xl:leading-[54px] xl:[writing-mode:vertical-rl] xl:rotate-180 font-semibold text-left xl:text-center"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
            <motion.div
                initial={{ x: 250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="tecnology relative h-full">
                    {image && (
                        <video
                            key={image}
                            src={image}
                            className=" w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <img
                        src={triangleWhite}
                        className="absolute left-8 -top-1 lg:left-[100px] xl:-left-2 translate-y-0 xl:-translate-x-1/2 xl:translate-x-0 xl:top-1/2 xl:-translate-y-1/2 xl:-rotate-90 h-7 lg:h-9 xl:w-[58px] xl:h-[50px]"
                    ></img>
                </div>
            </motion.div>
        </div>
    );
}
