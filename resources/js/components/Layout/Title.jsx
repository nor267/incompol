export default function Title({ title, slogan, text }) {
    const sanitizedSlogan = slogan.replace(/<br\s*\/?>/gi, "");

    return (
        <section className="margin-website text-azul flex flex-col xl:flex-row justify-center items-center xl:items-start xl:gap-[175px] mt-25 xl:mt-56 ">
            <main className="relative">
                <h1 className="text-center xl:text-left font-eurostile text-azul text-[25px] xl:text-[86px] xl:leading-[92px] font-medium uppercase xl:max-w-[700px]">
                    {title}
                </h1>
                <p
                    className="uppercase  xl:text-[15px] text-azul xl:leading-[19px] text-right w-full font-medium hidden xl:block xl:absolute -top-20 -right-20"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
                <p
                    className="uppercase text-[14px] xl:text-[15px] text-azul leading-[10px] xl:leading-[19px] text-center xl:text-right w-full font-medium xl:hidden"
                    dangerouslySetInnerHTML={{
                        __html: sanitizedSlogan,
                    }}
                ></p>
            </main>
            <p
                className="w-full xl:max-w-[465px] text-base mt-6 xl:mt-0"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            ></p>
        </section>
    );
}
