import i18n from "../../../../i18n/i18n";

//components
import HistoryIcon from "./../HistoryIcon";

//icons
import arrow from "../../../../images/icons/aboutus/arrow.svg";
import arrowSmall from "../../../../images/icons/aboutus/arrow-small.svg";
import line from "../../../../images/icons/aboutus/line.svg";
import lineTablet from "../../../../images/icons/aboutus/line-tablet.svg";

export default function HistoryDesktop({ dates }) {
    return (
        <>
            <div className="  flex justify-center h-full">
                <div className="my-40 xl:my-28 relative   z-0 lg:h-[300px] xl:h-[350px] lg:w-[1050px] xl:w-[1200px] 6xl:h-[360px]  6xl:w-auto 2xl:h-auto 2xl:w-fit 4xl:w-[1500px] ">
                    <img src={line} className=" object-cover h-full"></img>

                    <div className="absolute lg:-top-29 xl:-top-33 2xl:-top-32 4xl:-top-32.5 w-full overflow-x-hidden top-line">
                        <div className="grid grid-cols-4 w-full">
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[0]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[0]?.text?.pt
                                            : dates[0]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[2]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[2]?.text?.pt
                                            : dates[2]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[4]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[4]?.text?.pt
                                            : dates[4]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[6]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[6]?.text?.pt
                                            : dates[6]?.text?.en
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 w-full overflow-x-hidden bottom-line">
                        <div className="grid grid-cols-4 3xl:grid-cols-3 w-full">
                            <div className="history-line items-center!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[1]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[1]?.text?.pt
                                            : dates[1]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-center!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[3]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[3]?.text?.pt
                                            : dates[3]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-center!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[5]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[5]?.text?.pt
                                            : dates[5]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-center! 3xl:hidden!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[7]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[7]?.text?.pt
                                            : dates[7]?.text?.en
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full overflow-x-hidden top-line">
                        <div className="grid grid-cols-4 w-full">
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[15]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[15]?.text?.pt
                                            : dates[15]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[13]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[13]?.text?.pt
                                            : dates[13]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[11]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[11]?.text?.pt
                                            : dates[11]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line">
                                <img src={arrow} className="z-20"></img>
                                <HistoryIcon
                                    title={dates[9]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[9]?.text?.pt
                                            : dates[9]?.text?.en
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute lg:-bottom-28.5 xl:-bottom-33 2xl:-bottom-32 4xl:-bottom-32.5  w-full overflow-x-hidden bottom-line">
                        <div className="grid grid-cols-4 3xl:grid-cols-3 w-full">
                            <div className="history-line items-center!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[14]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[14]?.text?.pt
                                            : dates[14]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-center!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[12]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[12]?.text?.pt
                                            : dates[12]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-center!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[10]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[10]?.text?.pt
                                            : dates[10]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-center! 3xl:hidden!">
                                <img
                                    src={arrow}
                                    className="z-20 rotate-180"
                                ></img>
                                <HistoryIcon
                                    title={dates[8]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[8]?.text?.pt
                                            : dates[8]?.text?.en
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute 3xl:-right-46 4xl:-right-6 top-6 hidden 3xl:block">
                        <div className="flex flex-col items-end xl:gap-2 3xl:gap-13">
                            <div className="history-line items-start! flex-col!">
                                <img
                                    src={arrowSmall}
                                    className="z-20 w-20 h-5!"
                                ></img>
                                <HistoryIcon
                                    title={dates[7]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[7]?.text?.pt
                                            : dates[7]?.text?.en
                                    }
                                />
                            </div>
                            <div className="history-line items-start flex-col! ">
                                <img
                                    src={arrowSmall}
                                    className="z-20 w-20 h-5!"
                                ></img>
                                <HistoryIcon
                                    title={dates[8]?.year}
                                    slogan={
                                        i18n.language === "pt"
                                            ? dates[8]?.text?.pt
                                            : dates[8]?.text?.en
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img
                    src={lineTablet}
                    className="absolute lg:hidden  left-1/2 -translate-x-1/2 z-0"
                ></img> */}
            </div>

            {/* <div className="bottom-line  relative flex justify-between absolute lg:-top-4.5 xl:-top-4.5 2xl:-top-5 grid grid-cols-4 3xl:grid-cols-3">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[1]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[1]?.text?.pt
                                : dates[1]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[3]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[3]?.text?.pt
                                : dates[3]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[5]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[5]?.text?.pt
                                : dates[5]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center! 3xl:hidden!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[7]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[7]?.text?.pt
                                : dates[7]?.text?.en
                        }
                    />
                </div>
            </div>
            <div className="top-line relative flex justify-between absolute 6xl:-bottom-10 lg:bottom-4 xl:-bottom-10 2xl:-bottom-20.5 grid grid-cols-4">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[15]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[15]?.text?.pt
                                : dates[15]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[13]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[13]?.text?.pt
                                : dates[13]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[11]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[11]?.text?.pt
                                : dates[11]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title={dates[9]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[9]?.text?.pt
                                : dates[9]?.text?.en
                        }
                    />
                </div>
            </div>
            <div className="bottom-line  relative flex justify-between absolute 6xl:top-5 lg:-top-9 xl:top-5 2xl:top-16 grid grid-cols-4 3xl:grid-cols-3">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[14]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[14]?.text?.pt
                                : dates[14]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[12]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[12]?.text?.pt
                                : dates[12]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[10]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[10]?.text?.pt
                                : dates[10]?.text?.en
                        }
                    />
                </div>
                <div className="history-line items-center! 3xl:hidden!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title={dates[8]?.year}
                        slogan={
                            i18n.language === "pt"
                                ? dates[8]?.text?.pt
                                : dates[8]?.text?.en
                        }
                    />
                </div>
            </div> */}
        </>
    );
}
