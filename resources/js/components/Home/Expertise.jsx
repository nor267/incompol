import triangleWhite from "../../../images/icons/triangle-white.svg";
import fourIcons from "../../../images/icons/home/expertise/four-icons.svg";
import fourIconsLeft from "../../../images/icons/home/expertise/four-icons-left.svg";
import fourIconsRight from "../../../images/icons/home/expertise/icon-triangle.svg";
import expertise1 from "../../../images/fake/home/expertise1.jpg";
import expertise2 from "../../../images/fake/home/expertise2.jpg";
import expertise3 from "../../../images/fake/home/expertise3.jpg";

export default function Expertise() {
    return (
        <div className="  pt-5 xl:mt-[80px] bg-white text-white">
            <div className="xl:h-[1220px] gradient-black-blue relative margin-website pb-5 xl:pb-0">
                <img
                    src={triangleWhite}
                    className="h-5 xl:h-auto top-0 left-1/2 -translate-x-1/2 absolute"
                ></img>

                <div className="flex justify-center items-center w-full flex-col text-white pt-8 xl:pt-[140px]">
                    <p className="font-light text-[14px] xl:text-[17px] xl:leading-[22px] tracking-widest uppercase">
                        core business
                    </p>
                    <h1 className="font-eurostile text-[14px] xl:text-[32px] uppercase tracking-[0.20em] xl:leading-[32px] pt-1 xl:pt-[30px]">
                        our Expertise
                    </h1>
                    {/* main circle */}
                    <div className="rounded-full w-[250px] h-[250px] xl:w-[590px] xl:h-[590px] bg-azul xl:mt-[90px] flex justify-center items-center flex-col text-center relative">
                        <img
                            src={fourIcons}
                            className="w-[80px] h-[80px] xl:w-[170px] xl:h-[170px]"
                        ></img>
                        <h1 className=" font-medium uppercase text-[14px] leading-[18px] xl:text-[28px] xl:leading-[36px] tracking-[0.14em] pt-3 xl:pt-[53px]">
                            metal components manufacturing
                        </h1>
                        <p className="text-[12px] leading-[16px] xl:text-[20px] xl:leading-[25px] tracking-[0.03em] font-light w-full max-w-[180px] xl:max-w-[370px] pt-3 xl:pt-[30px]">
                            Design and production of stamped, welded, machined,
                            and assembled metallic components.
                        </p>
                        <div className="bg-laranja w-[200px] h-[200px] xl:w-[272px] xl:h-[272px] rounded-full xl:-right-40 xl:top-0 hidden xl:absolute">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[190px] h-[190px] xl:w-[266px] xl:h-[266px] rounded-full overflow-hidden ">
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
                    <div className="bg-laranja w-[200px] h-[200px] xl:w-[223px] xl:h-[223px] rounded-full xl:absolute xl:left-28 xl:bottom-[360px] mt-6 x:mt-0">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className=" w-[195px] h-[195px] xl:w-[218px] xl:h-[218px] rounded-full overflow-hidden ">
                                <img
                                    src={expertise2}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:absolute xl:bottom-20 xl:left-[290px]">
                        <div className="flex justify-center items-center flex-col">
                            <img
                                src={fourIconsLeft}
                                className="xl:w-[121px] xl:h-[121px] hidden xl:block"
                            ></img>
                            <h1 className=" font-medium uppercase text-[14px] leading-[18px] xl:text-[20px] xl:leading-[27px] tracking-[0.14em] pt-5 xl:pt-[53px] text-center">
                                Multi-Sector
                                <br className="hidden xl:block"></br> Supply
                            </h1>
                            <p className="text-[14px] leading-[18px] xl:text-[17px] xl:leading-[26px] tracking-[0.03em] font-light w-full xl:max-w-[315px] pt-5 xl:pt-[30px] text-center">
                                Solutions for the automotive, aerospace,
                                electrical, and household appliance industries.
                            </p>
                        </div>
                    </div>

                    {/* right */}
                    <div className="bg-laranja w-[200px] h-[200px] xl:w-[223px] xl:h-[223px] rounded-full xl:absolute xl:right-28 xl:bottom-[360px] mt-6 x:mt-0">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-[195px] h-[195px]  xl:w-[218px] xl:h-[218px] rounded-full overflow-hidden ">
                                <img
                                    src={expertise3}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:absolute xl:bottom-20 xl:right-[290px]">
                        <div className="flex justify-center items-center flex-col">
                            <img
                                src={fourIconsRight}
                                className="xl:w-[121px] xl:h-[121px] hidden xl:block"
                            ></img>
                            <h1 className="font-medium uppercase text-[14px] leading-[18px] xl:text-[20px] xl:leading-[27px] tracking-[0.14em]  pt-4 xl:pt-[53px] text-center">
                                Engineering & Tooling<br></br> Development
                            </h1>
                            <p className=" text-[14px] leading-[18px] xl:text-[17px] xl:leading-[26px] tracking-[0.03em] font-light w-full xl:max-w-[315px] pt-4 xl:pt-[30px] text-center">
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
