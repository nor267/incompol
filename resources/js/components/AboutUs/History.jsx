import arrow from "../../../images/icons/aboutus/arrow.svg";
import line from "../../../images/icons/aboutus/line.svg";
import HistoryIcon from "./HistoryIcon";
export default function History() {
    return (
        <div className="xl:my-52">
            <main className="text-center xl:mb-22">
                <p className="text-azul xl:text-[17px]">
                    The beginning and the progress
                </p>
                <h1 className="uppercase font-eurostile font-bold text-azul xl:text-[32px] xl:leading-[32px] tracking-[0.14em] xl:mt-5.5">
                    Our HISTORY
                </h1>
            </main>
            <div className="xl:px-[385px] relative flex justify-between">
                <img
                    src={line}
                    className="absolute top-39 left-1/2 -translate-x-1/2 z-0"
                ></img>
                <div className="flex items-start xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="1987"
                        slogan="Foundation<br> 3 employees"
                    />
                </div>
                <div className="flex items-start xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="1995"
                        slogan="Ford/VW<br> Autoeuropa project <br> Sales: € 5m"
                    />
                </div>
                <div className="flex items-start xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2002"
                        slogan="Investment in new technologies<br>Tool Design & Manufacturing"
                    />
                </div>
                <div className="flex items-start xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20"></img>
                    <HistoryIcon
                        title="2004"
                        slogan="Environmental certification<br> ISO 14001<br>Aeronautic certification<br> IQF 710.01 (OGMA)"
                    />
                </div>
            </div>
            <div className="xl:px-[550px] relative flex justify-between absolute -top-5">
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="1990"
                        slogan="Supplier of the year<br>Inlan – General Motors"
                    />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="1996"
                        slogan="Ford Q1 award<br>100 employees<br>Sales: € 10m"
                    />
                </div>
                <div className="flex items-center xl:max-h-[176px] z-20">
                    <img src={arrow} className="z-20 rotate-180"></img>
                    <HistoryIcon
                        title="2003"
                        slogan="Supplier of the year<br>Certification ISO/TS 16949"
                    />
                </div>
            </div>
            <div className="xl:px-[385px] relative flex justify-between absolute -bottom-4.5">
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
            <div className="xl:px-[550px] relative flex justify-between absolute -top-1">
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
        </div>
    );
}
