import SecondTitle from "../Layout/SecondTitle";

import recognition from "../../../images/fake/sustainability/recognition.jpg";
import certification from "../../../images/fake/aboutus/certification3.png";

export default function Recognition() {
    return (
        <>
            <SecondTitle
                title="EcoVadis Recognition"
                slogan="Recognised commitment to responsible practices"
                className="text-azul pt-10 xl:pt-48"
            />
            <div className="mt-8 xl:mt-20  xl:mb-64 flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-58 px-8">
                <div>
                    <p className="text-base text-azul xl:max-w-[430px] pt-5 pb-10 xl:pb-0 xl:pt-0">
                        <strong> Incompol </strong>was awarded the EcoVadis
                        Bronze rating, placing the company among the{" "}
                        <strong>
                            top 35% of organisations evaluated worldwide.
                        </strong>
                        <br></br>
                        <br></br> This recognition reflects our ongoing efforts
                        across environmental responsibility, ethical conduct,
                        labour & human rights, and responsible sourcing. It is
                        an important milestone in our continuous journey towards
                        more responsible and transparent business practices.
                    </p>
                </div>
                <div className="relative">
                    <img
                        src={recognition}
                        className="xl:w-[540px] xl:h-[320px] object-cover"
                    ></img>
                    <img
                        src={certification}
                        className="w-25 xl:w-[230px] xl:h-[226px] object-cover absolute bottom-30 left-1/2 -translate-x-1/2 xl:-bottom-20 xl:-left-20"
                    ></img>
                </div>
            </div>
        </>
    );
}
