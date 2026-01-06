//fake images
import market1 from "../../../images/fake/aboutus/market1.jpg";
import market2 from "../../../images/fake/aboutus/market2.jpg";
import market3 from "../../../images/fake/aboutus/market3.jpg";
import Footer from "../Layout/Footer";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Form from "./Form";
import Hiring from "./Hiring";
import Jobs from "./Jobs/Jobs";
import Transparency from "./Transparency";

export default function People() {
    return (
        <>
            <NavbarPages />

            <Title
                title="People"
                slogan="Talent a tour core"
                text="We believe that excellence starts with talent, commitment, and teamwork. By investing in our people, we build strong teams capable of delivering quality, precision, and long-term value for our partners worldwide."
            />
            <div className="bg-azul xl:h-[579px] flex flex-col xl:flex-row text-white mt-15 xl:mt-40">
                <div className="flex w-full">
                    <img
                        src={market1}
                        className="w-full max-w-[135px] xl:max-w-[340px] object-cover"
                    ></img>
                    <img
                        src={market2}
                        className="w-full max-w-[135px] xl:max-w-[340px] object-cover"
                    ></img>
                    <img
                        src={market3}
                        className="w-full max-w-[135px] xl:max-w-[340px] object-cover"
                    ></img>
                </div>
                <div className="pb-5 xl:pb-0 pt-5 pl-8 xl:pl-[130px] xl:pt-[150px]">
                    <p className="text-[15px] xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                        Our Human Resources
                    </p>
                    <h1 className="font-eurostile text-[16px] pt-2 xl:text-[32px] xl:leading-[32px] tracking-[0.14em] font-bold uppercase xl:max-w-[600px] xl:pt-7">
                        People at the core of excellence
                    </h1>
                    <div className="flex flex-col xl:flex-row items-start pt-6 xl:pt-28 xl:gap-28">
                        <div className="flex xl:flex-col justify-center items-center gap-8 xl:gap-0">
                            <h1 className="w-10 xl:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.05em]">
                                120
                            </h1>
                            <p className="xl:text-[18px] xl:leading-[24px] font-medium uppercase">
                                Employees
                            </p>
                        </div>
                        <div className="flex xl:flex-col justify-center items-center gap-8 xl:gap-0">
                            <h1 className="w-10 xl:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]">
                                12
                            </h1>
                            <p className="xl:text-[18px] xl:leading-[24px] font-medium uppercase">
                                Engineers
                            </p>
                        </div>
                        <div className="flex xl:flex-col justify-center items-center gap-8 xl:gap-0">
                            <h1 className="w-10 xl:w-auto text-laranja font-bold font-eurostile text-[18px] leading-[18px] xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]">
                                15
                            </h1>
                            <p className="xl:text-[18px] xl:leading-[24px] font-medium uppercase">
                                Specialized <br></br>technicians
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Hiring />
            <Jobs />
            <Form />
            <Transparency />
            <Footer />
        </>
    );
}
