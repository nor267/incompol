import { motion } from "framer-motion";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";

//fake images
import sector1 from "../../../images/fake/home/sector1.jpg";
import sector2 from "../../../images/fake/home/sector2.jpg";
import sector3 from "../../../images/fake/home/sector3.jpg";

export default function Sectors({ title, slogan }) {
    return (
        <div>
            <div className="text-azul text-center pt-20 xl:pt-[204px]">
                <p
                    className="uppercase xl:text-[17px] xl:leading-[22px] tracking-[0.03em]"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
                <h1
                    className="uppercase font-eurostile xl:text-[32px] xl:leading-[32px] tracking-[0.14em] font-semibold xl:pt-[28px] "
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
            <div className="xl:max-h-[561px] flex flex-col lg:flex-row lg:gap-30 xl:gap-24 4xl:gap-80 items-center mt-8 xl:mt-[190px]">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="lg:w-[600px] xl:w-[700px] 2xl:w-[800px] 4xl:w-[1228px] 3xl:w-[1000px]  relative h-full">
                        <img
                            src={sector1}
                            className="lg:h-[300px] xl:h-[400px] 2xl:h-[450px] h-[200px] object-cover w-full 3xl:h-[570px]"
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-1/2 translate-x-1/2 xl:translate-x-0 xl:-right-2 -top-1 xl:top-1/2 xl:-translate-y-1/2 xl:rotate-90 h-8 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-5 pt-5 xl:pt-0 xl:gap-26">
                        <h1 className="uppercase text-azul font-eurostile text-[20px] leading-[22px] xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            automotive
                        </h1>
                        <div className="flex flex-col">
                            <h4 className="text-[16px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul">
                                Single parts and <br></br>sub-assemblies for:
                            </h4>
                            <p className="text-[14px] leading-[24px] xl:text-[17px] xl:leading-[28px] tracking-[0.03em] text-azul mt-5 xl:mt-[37px]">
                                Body & trim<br></br>
                                Exhaust systems<br></br>
                                Seats<br></br> Steering wheels<br></br>
                                Engine & damper mount systems <br></br>
                                Glasses – support and decorative parts<br></br>
                                Airbag systems<br></br> Infotainment
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="xl:max-h-[561px] flex flex-col-reverse lg:flex-row lg:gap-30 xl:gap-24 4xl:gap-80 items-start xl:items-center mt-10 xl:mt-[80px] justify-end">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex flex-row-reverse lg:flex-row items-center gap-5 xl:gap-26">
                        <div className="flex flex-col ">
                            <h4 className="text-[20px] font-semibold leading-[24px] tracking-[0.03em] uppercase text-azul"></h4>
                            <p className="text-[14px] leading-[24px] xl:text-[17px] xl:leading-[28px] tracking-[0.03em] text-azul mt-5 xl:mt-0 xl:text-right">
                                Heating Plates<br></br> Clamps<br></br> Rings
                                <br></br> Gas manifolds<br></br>
                                Exhaust Ducts<br></br> Boxes<br></br> Brackets
                                <br></br> Assemblies<br></br> Aluminium Frames
                                <br></br> Structural parts
                            </p>
                        </div>
                        <h1 className=" pr-10 xl:pr-0 uppercase text-azul font-eurostile text-[20px] leading-[22px]  xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            HOME<br></br> APPLIANCE
                        </h1>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="lg:w-[600px] xl:w-[700px] 2xl:w-[800px] 4xl:w-[1228px] 3xl:w-[1000px]  relative h-full">
                        <img
                            src={sector2}
                            className="lg:h-[300px] xl:h-[400px] 2xl:h-[450px] h-[200px] object-cover w-full 3xl:h-[570px]"
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute -translate-x-1/2 left-1/2 xl:translate-x-0 xl:-left-2 -top-1 xl:top-1/2 xl:-translate-y-1/2 xl:-rotate-90 xl:w-[58px] xl:h-[50px] h-8"
                        ></img>
                    </div>
                </motion.div>
            </div>
            <div className="xl:max-h-[561px] flex flex-col lg:flex-row lg:gap-30 xl:gap-24 4xl:gap-80 items-center mt-5 xl:mt-[80px] xl:mb-[190px]">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="lg:w-[600px] xl:w-[700px] 2xl:w-[800px] 4xl:w-[1228px] 3xl:w-[1000px]  relative h-full">
                        <img
                            src={sector3}
                            className="lg:h-[300px] xl:h-[400px] 2xl:h-[450px] h-[200px] object-cover w-full 3xl:h-[570px]"
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-1/2 translate-x-1/2 xl:translate-x-0 xl:-right-2 -top-1 xl:top-1/2 xl:-translate-y-1/2 xl:rotate-90 h-8 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-5 pt-5 pb-5 xl:pb-0 xl:pt-0 xl:gap-26">
                        <h1 className="uppercase text-azul font-eurostile text-[20px] leading-[22px] xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            AEROSPACE
                        </h1>
                        <div className="flex flex-col">
                            <h4 className="text-[20px] font-semibold leading-[24px] tracking-[0.03em] uppercase text-azul"></h4>
                            <p className="text-[14px] leading-[24px] xl:text-[17px] xl:leading-[28px] tracking-[0.03em] text-azul xl:mt-0">
                                Machined parts<br></br> Bearing, bushing and nut
                                assembly<br></br>
                                Painting & surface treatment<br></br> Assembly
                                of aircraft
                                <br></br>
                                segments (Airbus C295 & Pilatus PC-12)<br></br>{" "}
                                Tool design & manufacturing<br></br> Full
                                assembly lines
                                <br></br> Assembly jigs<br></br> Test rigs
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
