import arrowWhite from "../../../images/icons/triangle-white.svg";
import arrowGrey from "../../../images/icons/triangle-grey.svg";

//fake images
import certification1 from "../../../images/fake/aboutus/certification1.png";
import certification2 from "../../../images/fake/aboutus/certification2.png";
import certification3 from "../../../images/fake/aboutus/certification3.png";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Certifications() {
    return (
        <div className="bg-light-grey pt-10 pb-80 xl:pt-38 xl:pb-52">
            <div className="text-center text-azul flex justify-center items-center flex-col">
                <SecondTitle
                    slogan="Quality. Responsibility. Trust."
                    title="Certifications<br> and Recognitions"
                    className="text-azul"
                />
            </div>
            <div className="pt-10 xl:pt-38 flex flex-col xl:flex-row margin-website justify-center items-center">
                <div className="bg-white text-azul xl:h-[720px] certification-box ">
                    <h1 className="font-eurostile text-[18px] xl:text-[32px] text-center uppercase pt-5 xl:pt-24">
                        ENVIRONMENT
                    </h1>
                    <p className="text-base w-full xl:max-w-[424px] pt-5 xl:pt-10">
                        ISO 14001 certified.<br></br>
                        <br></br>
                        We operate responsibly, protecting the environment
                        through continuous improvement and sustainable
                        practices.
                    </p>
                    <img
                        src={certification1}
                        className="w-40 xl:hidden pt-2 pb-3"
                    ></img>

                    <div className="xl:w-[340px] bg-azul xl:h-[314px] xl:absolute xl:-bottom-10 xl:left-1/2 xl:-translate-x-1/2 hidden xl:block">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowWhite}
                                className="xl:absolute top-0 left-1/2 -translate-x-1/2"
                            ></img>
                            <img
                                src={arrowGrey}
                                className="xl:absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={certification1}
                                className="xl:absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="bg-azul text-white xl:h-[810px] certification-box ">
                    <h1 className="font-eurostile text-white text-[18px] xl:text-[32px] text-center uppercase pt-5 xl:pt-20 ">
                        Quality
                    </h1>
                    <p className="text-base w-full xl:max-w-[424px] pt-5 xl:pt-10">
                        Certified under IATF 16949, we ensure consistent
                        precision and reliability for demanding industries.
                        <br></br>
                        <br></br>
                        Backed by strict process control, continuous
                        improvement, and full traceability, our production meets
                        the highest international quality and safety standards,
                        even in the most complex applications.
                    </p>
                    <img
                        src={certification2}
                        className="w-40 xl:hidden pt-2 pb-3"
                    ></img>
                    <div className="xl:w-[340px] bg-[#94999E] xl:h-[314px] xl:absolute -bottom-10 left-1/2 -translate-x-1/2 xl:block hidden">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowGrey}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={certification2}
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-azul xl:h-[720px] certification-box">
                    <h1 className="font-eurostile text-[18px] xl:text-[32px] text-center uppercase pt-5 xl:pt-24 xl:leading-[32px]">
                        ESG
                    </h1>
                    <p className="text-[14px] xl:leading-[19px] tracking-[0.03em] text-center">
                        (Environmental, Social and Governance)
                    </p>
                    <p className="text-base w-full xl:max-w-[424px] pt-5 xl:pt-10">
                        Commitment to ethics, people, and the planet has been
                        recognised with the
                        <strong>EcoVadis Bronze Medal</strong> for
                        Environmental, Social and Governance performance.
                        <br></br>
                        <br></br>A step forward in building a more sustainable
                        industry.
                    </p>
                    <img
                        src={certification3}
                        className="w-40 xl:hidden pt-2 pb-3"
                    ></img>
                    <div className="xl:w-[340px] bg-azul xl:h-[314px] xl:block hidden xl:absolute -bottom-10 left-1/2 -translate-x-1/2 ">
                        <div className="relative w-full h-full">
                            <img
                                src={arrowWhite}
                                className="absolute top-0 left-1/2 -translate-x-1/2"
                            ></img>
                            <img
                                src={arrowGrey}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180"
                            ></img>
                            <img
                                src={certification3}
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
