//fake images
import laboratory1 from "../../../images/fake/expertise/laboratory1.jpg";
import laboratory2 from "../../../images/fake/expertise/laboratory2.jpg";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Laboratory() {
    return (
        <>
            <div className="bg-azul">
                <SecondTitle
                    slogan="Precision assured at every step"
                    title="LABORATORY"
                    className="text-white xl:pt-20"
                />
                <div className="flex margin-website xl:pt-36 xl:pb-22 xl:gap-68 justify-center items-center">
                    <div className="relative">
                        <img
                            src={laboratory1}
                            className="xl:w-[570px] xl:h-[375px] object-cover"
                        ></img>
                        <div className="bg-laranja xl:w-[287px] xl:h-[287px] rounded-full absolute -right-36 -bottom-20 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div class="xl:w-[282px] xl:h-[282px] rounded-full overflow-hidden ">
                                    <img
                                        src={laboratory2}
                                        alt=""
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-base text-white xl:max-w-[465px]">
                        <p>
                            Our fully equipped
                            <strong>quality laboratory</strong> ensures that
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
