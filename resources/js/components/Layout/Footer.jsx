import logo from "../../../images/logo/logo.svg";
import reclamacoes from "../../../images/icons/footer/reclamacoes.svg";

import certification1 from "../../../images/icons/footer/certification1.png";
import certification2 from "../../../images/icons/footer/certification2.png";
import certification3 from "../../../images/icons/footer/certification3.png";

export default function Footer({ work }) {
    let classes =
        "pt-[50px] xl:pb-6 flex flex-col lg:flex-row items-end justify-center lg:justify-between";
    if (work) {
        classes += " lg:pt-[100px] xl:pt-[200px]";
    } else classes += " lg:pt-[80px] xl:pt-[120px]";

    return (
        <>
            <div className="bg-azul w-full h-full margin-website text-white pb-5 xl:pb-0">
                <div className={classes}>
                    <div>
                        <img src={logo} className="h-5 xl:h-auto"></img>
                        <h1 className="uppercase font-eurostile lg:text-[20px] xl:text-[28px] xl:leading-[28px] pt-5 xl:pt-25">
                            we<br className="hidden lg:block"></br> create
                            <br className="hidden lg:block"></br> solutions
                        </h1>

                        {/* <div className="lg:items-start xl:items-center lg:max-w-[320px] xl:max-w-[313px] lg:justify-start xl:justify-between pt-10 xl:pt-18 hidden lg:flex flex-col xl:flex-row">
                            <p className="xl:text-[13px] xl:leading-[22px] font-light">
                                2025 © INCOMPOL
                            </p>
                            <a
                                href="https://www.nor267.com/"
                                target="__blank"
                                className="font-courier xl:text-[13px] xl:leading-[22px] cursor-pointer hover:text-laranja duration-300 transition-all"
                            >
                                Made by Nor267
                            </a>
                        </div> */}
                    </div>
                    <div className="flex gap-5 lg:gap-20 xl:gap-56 pt-5 xl:pt-0">
                        <div className="text-[14px] leading-[24px] xl:text-[15px] xl:leading-[25px] tracking-[0.03em] font-light flex-col flex">
                            <a
                                href="/about-us"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                About Us
                            </a>
                            <a
                                href="/expertise"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Expertise
                            </a>
                            <a
                                href="/portfolio"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Portfolio
                            </a>
                            <a
                                href="/sustainability"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Sustainability
                            </a>
                            <a
                                href="/people"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                People
                            </a>
                            <a
                                href="/contact-us"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Contacts
                            </a>
                        </div>
                        <div className="text-[14px] leading-[24px] xl:text-[15px] xl:leading-[25px] tracking-[0.03em] font-light flex flex-col">
                            <a
                                href="/terms"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Terms and Conditions
                            </a>
                            <a
                                href="/legal-information"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Legal Information
                            </a>
                            <a
                                href="/cookies"
                                className="hover:text-laranja duration-300 transition-all"
                            >
                                Cookie Policy
                            </a>
                            <div className="xl:pt-8 pt-3">
                                <a
                                    className="cursor-pointer"
                                    target="__blank"
                                    href="https://www.livroreclamacoes.pt/inicio/"
                                    alt="Livro de reclamações"
                                >
                                    <img src={reclamacoes}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-end items-end flex-col lg:gap-3 xl:gap-4 hidden">
                        <a href="/people" className="button-laranja">
                            join our team
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="__blank"
                            alt="linkedin"
                            className="button-laranja"
                        >
                            Linkedin
                        </a>
                        <div className="flex xl:gap-1">
                            <img src={certification3}></img>
                            <img src={certification1}></img>
                            <img src={certification2}></img>
                        </div>
                    </div>
                </div>
                <div className="lg:items-start xl:items-center lg:max-w-[320px] xl:max-w-[313px] lg:justify-start xl:justify-between pt-10 xl:pt-18 xl:pb-5.5 hidden lg:flex flex-col xl:flex-row">
                    <p className="xl:text-[13px] xl:leading-[22px] font-light">
                        2025 © INCOMPOL
                    </p>
                    <a
                        href="https://www.nor267.com/"
                        target="__blank"
                        className="font-courier xl:text-[13px] xl:leading-[22px] cursor-pointer hover:text-laranja duration-300 transition-all"
                    >
                        Made by Nor267
                    </a>
                </div>
                <div className="flex justify-center items-center flex-col gap-4 pt-15 lg:hidden">
                    <button className="text-laranja border-3 border-laranja uppercase xl:px-4 rounded-[40px] xl:py-1 px-4 cursor-pointer font-bold">
                        join our team
                    </button>
                    <button className="text-laranja border-3 border-laranja uppercase xl:px-4 rounded-[40px] xl:py-1 cursor-pointer font-bold px-4">
                        Linkedin
                    </button>
                    <div className="flex xl:gap-1">
                        <img src={certification3}></img>
                        <img src={certification1}></img>
                        <img src={certification2}></img>
                    </div>
                </div>
            </div>
            <div className="h-[10px] lg:h-[30px] bg-laranja"></div>
        </>
    );
}
