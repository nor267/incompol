import i18n from "../../../i18n/i18n";
//icons
import missaoIcon from "../../../images/icons/aboutus/missao-icon.svg";
import valoresIcon from "../../../images/icons/aboutus/valores-icon.svg";
import visaoIcon from "../../../images/icons/aboutus/visao-icon.svg";
import triangle from "../../../images/icons/triangle-orange.svg";

//components
import SecondTitle from "../Layout/SecondTitle";
import Valor from "./Valor";

export default function Mission({
    title,
    slogan,
    title1,
    text1,
    title2,
    text2,
    title3,
    text3,
    valores,
    finalText,
    destaqueText,
    image,
}) {
    return (
        <div className="flex flex-col justify-center items-center text-center text-azul ">
            <SecondTitle slogan={slogan} title={title} className="text-azul" />

            <div className="grid xl:grid-cols-2 mt-5 xl:mt-25 relative">
                <img
                    src={triangle}
                    className=" hidden lg:block lg:absolute -translate-x-1/2 left-1/2 top-0 z-40 h-10"
                ></img>
                <img
                    src={triangle}
                    className="hidden xl:block xl:absolute  -translate-x-1/2 left-1/2 bottom-0 z-40 rotate-180 "
                ></img>
                <section className="text-center pt-10 bg-light-grey px-8 md:px-20 lg:px-25 xl:pl-34.25 xl:pr-30 py-8 xl:py-20">
                    <div className="text-left pb-3!">
                        <div className="flex items-center flex-row gap-2 pb-2">
                            <img src={missaoIcon} className="h-8 mb-2"></img>
                            <h1
                                className="font-bold uppercase text-left text-[18px] 2xl:text-[20px]! leading-[20px]! tracking-wide font-eurostile"
                                dangerouslySetInnerHTML={{
                                    __html: title1,
                                }}
                            ></h1>
                        </div>
                        <p
                            className="text-base"
                            dangerouslySetInnerHTML={{
                                __html: text1,
                            }}
                        ></p>
                    </div>
                    <div className="text-left pb-3! pt-10">
                        <div className="flex items-center flex-row gap-2 pb-2">
                            <img src={visaoIcon} className="h-8 mb-2"></img>
                            <h1
                                className="font-bold uppercase text-left text-[18px] 2xl:text-[20px]! tracking-wide font-eurostile"
                                dangerouslySetInnerHTML={{
                                    __html: title2,
                                }}
                            ></h1>
                        </div>
                        <p
                            className="text-base"
                            dangerouslySetInnerHTML={{
                                __html: text2,
                            }}
                        ></p>
                    </div>
                </section>
                <section className="relative">
                    <img
                        src={triangle}
                        className="absolute -top-4 -rotate-90 -left-1 z-40 h-8 lg:hidden"
                    ></img>
                    <img
                        src={triangle}
                        className="absolute -top-4 rotate-90 -right-1 z-40 h-8 lg:hidden"
                    ></img>
                    <img
                        src={image}
                        className="w-full md:h-[600px] xl:h-full object-cover object-top"
                    ></img>
                </section>
            </div>
            <section className="bg-azul text-white px-8 md:px-20 lg:px-25 xl:pl-34.25 2xl:pr-10 pb-20 w-full">
                <div className="text-left pt-8 xl:pt-22">
                    <div className="flex items-center flex-row gap-2">
                        <img src={valoresIcon} className="h-8 mb-2"></img>
                        <h1
                            className="font-bold uppercase text-left text-[18px] 2xl:text-[20px] tracking-wide font-eurostile"
                            dangerouslySetInnerHTML={{
                                __html: title3,
                            }}
                        ></h1>
                    </div>
                    <p
                        className="text-base xl:max-w-[476px] pt-3.5"
                        dangerouslySetInnerHTML={{
                            __html: text3,
                        }}
                    ></p>
                </div>
                <div className="flex flex-col lg:flex-row w-full text-left pt-10 gap-5 2xl:gap-25">
                    <div className="flex flex-col gap-5 2xl:gap-5 xl:max-w-90 2xl:max-w-107 w-full">
                        <Valor
                            title={
                                i18n.language === "pt"
                                    ? valores[0]?.title?.pt
                                    : valores[0]?.title?.en
                            }
                            description={
                                i18n.language === "pt"
                                    ? valores[0]?.description?.pt
                                    : valores[0]?.description?.en
                            }
                        />
                        <Valor
                            title={
                                i18n.language === "pt"
                                    ? valores[1]?.title?.pt
                                    : valores[1]?.title?.en
                            }
                            description={
                                i18n.language === "pt"
                                    ? valores[1]?.description?.pt
                                    : valores[1]?.description?.en
                            }
                        />
                        <Valor
                            title={
                                i18n.language === "pt"
                                    ? valores[2]?.title?.pt
                                    : valores[2]?.title?.en
                            }
                            description={
                                i18n.language === "pt"
                                    ? valores[2]?.description?.pt
                                    : valores[2]?.description?.en
                            }
                        />
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex-col lg:flex-row gap-5 flex 2xl:gap-25 pb-15 2xl:pb-20">
                            <section className="flex flex-col gap-5 xl:max-w-91 2xl:max-w-107 w-full">
                                <Valor
                                    title={
                                        i18n.language === "pt"
                                            ? valores[3]?.title?.pt
                                            : valores[3]?.title?.en
                                    }
                                    description={
                                        i18n.language === "pt"
                                            ? valores[3]?.description?.pt
                                            : valores[3]?.description?.en
                                    }
                                />
                                <Valor
                                    title={
                                        i18n.language === "pt"
                                            ? valores[4]?.title?.pt
                                            : valores[4]?.title?.en
                                    }
                                    description={
                                        i18n.language === "pt"
                                            ? valores[4]?.description?.pt
                                            : valores[4]?.description?.en
                                    }
                                />
                            </section>
                            <section className="xl:max-w-91 2xl:max-w-107 w-full flex flex-col gap-5 ">
                                <Valor
                                    title={
                                        i18n.language === "pt"
                                            ? valores[5]?.title?.pt
                                            : valores[5]?.title?.en
                                    }
                                    description={
                                        i18n.language === "pt"
                                            ? valores[5]?.description?.pt
                                            : valores[5]?.description?.en
                                    }
                                />
                                <Valor
                                    title={
                                        i18n.language === "pt"
                                            ? valores[6]?.title?.pt
                                            : valores[6]?.title?.en
                                    }
                                    description={
                                        i18n.language === "pt"
                                            ? valores[6]?.description?.pt
                                            : valores[6]?.description?.en
                                    }
                                />
                            </section>
                        </div>
                        <p
                            className="xl:max-w-180 2xl:max-w-235.5 italic lg:pt-10 xl:pt-15 2xl:pt-10 text-[16px] leading-[22px] tracking-[0.03em] text-left md:text-[19px] lg:text-[20px] md:leading-[1.5] 2xl:text-[24px] xl:leading-[32px]!"
                            dangerouslySetInnerHTML={{
                                __html: finalText,
                            }}
                        ></p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-8 md:px-20 lg:px-25 md:py-35 lg:py-40 2xl:py-60">
                <h1
                    className="font-eurostile text-azul font-medium text-[14px] md:text-[22px] lg:text-[24px] 2xl:text-[28px] 2xl:leading-[1.5] uppercase 2xl:max-w-310"
                    dangerouslySetInnerHTML={{
                        __html: destaqueText,
                    }}
                ></h1>
            </section>
        </div>
    );
}
