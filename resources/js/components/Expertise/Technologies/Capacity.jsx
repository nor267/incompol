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
                className="mt-20 xl:mt-32 text-azul"
            />

            <div className="text-azul flex flex-col lg:flex-row justify-between pt-8 lg:px-[100px] xl:px-[230px] xl:pt-[140px] pb-15 xl:pb-18">
                <div>
                    <p className="text-base lg:max-w-[550px] xl:max-w-[465px] font-light px-8 xl:px-0">
                        Our production facilities integrate a wide range of
                        advanced equipment and processes, enabling us to handle
                        both high-volume manufacturing and precision components
                        with the same level of excellence.
                    </p>
                    <div className="relative mt-15 xl:mt-36 lg:w-[550px]">
                        <div className="xl:ml-10">
                            <img
                                src={capacity1}
                                className="h-[200px] w-full object-cover lg:w-[550px] lg:h-[500px] xl:w-[740px] xl:h-[370px]"
                            ></img>
                        </div>
                        <div className="hidden bg-laranja w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] rounded-full xl:absolute -right-15 bottom-30 xl:-right-40 xl:bottom-70 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className="w-[148px] h-[148px] xl:w-[295px] xl:h-[295px] rounded-full overflow-hidden ">
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
                <div className="flex flex-col gap-1 xl:gap-3 px-8 lg:px-0 pt-10 lg:pt-20 xl:pt-0">
                    <h1 className="text-center lg:text-left font-eurostile text-[16px] xl:text-[18px] xl:leading-[26px] tracking-[0.14em] uppercase font-bold mb-5 xl:mb-10">
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
