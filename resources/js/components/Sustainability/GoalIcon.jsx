//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import triangleGrey from "../../../images/icons/triangle-grey.svg";
import triangleBlue from "../../../images/icons/triangle-blue.svg";

export default function GoalIcon({ icon, title, text, grey, blue, ...props }) {
    return (
        <div>
            <div className="relative h-[400px] md:h-[450px] w-full  2xl:h-[430px] 2xl:w-[464px]">
                <div {...props}>
                    <img
                        src={
                            blue
                                ? triangleBlue
                                : grey
                                  ? triangleGrey
                                  : triangleWhite
                        }
                        className="absolute -top-0 left-1/2 -translate-x-1/2 h-8 xl:h-auto"
                    ></img>

                    <div className="flex justify-center items-center flex-col h-full px-12 md:px-4 w-full">
                        <img src={icon}></img>
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                            className="pt-10 xl:pt-7 font-bold font-eurostile text-[14px] leading-[18px] xl:text-[16px] leading-[18px] tracking-[0.14em] uppercase md:max-w-[230px] xl:max-w-[290px] text-center"
                        ></h1>
                        <p
                            className="text-base xl:max-w-[290px] text-center pt-5 xl:pt-8"
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
