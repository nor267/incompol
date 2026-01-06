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
import Technology from "./Technology";
import TechnologyRight from "./TecnologyRight";

export default function Technologies() {
    return (
        <>
            <div className="text-center text-azul mt-15 xl:mt-38 flex flex-col justify-center items-center">
                <SecondTitle
                    slogan="Smart Industrial Solutions"
                    title="Technologies"
                    className="text-azul"
                />
                <p className="text-base mt-10 xl:mt-18 xl:max-w-[450px]">
                    A comprehensive set of manufacturing capabilities supporting
                    every stage of production.
                </p>
            </div>
            <div>
                <Technology
                    image={expertise1}
                    title="Stamping"
                    slogan=""
                    text="Progressive mechanical stamping up  to
                                800 ton
                                <br>
                                Hydraulic stamping up to 350 ton
                                <br> In-die bushing insertion
                                <br> In-die tapping"
                    className="expertise-container"
                />
                <TechnologyRight
                    image={expertise2}
                    title="MACHINING"
                    slogan="Multi-Operations:"
                    text="Milling Parts up to 5 axis"
                    className="expertise-container justify-end! flex-col-reverse! xl:flex-row!"
                />
                <Technology
                    image={expertise3}
                    title="Assembling"
                    slogan=""
                    text="Full & semi-automated assembling cells<br>
                                Manual assembling cells"
                    className="expertise-container"
                />
                <TechnologyRight
                    image={expertise4}
                    title="Welding"
                    slogan=""
                    text="MIG/MAG<br> Resistance welding<br>
                                Customized automated welding systems"
                    className="expertise-container justify-end! flex-col-reverse! xl:flex-row!"
                />
                <Technology
                    image={expertise5}
                    title="TURNING"
                    slogan="Multi-Operations:"
                    text="Turned Parts up to 8 axis<br>
                                Simple Turned Parts"
                    className="expertise-container"
                />
            </div>
            <Capacity />
        </>
    );
}
