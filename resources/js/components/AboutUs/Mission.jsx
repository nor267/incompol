import SecondTitle from "../Layout/SecondTitle";

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
}) {
    return (
        <div className="flex flex-col justify-center items-center text-center margin-website 2xl:px-90! text-azul mb-10 xl:mb-38">
            <SecondTitle slogan={slogan} title={title} className="text-azul" />

            <section className="text-center pt-10 text-base">
                <div className="text-left pb-3!">
                    <h1
                        className="font-bold uppercase text-left text-[18px] 2xl:text-[22px]!"
                        dangerouslySetInnerHTML={{
                            __html: title1,
                        }}
                    ></h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: text1,
                        }}
                    ></p>
                </div>
                <div className="text-left pb-3!">
                    <h1
                        className="font-bold uppercase text-left text-[18px] 2xl:text-[22px]!"
                        dangerouslySetInnerHTML={{
                            __html: title2,
                        }}
                    ></h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: text2,
                        }}
                    ></p>
                </div>
                <div className="text-left">
                    <h1
                        className="font-bold uppercase text-left text-[18px]  2xl:text-[22px]"
                        dangerouslySetInnerHTML={{
                            __html: title3,
                        }}
                    ></h1>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: text3,
                        }}
                    ></p>
                </div>
                <div className="md:px-30 lg:px-50 xl:px-60">
                    {valores.map((item, index) => (
                        <>
                            <p className="font-bold pb-2!">{item.title.en}</p>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item.description.en,
                                }}
                            ></p>
                        </>
                    ))}
                </div>

                <p
                    className=" uppercase pt-10 text-[16px] leading-[22px]! font-light tracking-[0.03em] text-left xl:text-[20px] xl:leading-[26px]"
                    dangerouslySetInnerHTML={{
                        __html: finalText,
                    }}
                ></p>
            </section>
        </div>
    );
}
