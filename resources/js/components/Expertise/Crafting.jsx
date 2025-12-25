//fake images
import crafting1 from "../../../images/fake/expertise/crafting1.jpg";
import crafting2 from "../../../images/fake/expertise/crafting2.jpg";
import shapeFuture from "../../../images/fake/expertise/shapefuture.jpg";

//components
import SecondTitle from "../Layout/SecondTitle";
import ShapeFuture from "../Layout/ShapeFuture";

export default function Crafting() {
    return (
        <>
            <SecondTitle
                slogan="Crafting Reliability"
                title="Tooling Design, Manufacturing <br>& Maintenance"
                className="xl:pt-20 text-azul"
            />
            <div className="flex flex-row-reverse margin-website xl:pt-36 xl:pb-22 xl:gap-68 justify-center items-center xl:pb-[920px] relative">
                <div className="relative">
                    <img
                        src={crafting1}
                        className="xl:w-[570px] xl:h-[375px] object-cover"
                    ></img>
                    <div className="bg-laranja xl:w-[287px] xl:h-[287px] rounded-full absolute -left-36 -bottom-20 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div class="xl:w-[282px] xl:h-[282px] rounded-full overflow-hidden ">
                                <img
                                    src={crafting2}
                                    alt=""
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-base text-azul xl:max-w-[465px]">
                    <p>
                        Our engineering team works with clients from concept to
                        production, providing{" "}
                        <strong>
                            design, prototyping, and tooling support
                        </strong>{" "}
                        to ensure optimal manufacturability and performance.
                        <br></br>
                        <br></br> Our integrated approach allows for faster
                        prototyping, optimized production processes, and
                        continuous improvement — guaranteeing results that meet
                        the most demanding industry standards.
                    </p>
                </div>
                <ShapeFuture shapeFuture={shapeFuture} />
            </div>
        </>
    );
}
