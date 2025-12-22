import logo from "../../../images/logo/logo.svg";
import reclamacoes from "../../../images/icons/footer/reclamacoes.svg";

import certification1 from "../../../images/icons/footer/certification1.png";
import certification2 from "../../../images/icons/footer/certification2.png";
import certification3 from "../../../images/icons/footer/certification3.png";

export default function Footer() {
    return (
        <>
            <div className="bg-azul w-full h-full margin-website text-white">
                <div className="xl:pt-[200px] xl:pb-6 flex items-center justify-between">
                    <div>
                        <img src={logo}></img>
                        <h1 className="uppercase font-eurostile xl:text-[28px] xl:leading-[28px] xl:pt-25">
                            we<br></br>create<br></br>solutions.
                        </h1>
                        <div className="flex items-center xl:max-w-[313px] justify-between xl:pt-18">
                            <p className="xl:text-[13px] xl:leading-[22px] font-light">
                                2025 © INCOMPOL
                            </p>
                            <p className="font-courier xl:text-[13px] xl:leading-[22px]">
                                Made by Nor267
                            </p>
                        </div>
                    </div>
                    <div className="flex xl:gap-56">
                        <div className="xl:text-[15px] xl:leading-[25px] tracking-[0.03em] font-light">
                            <p>About Us</p>
                            <p>Expertise</p>
                            <p>Portfolio</p>
                            <p>People</p>
                            <p>Clients</p>
                            <p>Contacts</p>
                        </div>
                        <div className="xl:text-[15px] xl:leading-[25px] tracking-[0.03em] font-light">
                            <p>Terms and Conditions</p>
                            <p>Legal Information</p>
                            <p>Cookie Policy</p>
                            <div className="xl:pt-8">
                                <a className="cursor-pointer ">
                                    <img src={reclamacoes}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-end flex-col">
                        <button className="text-laranja border-3 border-laranja uppercase xl:px-4 rounded-[40px] xl:py-1 xl:max-w-[160px] w-full cursor-pointer">
                            join our team
                        </button>
                        <div className="flex xl:gap-1 xl:pt-18">
                            <img src={certification3}></img>
                            <img src={certification1}></img>
                            <img src={certification2}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-[30px] bg-laranja"></div>
        </>
    );
}
