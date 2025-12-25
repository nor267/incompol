import triangleWhite from "../../../images/icons/triangle-white.svg";

export default function ShapeFuture({ shapeFuture }) {
    return (
        <div className="xl:w-[1440px] xl:g-[710px] absolute -bottom-30">
            <img src={shapeFuture} className="w-full object-cover"></img>
            <div className="w-full h-full gradient-blue-white z-20 absolute top-0">
                <img
                    src={triangleWhite}
                    className="absolute -left-2 top-[150px]  -rotate-90 xl:w-[58px] xl:h-[50px] "
                ></img>
                <div className="absolute xl:top-[150px] text-white xl:left-[105px]">
                    <h1 className="font-eurostile xl:text-[32px] xl:leading-[39px] tracking-[0.14em] uppercase xl:max-w-[340px]">
                        Shape <br></br>the Future With Us.
                    </h1>
                    <p className="xl:maw-w-[324px] xl:text-[17px] xl:leading-[24px] tracking-[0.03em] xl:pt-16 xl:max-w-[280px]">
                        Be part of precision, innovation, and progress.
                    </p>
                    <button className="text-laranja border-3 border-laranja uppercase xl:px-4 rounded-[40px] xl:py-1 cursor-pointer font-bold xl:mt-11">
                        join our team
                    </button>
                </div>
            </div>
        </div>
    );
}
