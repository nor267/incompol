//fake images
import quality1 from "../../../images/fake/expertise/quality1.jpg";
import quality2 from "../../../images/fake/expertise/quality2.jpg";
import certification1 from "../../../images/fake/aboutus/certification1.png";
import certification2 from "../../../images/fake/aboutus/certification2.png";
import certification3 from "../../../images/fake/aboutus/certification3.png";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Certification() {
    return (
        <>
            <SecondTitle
                className="pt-15 xl:pt-20 text-azul"
                slogan="Certified processes you can rely on"
                title="Quality & Certifications"
            />
            <div className="flex flex-col-reverse xl:flex-row  pt-8 xl:pt-36 xl:pb-22 xl:gap-68 justify-center items-center">
                <div className="relative">
                    <img
                        src={quality1}
                        className="xl:w-[570px] xl:h-[375px] object-cover"
                    ></img>
                    <div className="bg-laranja w-[150px] h-[150px] xl:w-[287px] xl:h-[287px] rounded-full absolute -right-10 xl:-right-36 -bottom-15 xl:-bottom-20 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className=" w-[148px] h-[148px] xl:w-[282px] xl:h-[282px] rounded-full overflow-hidden ">
                                <img
                                    src={quality2}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-base text-azul xl:max-w-[465px] px-8 xl:px-0">
                    <p>
                        At <strong>INCOMPOL</strong>, quality is built into
                        every stage of production. Our Quality Management System
                        has been continuously certified since 1997, evolving to
                        meet the highest international standards in the
                        industry.
                        <br></br>
                        <br></br>
                        We are currently certified under:<br></br>
                        <br></br> IATF 16949 – International automotive quality
                        management standard<br></br>
                        <br></br> In addition, <strong>INCOMPOL</strong> has
                        been awarded the <strong>EcoVadis Bronze Medal,</strong>
                        reflecting our commitment to responsible business
                        practices and corporate social responsibility.<br></br>
                        <br></br> This structured approach ensures precision,
                        reliability, and consistent performance for our
                        customers.
                    </p>
                    <div className="flex flex-col xl:flex-row xl:gap-4 items-center pt-5 xl:pt-8 pb-5 xl:pb-0">
                        <img
                            src={certification1}
                            className="max-w-40 xl:max-w-[134px] object-cover xl:max-h-[55px]"
                        ></img>
                        <img
                            src={certification2}
                            className="max-w-40 xl:max-w-[134px] object-cover xl:max-h-[55px]"
                        ></img>
                        <img
                            src={certification3}
                            className="max-w-40 xl:max-w-[134px] object-cover xl:max-h-[55px]"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
}
