//icons
import triangleWhite from "../../../../images/icons/triangle-white.svg";

//fake images
import expertise1 from "../../../../images/fake/expertise/expertise1.jpg";
import expertise2 from "../../../../images/fake/expertise/expertise2.jpg";
import expertise3 from "../../../../images/fake/expertise/expertise3.jpg";
import expertise4 from "../../../../images/fake/expertise/expertise4.jpg";
import expertise5 from "../../../../images/fake/expertise/expertise5.jpg";
import Capacity from "./Capacity";
import SecondTitle from "../../Layout/SecondTitle";

export default function Technologies() {
    return (
        <>
            <div className="text-center text-azul xl:mt-38 flex flex-col justify-center items-center">
                <SecondTitle
                    slogan="Smart Industrial Solutions"
                    title="Technologies"
                    className="text-azul"
                />
                <p className="text-base xl:mt-18 xl:max-w-[450px]">
                    A comprehensive set of manufacturing capabilities supporting
                    every stage of production.
                </p>
            </div>
            <div>
                <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px]">
                    <div className="xl:w-[1228px]  relative h-full">
                        <img src={expertise1}></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                    <div className="flex items-center xl:gap-26">
                        <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            Stamping
                        </h1>
                        <div className="flex flex-col">
                            <h4 className="text-[20px] font-semibold leading-[24px] tracking-[0.03em] uppercase text-azul"></h4>
                            <p className="text-base text-azul xl:mt-[37px]">
                                Progressive mechanical stamping up<br></br> to
                                800 ton
                                <br></br>
                                Hydraulic stamping up to 350 ton
                                <br></br> In-die bushing insertion
                                <br></br> In-die tapping
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px] justify-end">
                    <div className="flex items-center xl:gap-26">
                        <div className="flex flex-col">
                            <p className="text-base text-azul xl:mt-0 text-right">
                                <strong>Multi-Operations:</strong>
                                <br></br> Milling Parts up to 5 axis
                            </p>
                        </div>
                        <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            MACHINING
                        </h1>
                    </div>
                    <div className="xl:w-[1228px]  relative h-full">
                        <img
                            src={expertise2}
                            className="w-full object-cover"
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                </div>
                <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px]">
                    <div className="xl:w-[1228px]  relative h-full">
                        <img src={expertise3}></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                    <div className="flex items-center xl:gap-26">
                        <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            Assembling
                        </h1>
                        <div className="flex flex-col">
                            <p className="text-base text-azul xl:mt-[37px]">
                                Full & semi-automated assembling cells<br></br>
                                Manual assembling cells
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px] justify-end">
                    <div className="flex items-center xl:gap-26">
                        <div className="flex flex-col">
                            <p className="text-base text-azul xl:mt-0 text-right">
                                MIG/MAG<br></br> Resistance welding<br></br>
                                Customized automated welding systems
                            </p>
                        </div>
                        <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            Welding
                        </h1>
                    </div>
                    <div className="xl:w-[1228px]  relative h-full">
                        <img
                            src={expertise4}
                            className="w-full object-cover"
                        ></img>
                        <img
                            src={triangleWhite}
                            className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                </div>
                <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px]">
                    <div className="xl:w-[1228px]  relative h-full">
                        <img src={expertise5}></img>
                        <img
                            src={triangleWhite}
                            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 xl:w-[58px] xl:h-[50px]"
                        ></img>
                    </div>
                    <div className="flex items-center xl:gap-26">
                        <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                            TURNING
                        </h1>
                        <div className="flex flex-col">
                            <p className="text-base text-azul xl:mt-[37px]">
                                <strong>Multi-Operations:</strong>
                                <br></br>Turned Parts up to 8 axis<br></br>
                                Simple Turned Parts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Capacity />
        </>
    );
}
