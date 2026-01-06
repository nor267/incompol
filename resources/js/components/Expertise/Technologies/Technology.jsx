import triangleWhite from "../../../../images/icons/triangle-white.svg";

export default function Technology({ image, title, slogan, text, className }) {
    return (
        <div className={className}>
            <div className="xl:w-[1228px] relative h-full">
                <img src={image} className="h-[200px] xl:h-[560px]"></img>
                <img
                    src={triangleWhite}
                    className="absolute right-1/2 translate-x-1/2 xl:translate-x-0 xl:-right-2 translate-y-0 top-0  xl:top-1/2 xl:-translate-y-1/2 xl:rotate-90 h-7 xl:w-[58px] xl:h-[50px]"
                ></img>
            </div>
            <div className="flex flex-col xl:flex-row items-center pt-8 xl:pt-0 gap-5 xl:gap-26 xl:pr-[137px] w-full xl:w-auto px-8 xl:px-0">
                <h1 className="uppercase text-azul font-eurostile xl:text-[42px] tracking-[0.05em] xl:leading-[54px] xl:[writing-mode:vertical-rl] xl:rotate-180 font-semibold text-center">
                    {title}
                </h1>
                <div className="flex flex-col items-start xl:items-center w-full">
                    <h4 className="text-[14px] leading-[18px] xl:text-[20px] font-semibold xl:leading-[24px] tracking-[0.03em] uppercase text-azul">
                        {slogan}
                    </h4>
                    <p
                        className={
                            slogan == ""
                                ? "text-base leading-[24px]! xl:leading-[40px]! text-azul"
                                : "text-base leading-[24px]! xl:leading-[40px]! text-azul xl:mt-[20px]"
                        }
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></p>
                </div>
            </div>
        </div>
    );
}
