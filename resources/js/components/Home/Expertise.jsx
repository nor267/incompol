import { motion } from "framer-motion";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import fourIcons from "../../../images/icons/home/expertise/four-icons.svg";
import fourIconsLeft from "../../../images/icons/home/expertise/four-icons-left.svg";
import fourIconsRight from "../../../images/icons/home/expertise/icon-triangle.svg";

//fake images
import expertise1 from "../../../images/fake/home/expertise1.jpg";
import expertise2 from "../../../images/fake/home/expertise2.jpg";
import expertise3 from "../../../images/fake/home/expertise3.jpg";

export default function Expertise() {
    return (
        <div className="pt-10 xl:mt-[80px] bg-white text-white">
            <div className="xl:h-[1480px] gradient-black-blue relative margin-website pb-15 xl:pb-0">
                <img
                    src={triangleWhite}
                    className="h-8 xl:h-auto -top-1 left-1/2 -translate-x-1/2 absolute"
                ></img>

                <div className="flex justify-center items-center w-full flex-col text-white pt-15 xl:pt-[140px]">
                    <p className="font-light text-[14px] xl:text-[17px] xl:leading-[22px] tracking-widest uppercase">
                        core business
                    </p>
                    <h1 className="font-eurostile text-[14px] xl:text-[32px] uppercase tracking-[0.20em] xl:leading-[32px] pt-1 xl:pt-[30px]">
                        our Expertise
                    </h1>
                    {/* main circle */}
                    <div className="rounded-full w-[250px] h-[250px] xl:w-[590px] xl:h-[590px] bg-azul mt-10 xl:mt-[90px] flex justify-center items-center flex-col text-center relative">
                        <img
                            src={fourIcons}
                            className="w-[80px] h-[80px] xl:w-[170px] xl:h-[170px]"
                        ></img>
                        <h1 className=" font-medium uppercase text-[14px] leading-[18px] xl:text-[28px] xl:leading-[36px] tracking-[0.14em] pt-3 xl:pt-[53px]">
                            metal components manufacturing
                        </h1>
                        <p className="text-[12px] leading-[16px] xl:text-[20px] xl:leading-[25px] tracking-[0.03em] font-light w-full max-w-[180px] xl:max-w-[370px] pt-3 xl:pt-[30px]">
                            Design and production of stamped, welded, machined,
                            and assembled metallic components.
                        </p>
                        <div className="bg-laranja w-[200px] h-[200px] xl:w-[394px] xl:h-[394px] rounded-full xl:-right-60 xl:-top-20 hidden xl:absolute xl:block">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[190px] h-[190px] xl:w-[388px] xl:h-[388px] rounded-full overflow-hidden ">
                                    <img
                                        src={expertise1}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* left */}
                    <div className=" block xl:absolute xl:left-28 xl:bottom-[460px] 4xl:left-[250px]  mt-6 xl:mt-0">
                        <motion.div
                            initial={{ x: -250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="bg-laranja w-[200px] h-[200px] xl:w-[309px] xl:h-[309px] rounded-full ">
                                <div className="flex justify-center items-center w-full h-full">
                                    <div className=" w-[195px] h-[195px] xl:w-[304px] xl:h-[304px] rounded-full overflow-hidden ">
                                        <img
                                            src={expertise2}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="xl:absolute xl:bottom-40 xl:left-[350px] 4xl:left-[550px]">
                        <motion.div
                            initial={{ x: -250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="flex justify-center items-center flex-col">
                                <img
                                    src={fourIconsLeft}
                                    className="xl:w-[121px] xl:h-[121px] hidden xl:block"
                                ></img>
                                <h1 className=" font-medium uppercase text-[14px] leading-[18px] xl:text-[20px] xl:leading-[27px] tracking-[0.14em] pt-15 xl:pt-[53px] text-center">
                                    Multi-Sector
                                    <br className="hidden xl:block"></br> Supply
                                </h1>
                                <p className="text-[14px] leading-[18px] xl:text-[17px] xl:leading-[26px] tracking-[0.03em] font-light w-full xl:max-w-[315px] pt-5 xl:pt-[30px] text-center">
                                    Solutions for the automotive, aerospace,
                                    electrical, and household appliance
                                    industries.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* right */}
                    <div className="xl:absolute xl:right-28 xl:bottom-[460px] 4xl:right-[250px] mt-6 xl:mt-0">
                        <motion.div
                            initial={{ x: 250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="bg-laranja w-[200px] h-[200px] xl:w-[309px] xl:h-[309px] rounded-full ">
                                <div className="flex justify-center items-center w-full h-full">
                                    <div className="w-[195px] h-[195px]  xl:w-[304px] xl:h-[304px] rounded-full overflow-hidden ">
                                        <img
                                            src={expertise3}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="xl:absolute xl:bottom-40 xl:right-[350px] 4xl:right-[550px]">
                        <motion.div
                            initial={{ x: 250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="flex justify-center items-center flex-col">
                                <img
                                    src={fourIconsRight}
                                    className="xl:w-[121px] xl:h-[121px] hidden xl:block"
                                ></img>
                                <h1 className="font-medium uppercase text-[14px] leading-[18px] xl:text-[20px] xl:leading-[27px] tracking-[0.14em]  pt-15 xl:pt-[53px] text-center">
                                    Engineering & Tooling<br></br> Development
                                </h1>
                                <p className=" text-[14px] leading-[18px] xl:text-[17px] xl:leading-[26px] tracking-[0.03em] font-light w-full xl:max-w-[315px] pt-4 xl:pt-[30px] text-center">
                                    Custom tooling, process engineering, and
                                    precision machining to meet complex
                                    industrial demands.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
