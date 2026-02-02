import HistoryIcon from "./../HistoryIcon";

//icons
import arrow from "../../../../images/icons/aboutus/arrow.svg";
import arrowSmall from "../../../../images/icons/aboutus/arrow-small.svg";
import line from "../../../../images/icons/aboutus/line.svg";
import lineTablet from "../../../../images/icons/aboutus/line-tablet.svg";

export default function HistoryDesktop({ dates }) {
    return (
        <>
            <div className="lg:pr-[200px] lg:pl-[180px] 6xl:pl-[230px] 6xl:pr-[200px] xl:pl-[220px] xl:pr-[130px] 2xl:pl-[280px] 3xl:pl-[360px] 2xl:pr-[220px] 3xl:pr-[280px] 5xl:pr-[180px] 4xl:px-[620px] relative flex justify-between grid grid-cols-4">
                <img
                    src={line}
                    className="hidden lg:block absolute lg:top-33 xl:top-32 2xl:top-31.5 left-1/2 -translate-x-1/2 z-0 lg:h-[300px] xl:h-[350px] 6xl:h-[360px]  6xl:w-auto 2xl:h-auto 2xl:w-auto  object-cover"
                ></img>
                <img
                    src={lineTablet}
                    className="absolute lg:hidden  left-1/2 -translate-x-1/2 z-0  "
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
            <div className="5xl:absolute 5xl:block hidden  3xl:right-[5.1%]">
                <div className="flex flex-col items-end xl:gap-2 3xl:gap-13">
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
            <div className="lg:pr-[80px] lg:pl-[240px] 6xl:pr-[100px] xl:pl-[280px] xl:pr-[100px] 3xl:pl-[450px] 2xl:px-[400px] 2xl:pr-[110px] 3xl:pr-[190px] 5xl:pl-[510px] 5xl:pr-[350px] 4xl:px-[800px]  relative flex justify-between absolute lg:-top-4.5 xl:-top-4.5 2xl:-top-5 grid grid-cols-4 5xl:grid-cols-3">
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
                <div className="history-line items-center! 5xl:hidden!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[7]?.year}
                        slogan={dates[7]?.text?.en}
                    />
                </div>
            </div>
            <div className="lg:pr-[200px] lg:pl-[180px]  6xl:pl-[230px] 6xl:pr-[200px] xl:pl-[220px] xl:pr-[130px] 2xl:pl-[280px] 3xl:pl-[360px] 2xl:pr-[220px] 3xl:pr-[280px] 5xl:pr-[180px] 4xl:px-[620px]  relative flex justify-between absolute 6xl:-bottom-10 lg:bottom-4 xl:-bottom-10 2xl:-bottom-20.5 grid grid-cols-4">
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
            <div className="lg:pr-[80px] lg:pl-[240px] 6xl:pr-[100px] xl:pl-[280px] xl:pr-[100px] 3xl:pl-[450px] 2xl:px-[400px] 2xl:pr-[110px] 3xl:pr-[190px] 5xl:pl-[510px] 5xl:pr-[350px] 4xl:px-[800px]   relative flex justify-between absolute 6xl:top-5 lg:-top-9 xl:top-5 2xl:top-16 grid grid-cols-4 5xl:grid-cols-3">
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
                <div className="history-line items-center! 5xl:hidden!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[8]?.year}
                        slogan={dates[8]?.text?.en}
                    />
                </div>
            </div>
        </>
    );
}
