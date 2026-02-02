import ShapeFuture from "../Layout/ShapeFuture";

export default function Portefolio({
    title,
    slogan,
    banner,
    button,
    titleShape,
    sloganShape,
    buttonShape,
    showWorkWithUs,
}) {
    let classes =
        "pl-20 xl:pl-0 bg-white flex flex-col md:flex-row xl:justify-center xl:items-center pt-15 lg:pt-20 xl:pt-52 md:gap-30 xl:gap-28 relative";

    if (showWorkWithUs) {
        classes += " pb-100 md:pb-130 lg:pb-120 xl:pb-[800px]";
    } else {
        classes += " pb-20 md:pb-30 lg:pb-60 xl:pb-[300px]";
    }

    return (
        <>
            <div className={classes}>
                <div className="">
                    <h1
                        className="text-left font-medium md:text-[30px] lg:text-[40px] xl:text-[66px] xl:leading-[66px] text-azul max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] uppercase font-eurostile"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                </div>
                <div className="">
                    <p
                        className="text-left md:text-[18px] xl:text-[20px] xl:leading-[26px] tracking-[0.03em] mt-5 md:mt-0 text-azul xl:max-w-[345px]"
                        dangerouslySetInnerHTML={{
                            __html: slogan,
                        }}
                    ></p>
                    <a href="/portfolio">
                        <button
                            className="button-laranja-blue mt-4 md:mt-6 xl:mt-8"
                            dangerouslySetInnerHTML={{
                                __html: button,
                            }}
                        ></button>
                    </a>
                </div>
                {showWorkWithUs && (
                    <ShapeFuture
                        shapeFuture={banner}
                        title={titleShape}
                        slogan={sloganShape}
                        button={buttonShape}
                    />
                )}
            </div>
        </>
    );
}
