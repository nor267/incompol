//fake images
import eolica1 from "../../../images/fake/sustainability/eolica1.jpg";
import eolica2 from "../../../images/fake/sustainability/eolica2.jpg";
import certification from "../../../images/fake/aboutus/certification1.png";

//components
import SecondTitle from "../Layout/SecondTitle";

//icons
import doubleArrow from "../../../images/icons/sustainability/double-arrow.svg";

export default function Commitment() {
    return (
        <>
            <SecondTitle
                slogan="Towards Continuous Improvement"
                title="Our Environmental <br>Commitment"
                className="text-azul pt-15 xl:pt-32"
            />
            <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-29 mt-8 xl:mt-32 xl:mb-52 px-8 xl:px-0">
                <div className="relative w-full xl:w-auto">
                    <img
                        src={eolica1}
                        className="max-h-[250px] xl:max-h-[728px] xl:max-w-[547px] w-full object-cover"
                    ></img>
                    <div className="bg-laranja w-[100px] h-[100px] xl:w-[399px] xl:h-[399px] rounded-full absolute -left-5 -top-10 xl:-left-40 xl:-top-40 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-[98px] h-[98px] xl:w-[395px] xl:h-[395px] rounded-full overflow-hidden ">
                                <img
                                    src={eolica2}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <img
                        src={certification}
                        className="hidden xl:block xl:absolute xl:-left-40 top-70"
                    ></img>
                </div>
                <div className="xl:max-w-[545px] w-full pt-5 xl:pt-0">
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
                    <div className="flex gap-2 xl:gap-4 items-center">
                        <img src={doubleArrow} className="h-6 xl:h-auto"></img>
                        <p className="font-bold text-[14px] leading-[18px] xl:text-[19px] xl:leading-[26px] text-azul pt-3 xl:pt-6">
                            Strictly comply with environmental laws and
                            regulations;
                        </p>
                    </div>
                    <div className="flex gap-2 xl:gap-4 items-center">
                        <img src={doubleArrow} className="h-6 xl:h-auto"></img>
                        <p className="font-bold text-[14px] leading-[18px] xl:text-[19px] xl:leading-[26px] text-azul pt-3 xl:pt-6">
                            Protect the environment by preventing pollution and
                            minimizing negative impacts;
                        </p>
                    </div>
                    <div className="flex gap-2 xl:gap-4 items-center">
                        <img src={doubleArrow} className="h-6 xl:h-auto"></img>
                        <p className="font-bold text-[14px] leading-[18px] xl:text-[19px] xl:leading-[26px] text-azul pt-3 xl:pt-6">
                            Invest in sustainable technologies and continuous
                            improvement;
                        </p>
                    </div>
                    <div className="flex gap-2 xl:gap-4 items-center">
                        <img src={doubleArrow} className="h-6 xl:h-auto"></img>
                        <p className="font-bold text-[14px] leading-[18px] xl:text-[19px] xl:leading-[26px] text-azul pt-3 xl:pt-6">
                            Reduce energy consumption, CO₂ emissions, and waste;
                        </p>
                    </div>
                    <div className="flex gap-2 xl:gap-4 items-center">
                        <img src={doubleArrow} className="h-6 xl:h-auto"></img>
                        <p className="font-bold text-[14px] leading-[18px] xl:text-[19px] xl:leading-[26px] text-azul pt-3 xl:pt-6">
                            Encourage open communication and environmental
                            awareness among employees and partners.
                        </p>
                    </div>
                    <h1 className="font-medium text-[15px] leading-[20px] xl:text-[24px] xl:leading-[28px] tracking-[0.03em] text-azul uppercase pt-6 xl:pt-14">
                        “Sustainability means shaping progress — without
                        compromising the world we build for.”
                    </h1>
                </div>
                <img
                    src={certification}
                    className="xl:hidden w-50 pt-2 pb-2"
                ></img>
            </div>
        </>
    );
}
