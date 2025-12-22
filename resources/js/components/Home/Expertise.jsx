import triangleWhite from "../../../images/icons/triangle-white.svg";
import fourIcons from "../../../images/icons/home/expertise/four-icons.svg";
import fourIconsLeft from "../../../images/icons/home/expertise/four-icons-left.svg";
import fourIconsRight from "../../../images/icons/home/expertise/icon-triangle.svg";
import expertise1 from "../../../images/fake/home/expertise1.jpg";
import expertise2 from "../../../images/fake/home/expertise2.jpg";
import expertise3 from "../../../images/fake/home/expertise3.jpg";

export default function Expertise() {
    return (
        <div className="xl:pt-[80px] bg-white text-white">
            <div className="xl:h-[1220px] gradient-black-blue relative">
                <img
                    src={triangleWhite}
                    className="top-0 left-1/2 -translate-x-1/2 absolute"
                ></img>

                <div className="flex justify-center items-center w-full flex-col text-white xl:pt-[140px]">
                    <p className="font-light xl:text-[17px] xl:leading-[22px] tracking-widest uppercase">
                        core business
                    </p>
                    <h1 className="font-eurostile xl:text-[32px] uppercase tracking-[0.20em] xl:leading-[32px] xl:pt-[30px]">
                        our Expertise
                    </h1>
                    {/* main circle */}
                    <div className="rounded-full xl:w-[590px] xl:h-[590px] bg-azul xl:mt-[90px] flex justify-center items-center flex-col text-center relative">
                        <img
                            src={fourIcons}
                            className="xl:w-[170px] xl:h-[170px]"
                        ></img>
                        <h1 className=" font-medium uppercase xl:text-[28px] xl:leading-[36px] tracking-[0.14em] xl:pt-[53px]">
                            metal components manufacturing
                        </h1>
                        <p className="xl:text-[20px] xl:leading-[25px] tracking-[0.03em] font-light w-full xl:max-w-[370px] xl:pt-[30px]">
                            Design and production of stamped, welded, machined,
                            and assembled metallic components.
                        </p>
                        <div className="bg-laranja xl:w-[272px] xl:h-[272px] rounded-full absolute -right-40 top-0 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div class="xl:w-[266px] xl:h-[266px] rounded-full overflow-hidden ">
                                    <img
                                        src={expertise1}
                                        alt=""
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* left */}
                    <div className="bg-laranja xl:w-[223px] xl:h-[223px] rounded-full absolute left-28 bottom-[360px] ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div class="xl:w-[218px] xl:h-[218px] rounded-full overflow-hidden ">
                                <img
                                    src={expertise2}
                                    alt=""
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-20 left-[290px]">
                        <div className="flex justify-center items-center flex-col">
                            <img
                                src={fourIconsLeft}
                                className="xl:w-[121px] xl:h-[121px]"
                            ></img>
                            <h1 className=" font-medium uppercase xl:text-[20px] xl:leading-[27px] tracking-[0.14em] xl:pt-[53px] text-center">
                                Multi-Sector<br></br> Supply
                            </h1>
                            <p className="xl:text-[17px] xl:leading-[26px] tracking-[0.03em] font-light w-full xl:max-w-[315px] xl:pt-[30px] text-center">
                                Solutions for the automotive, aerospace,
                                electrical, and household appliance industries.
                            </p>
                        </div>
                    </div>

                    {/* right */}
                    <div className="bg-laranja xl:w-[223px] xl:h-[223px] rounded-full absolute right-28 bottom-[360px] ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div class="xl:w-[218px] xl:h-[218px] rounded-full overflow-hidden ">
                                <img
                                    src={expertise3}
                                    alt=""
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-20 right-[290px]">
                        <div className="flex justify-center items-center flex-col">
                            <img
                                src={fourIconsRight}
                                className="xl:w-[121px] xl:h-[121px]"
                            ></img>
                            <h1 className=" font-medium uppercase xl:text-[20px] xl:leading-[27px] tracking-[0.14em] xl:pt-[53px] text-center">
                                Engineering & Tooling<br></br> Development
                            </h1>
                            <p className="xl:text-[17px] xl:leading-[26px] tracking-[0.03em] font-light w-full xl:max-w-[315px] xl:pt-[30px] text-center">
                                Custom tooling, process engineering, and
                                precision machining to meet complex industrial
                                demands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
