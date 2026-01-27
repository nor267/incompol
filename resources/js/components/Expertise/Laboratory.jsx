//fake images
import laboratory1 from "../../../images/fake/expertise/laboratory1.jpg";
import laboratory2 from "../../../images/fake/expertise/laboratory2.jpg";
import shapeFuture from "../../../images/fake/expertise/shapefuture.jpg";

//components
import SecondTitle from "../Layout/SecondTitle";
import ShapeFuture from "../Layout/ShapeFuture";

export default function Laboratory() {
    return (
        <>
            <div className="bg-white relative">
                <SecondTitle
                    slogan="Precision assured at every step"
                    title="LABORATORY"
                    className="text-azul pt-15 xl:pt-20"
                />
                <div className="flex flex-col-reverse xl:flex-row pt-5 xl:pt-36 pb-15 xl:pb-[150px] xl:gap-68 justify-center items-center">
                    <div className="relative">
                        <img
                            src={laboratory1}
                            className="w-full xl:w-[570px] xl:h-[375px] object-cover pt-10 xl:pt-0"
                        ></img>
                        <div className="bg-laranja h-[125px] w-[125px] xl:w-[287px] xl:h-[287px] rounded-full absolute -left-10 -bottom-10  xl:-right-36 xl:-bottom-20 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className="w-[120px] h-[120px] xl:w-[282px] xl:h-[282px] rounded-full overflow-hidden ">
                                    <img
                                        src={laboratory2}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-base text-azul xl:max-w-[465px] px-8 lg:px-[100px] xl:px-0">
                        <p>
                            Our fully equipped
                            <strong> quality laboratory</strong> ensures that
                            each component meets the highest standards of
                            dimensional accuracy and performance.<br></br>
                            <br></br> Using advanced measurement systems and
                            rigorous testing protocols, we validate product
                            conformity throughout the production cycle to
                            support our commitment to excellence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
