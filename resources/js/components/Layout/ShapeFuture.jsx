//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";

export default function ShapeFuture({ shapeFuture, title, slogan, button }) {
    return (
        <div className="w-full lg:w-[800px] xl:w-[1440px] 4xl:w-[1800px] h-[300px] lg:h-[400px] xl:h-auto xl:g-[710px] absolute bottom-0 lg:-bottom-10 xl:-bottom-30 left-1/2 -translate-x-1/2">
            <img src={shapeFuture} className="w-full object-cover h-full"></img>
            <div className="w-full h-full gradient-blue-white z-20 absolute top-0">
                <img
                    src={triangleWhite}
                    className="absolute -left-2 top-16 xl:top-[150px] -rotate-90 h-8 xl:w-[58px] xl:h-[50px]"
                ></img>
                <div className="absolute top-16 left-10 xl:top-[150px] text-white xl:left-[105px] w-[300px]">
                    <h1
                        className="font-eurostile text-[18px] leading-[22px] xl:text-[32px] xl:leading-[39px] tracking-[0.14em] uppercase w-full xl:max-w-[340px]"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <p
                        className="text-[15px] leading-[20px]  xl:maw-w-[324px] xl:text-[17px] xl:leading-[24px] tracking-[0.03em] pt-5 xl:pt-16 xl:max-w-[280px]"
                        dangerouslySetInnerHTML={{
                            __html: slogan,
                        }}
                    ></p>
                    {button && (
                        <div className="mt-8 xl:mt-11">
                            <a href="/people" className="button-laranja">
                                {button.replace(/<[^>]+>/g, "")}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
