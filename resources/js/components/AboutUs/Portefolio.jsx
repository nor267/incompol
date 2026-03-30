//components
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
    video,
    videoTitle,
    coverVideo,
}) {
    let classes =
        "pl-20 xl:pl-0 bg-white flex flex-col md:flex-row xl:justify-center xl:items-center pt-15 lg:pt-20 xl:pt-35 md:gap-30 xl:gap-28 relative";

    if (showWorkWithUs) {
        classes += " pb-100 md:pb-130 lg:pb-120 xl:pb-[650px]";
    } else {
        classes += " pb-20 md:pb-30 lg:pb-60 xl:pb-[200px]";
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center py-10 xl:py-20 bg-azul">
                <h1
                    className="text-white uppercase font-eurostile text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] xl:leading-[36px] tracking-[0.14em] pt-0 xl:pt-5 pb-10 font-bold"
                    dangerouslySetInnerHTML={{
                        __html: videoTitle,
                    }}
                ></h1>
                {video && (
                    <video
                        poster={coverVideo}
                        key={video}
                        src={video}
                        className="w-screen md:w-[500px] lg:w-[800px]  xl:w-[1000px] 2xl:w-[1200px] 3xl:w-[1300px] h-auto object-cover"
                        playsInline
                        controls
                    />
                )}
            </div>
            <div className={classes}>
                <div className="">
                    <h1
                        className="text-left font-medium md:text-[30px] lg:text-[30px] lg:leading-[38px] xl:text-[50px] xl:leading-[55px] text-azul max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] uppercase font-eurostile"
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
