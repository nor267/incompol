//fake images
import eolica1 from "../../../images/fake/sustainability/eolica1.jpg";
import eolica2 from "../../../images/fake/sustainability/eolica2.jpg";
import certification from "../../../images/fake/aboutus/certification1.png";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Commitment() {
    return (
        <>
            <SecondTitle
                slogan="Towards Continuous Improvement"
                title="Our Environmental <br>Commitment"
                className="text-azul xl:pt-32"
            />
            <div className="flex justify-center items-center xl:gap-29 xl:mt-32 xl:mb-52">
                <div className="relative">
                    <img src={eolica1}></img>
                    <div className="bg-laranja xl:w-[399px] xl:h-[399px] rounded-full absolute -left-40 -top-40 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div class="xl:w-[395px] xl:h-[395px] rounded-full overflow-hidden ">
                                <img
                                    src={eolica2}
                                    alt=""
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <img
                        src={certification}
                        className="absolute -left-40 top-70"
                    ></img>
                </div>
                <div className="xl:max-w-[545px]">
                    <p className="text-base text-azul">
                        We integrate environmental management into every level
                        of our operations — aligned with the principles of Total
                        Quality and certified under the{" "}
                        <span className="text-laranja">ISO 14001</span>{" "}
                        standard.
                        <br></br>
                        <br></br>
                        Every day, we strive to:
                    </p>
                    <p className="font-bold xl:text-[19px] xl:leading-[26px] text-azul xl:pt-6">
                        Strictly comply with environmental laws and regulations;
                    </p>
                    <p className="font-bold xl:text-[19px] xl:leading-[26px] text-azul xl:pt-4">
                        Protect the environment by preventing pollution and
                        minimizing negative impacts;
                    </p>
                    <p className="font-bold xl:text-[19px] xl:leading-[26px] text-azul xl:pt-4">
                        Invest in sustainable technologies and continuous
                        improvement;
                    </p>
                    <p className="font-bold xl:text-[19px] xl:leading-[26px] text-azul xl:pt-4">
                        Reduce energy consumption, CO₂ emissions, and waste;
                    </p>
                    <p className="font-bold xl:text-[19px] xl:leading-[26px] text-azul xl:pt-4">
                        Encourage open communication and environmental awareness
                        among employees and partners.
                    </p>
                    <h1 className="font-medium xl:text-[24px] xl:leading-[28px] tracking-[0.03em] text-azul uppercase xl:pt-14">
                        “Sustainability means shaping progress — without
                        compromising the world we build for.”
                    </h1>
                </div>
            </div>
        </>
    );
}
