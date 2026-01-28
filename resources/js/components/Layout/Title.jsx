export default function Title({ title, slogan, text }) {
    const sanitizedSlogan = slogan?.replace(/<br\s*\/?>/gi, " ");

    return (
        <section className="margin-website text-azul flex flex-col xl:flex-row justify-center items-center xl:items-start xl:gap-[175px] mt-25 lg:mt-30 xl:mt-56">
            <main className="relative">
                <h1
                    className="text-center xl:hidden xl:text-left font-eurostile text-azul text-[25px] leading-[28px] xl:text-[86px] xl:leading-[92px] font-medium uppercase xl:max-w-[700px] "
                    style={{
                        fontSize: "clamp(24px, 6vw, 86px)",
                        lineHeight: "clamp(28px, 6.5vw, 92px)",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
                <h1
                    className="hidden xl:block text-center xl:text-right font-eurostile text-azul font-medium uppercase xl:max-w-[700px] w-full"
                    style={{
                        fontSize: "clamp(4.4rem, 4vw, 4.4rem)",
                        lineHeight: "clamp(28px, 6vw, 92px)",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
                <p
                    className="uppercase xl:text-[15px] text-azul xl:leading-[19px] text-right w-full font-medium hidden xl:block xl:absolute -top-20 -right-20"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
                <p
                    className="uppercase text-[13px] pt-2 xl:pt-0 xl:text-[15px] text-azul leading-[10px] xl:leading-[19px] text-center xl:text-right w-full font-medium xl:hidden"
                    dangerouslySetInnerHTML={{
                        __html: sanitizedSlogan,
                    }}
                ></p>
            </main>
            <p
                className="w-full xl:max-w-[534px] text-base mt-10 xl:mt-0"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            ></p>
        </section>
    );
}
