import arrowWhite from "../../../images/icons/triangle-white.svg";
import arrowGrey from "../../../images/icons/triangle-grey.svg";

import certification1 from "../../../images/fake/aboutus/certification1.png";
import certification2 from "../../../images/fake/aboutus/certification2.png";
import certification3 from "../../../images/fake/aboutus/certification3.png";

export default function Certifications() {
    return (
        <div className="bg-light-grey xl:pt-38 xl:pb-52">
            <div className="text-center text-azul flex justify-center items-center flex-col">
                <p className="xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                    Quality. Responsibility. Trust.
                </p>
                <h1 className="font-eurostile xl:text-[32px] xl:leading-[36px] tracking-[0.14em] font-bold uppercase xl:max-w-[560px] w-full xl:mt-6">
                    Certifications and Recognitions
                </h1>
            </div>
            <div className="xl:pt-38 flex margin-website justify-center items-center">
                <div className="bg-white xl:pt-4 text-azul xl:px-26 xl:h-[720px] relative">
                    <h1 className="font-eurostile xl:text-[32px] text-center uppercase xl:pt-24">
                        ENVIRONMENT
                    </h1>
                    <p className="text-base w-full xl:max-w-[424px] xl:pt-20">
                        ISO 14001 certified.<br></br>
                        <br></br>
                        We operate responsibly, protecting the environment
                        through continuous improvement and sustainable
                        practices.
                    </p>

                    <div className="xl:w-[340px] bg-azul xl:h-[314px] absolute -bottom-10 left-1/2 -translate-x-1/2">
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
                                src={certification1}
                                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="bg-azul xl:pt-4 text-white xl:px-26 xl:h-[810px] relative">
                    <h1 className="font-eurostile text-white xl:text-[32px] text-center uppercase xl:pt-24">
                        Quality
                    </h1>
                    <p className="text-base w-full xl:max-w-[424px] xl:pt-20">
                        Certified under IATF 16949, we ensure consistent
                        precision and reliability for demanding industries.
                        <br></br>
                        <br></br>
                        Backed by strict process control, continuous
                        improvement, and full traceability, our production meets
                        the highest international quality and safety standards,
                        even in the most complex applications.
                    </p>
                    <div className="xl:w-[340px] bg-[#94999E] xl:h-[314px] absolute -bottom-10 left-1/2 -translate-x-1/2">
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
                <div className="bg-white xl:pt-4 text-azul xl:px-26 xl:h-[720px] relative">
                    <h1 className="font-eurostile xl:text-[32px] text-center uppercase xl:pt-24 xl:leading-[32px]">
                        ESG
                    </h1>
                    <p className="xl:text-[14px] xl:leading-[19px] tracking-[0.03em] text-center">
                        (Environmental, Social and Governance)
                    </p>
                    <p className="text-base w-full xl:max-w-[424px] xl:pt-20">
                        Commitment to ethics, people, and the planet has been
                        recognised with the
                        <strong>EcoVadis Bronze Medal</strong> for
                        Environmental, Social and Governance performance.
                        <br></br>
                        <br></br>A step forward in building a more sustainable
                        industry.
                    </p>
                    <div className="xl:w-[340px] bg-azul xl:h-[314px] absolute -bottom-10 left-1/2 -translate-x-1/2">
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
