import HistoryIcon from "./../HistoryIcon";

//icons
import arrow from "../../../../images/icons/aboutus/arrow.svg";
import line from "../../../../images/icons/aboutus/line.svg";
import lineTablet from "../../../../images/icons/aboutus/line-tablet.svg";

export default function HistoryDesktop() {
    return (
        <>
            <div className="lg:px-45 xl:px-[385px] 4xl:px-[620px] relative flex justify-between">
                <img
                    src={line}
                    className="hidden xl:block absolute lg:-top-8 xl:top-39 left-1/2 -translate-x-1/2 z-0 lg:w-[1000px] lg:h-[600px] 3xl:w-[2000px] 3xl:h-[390px] "
                ></img>
                <img
                    src={lineTablet}
                    className="absolute xl:hidden lg:top-32 xl:top-39 left-1/2 -translate-x-1/2 z-0 lg:w-[1000px]  3xl:w-[2000px] 3xl:h-[390px] "
                ></img>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="1987"
                        slogan="Foundation<br> 3 employees"
                    />
                </div>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="1995"
                        slogan="Ford/VW<br> Autoeuropa project <br> Sales: € 5m"
                    />
                </div>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2002"
                        slogan="Investment in new technologies<br>Tool Design & Manufacturing"
                    />
                </div>
                <div className="history-line">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2004"
                        slogan="Environmental certification<br> ISO 14001<br>Aeronautic certification<br> IQF 710.01 (OGMA)"
                    />
                </div>
            </div>
            <div className="lg:px-70 xl:px-[550px] 4xl:px-[800px]  relative flex justify-between absolute lg:-top-4.5 xl:-top-5">
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="1990"
                        slogan="Supplier of the year<br>Inlan – General Motors"
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="1996"
                        slogan="Ford Q1 award<br>100 employees<br>Sales: € 10m"
                    />
                </div>
                <div className="history-line items-center!">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="2003"
                        slogan="Supplier of the year<br>Certification ISO/TS 16949"
                    />
                </div>
            </div>
            <div className="lg:px-45 xl:px-[385px] 4xl:px-[620px] relative flex justify-between absolute lg:-bottom-18 xl:-bottom-4.5">
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon title="2025" slogan="New branding" />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2020"
                        slogan="Covid pandemic:<br>sales retract to € 9.2m"
                    />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2009"
                        slogan="Aeronautic certification<br>EN9100"
                    />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2005"
                        slogan="New site: Benavente<br>First aeronautic<br> jig (Pilatus)"
                    />
                </div>
            </div>
            <div className="lg:px-70 xl:px-[550px] 4xl:px-[800px] relative flex justify-between absolute lg:top-13 xl:-top-1">
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="2023"
                        slogan="Footprint increased to 17000 m2<br>Sales: € 17m<br>(85% increase over 3 years)"
                    />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="2012-15"
                        slogan="€ 3,2m Investment in<br> new technologies"
                    />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="2008"
                        slogan="Internal training centre<br>Sales: € 21m"
                    />
                </div>
            </div>
        </>
    );
}
