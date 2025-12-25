//components
import Type from "./Type";

//fake images
import capacity1 from "../../../../images/fake/expertise/capacity1.jpg";
import capacity2 from "../../../../images/fake/expertise/capacity2.jpg";
import SecondTitle from "../../Layout/SecondTitle";

export default function Capacity() {
    return (
        <>
            <SecondTitle
                slogan="Our production capabilities in action"
                title="Industrial Capacity <br> & Equipment"
                className="xl:mt-32 text-azul"
            />

            <div className="text-azul flex justify-between xl:px-[230px] xl:pt-[140px] xl:pb-18">
                <div>
                    <p className="xl:text-[17px] xl:leading-[26px] tracking-[0.03em] xl:max-w-[465px] font-light">
                        Our production facilities integrate a wide range of
                        advanced equipment and processes, enabling us to handle
                        both high-volume manufacturing and precision components
                        with the same level of excellence.
                    </p>
                    <div className="relative xl:mt-36">
                        <div className="xl:ml-10">
                            <img
                                src={capacity1}
                                className="xl:w-[740px] xl:h-[370px]"
                            ></img>
                        </div>
                        <div className="bg-laranja xl:w-[300px] xl:h-[300px] rounded-full absolute -right-40 bottom-70 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className="xl:w-[295px] xl:h-[295px] rounded-full overflow-hidden ">
                                    <img
                                        src={capacity2}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:gap-3">
                    <h1 className="font-eurostile xl:text-[18px] xl:leading-[26px] tracking-[0.14em] uppercase font-bold xl:mb-13">
                        equipments
                    </h1>
                    <Type text="Hydraulic Press double effect" />
                    <Type text="Mechanical Presses" />
                    <Type text="Welding Robots" />
                    <Type text="Automatic Welding Machines" />
                    <Type text="Welding Presses" />
                    <Type text="Vibrators" />
                    <Type text="Parts Washing Machine / Ultrasounds" />
                    <Type text="Bend/Cuttting-Wire CNC Machine" />
                    <Type text="Automatic Lathes" />
                    <Type text="CNC Turning Lathe 5 Axis" />
                    <Type text="CNC Swisstype Automatic Lathes 8 Axis" />
                </div>
            </div>
        </>
    );
}
