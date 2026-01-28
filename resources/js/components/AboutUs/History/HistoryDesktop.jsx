import HistoryIcon from "./../HistoryIcon";

//icons
import arrow from "../../../../images/icons/aboutus/arrow.svg";
import arrowSmall from "../../../../images/icons/aboutus/arrow-small.svg";
import line from "../../../../images/icons/aboutus/line.svg";
import lineTablet from "../../../../images/icons/aboutus/line-tablet.svg";

export default function HistoryDesktop({ dates }) {
    return (
        <>
            <div className=" xl:pl-[360px] xl:pr-[180px] 4xl:px-[620px] relative flex justify-between grid grid-cols-4">
                <img
                    src={line}
                    className="hidden xl:block absolute lg:-top-8 xl:top-31.5 left-1/2 -translate-x-1/2 z-0 lg:w-[1000px] lg:h-[600px] 3xl:w-auto 3xl:h-auto object-cover"
                ></img>
                <img
                    src={lineTablet}
                    className="absolute xl:hidden lg:top-32 xl:top-39 left-1/2 -translate-x-1/2 z-0 lg:w-[1000px]  3xl:w-[2000px] 3xl:h-[390px] "
                ></img>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[0]?.year}
                        slogan={dates[0]?.text?.en}
                    />
                </div>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[2]?.year}
                        slogan={dates[2]?.text?.en}
                    />
                </div>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[4]?.year}
                        slogan={dates[4]?.text?.en}
                    />
                </div>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[6]?.year}
                        slogan={dates[6]?.text?.en}
                    />
                </div>
            </div>
            <div className="absolute 3xl:right-24.5">
                <div className="flex flex-col items-end 3xl:gap-13">
                    <div className="history-line items-start! flex-col!">
                        <img src={arrowSmall} className="z-20 w-20 h-5!"></img>
                        <HistoryIcon
                            title={dates[7]?.year}
                            slogan={dates[7]?.text?.en}
                        />
                    </div>
                    <div className="history-line items-start flex-col! ">
                        <img src={arrowSmall} className="z-20 w-20 h-5!"></img>
                        <HistoryIcon
                            title={dates[8]?.year}
                            slogan={dates[8]?.text?.en}
                        />
                    </div>
                </div>
            </div>
            <div className="xl:pl-[510px] xl:pr-[350px] 4xl:px-[800px]  relative flex justify-between absolute lg:-top-4.5 xl:-top-5 grid grid-cols-3">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[1]?.year}
                        slogan={dates[1]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[3]?.year}
                        slogan={dates[3]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[5]?.year}
                        slogan={dates[5]?.text?.en}
                    />
                </div>
            </div>
            <div className="xl:pl-[360px] xl:pr-[180px] 4xl:px-[620px] relative flex justify-between absolute lg:-bottom-18 xl:-bottom-20.5 grid grid-cols-4">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[15]?.year}
                        slogan={dates[15]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[13]?.year}
                        slogan={dates[13]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[11]?.year}
                        slogan={dates[11]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[9]?.year}
                        slogan={dates[9]?.text?.en}
                    />
                </div>
            </div>
            <div className="xl:pl-[510px] xl:pr-[350px] 4xl:px-[800px] relative flex justify-between absolute lg:top-13 xl:top-16 grid grid-cols-3">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[14]?.year}
                        slogan={dates[14]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[12]?.year}
                        slogan={dates[12]?.text?.en}
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[10]?.year}
                        slogan={dates[10]?.text?.en}
                    />
                </div>
            </div>
        </>
    );
}
