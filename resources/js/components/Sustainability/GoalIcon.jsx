//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";

export default function GoalIcon({ icon, title, text, ...props }) {
    return (
        <div>
            <div className="relative h-[280px] xl:h-[430px] xl:w-[464px]">
                <div {...props}>
                    <img
                        src={triangleWhite}
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-5 xl:h-auto"
                    ></img>

                    <div className="flex justify-center items-center flex-col h-full px-8">
                        <img src={icon}></img>
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                            className="pt-5 xl:pt-7 font-bold font-eurostile text-[14px] leading-[18px] xl:text-[16px] leading-[18px] tracking-[0.14em] uppercase xl:max-w-[290px] text-center"
                        ></h1>
                        <p
                            className="text-base  xl:max-w-[290px] text-center pt-5 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
