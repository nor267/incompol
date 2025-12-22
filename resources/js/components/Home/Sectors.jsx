import sector1 from "../../../images/fake/home/sector1.jpg";
import sector2 from "../../../images/fake/home/sector2.jpg";
import sector3 from "../../../images/fake/home/sector3.png";
import triangleWhite from "../../../images/icons/triangle-white.svg";

export default function Sectors() {
    return (
        <div>
            <div className="text-azul text-center xl:pt-[204px]">
                <p className="uppercase xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                    product lines
                </p>
                <h1 className="uppercase font-eurostile xl:text-[32px] xl:leading-[32px] tracking-[0.14em] font-semibold xl:pt-[28px] ">
                    main sectors
                </h1>
            </div>
            <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px]">
                <div className="xl:w-[1228px]  relative h-full">
                    <img src={sector1}></img>
                    <img
                        src={triangleWhite}
                        className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 xl:w-[58px] xl:h-[50px]"
                    ></img>
                </div>
                <div className="flex items-center xl:gap-26">
                    <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                        automotive
                    </h1>
                    <div className="flex flex-col">
                        <h4 className="text-[20px] font-semibold leading-[24px] tracking-[0.03em] uppercase text-azul">
                            Single parts and <br></br>sub-assemblies for:
                        </h4>
                        <p className="text-[17px] leading-[28px] tracking-[0.03em] text-azul xl:mt-[37px]">
                            Body & trim<br></br>
                            Exhaust systems<br></br>
                            Seats Steering wheels<br></br>
                            Engine & damper mount systemsa <br></br>
                            Glasses – support and decorative parts<br></br>
                            Airbag systems<br></br> Infotainment
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px] justify-end">
                <div className="flex items-center xl:gap-26">
                    <div className="flex flex-col">
                        <h4 className="text-[20px] font-semibold leading-[24px] tracking-[0.03em] uppercase text-azul"></h4>
                        <p className="text-[17px] leading-[28px] tracking-[0.03em] text-azul xl:mt-0 text-right">
                            Heating Plates<br></br> Clamps<br></br> Rings
                            <br></br> Gas manifolds<br></br>
                            Exhaust Ducts<br></br> Boxes<br></br> Brackets
                            <br></br> Assemblies<br></br> Aluminium Frames
                            <br></br> Structural parts
                        </p>
                    </div>
                    <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                        HOME<br></br> APPLIANCE
                    </h1>
                </div>
                <div className="xl:w-[1228px]  relative h-full">
                    <img src={sector2} className="w-full object-cover"></img>
                    <img
                        src={triangleWhite}
                        className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 xl:w-[58px] xl:h-[50px]"
                    ></img>
                </div>
            </div>
            <div className="xl:max-h-[561px] flex xl:gap-24 items-center xl:mt-[190px]">
                <div className="xl:w-[1228px]  relative h-full">
                    <img src={sector3}></img>
                    <img
                        src={triangleWhite}
                        className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 xl:w-[58px] xl:h-[50px]"
                    ></img>
                </div>
                <div className="flex items-center xl:gap-26">
                    <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] [writing-mode:vertical-rl] rotate-180 font-semibold text-center">
                        AEROSPACE
                    </h1>
                    <div className="flex flex-col">
                        <h4 className="text-[20px] font-semibold leading-[24px] tracking-[0.03em] uppercase text-azul"></h4>
                        <p className="text-[17px] leading-[28px] tracking-[0.03em] text-azul xl:mt-0">
                            Machined parts<br></br> Bearing, bushing and nut
                            assembly<br></br>
                            Painting & surface treatment<br></br> Assembly of
                            aircraft
                            <br></br>
                            segments (Airbus C295 & Pilatus PC-12)<br></br> Tool
                            design & manufacturing<br></br> Full assembly lines
                            <br></br> Assembly jigs<br></br> Test rigs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
