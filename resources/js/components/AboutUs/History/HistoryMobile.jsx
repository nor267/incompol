import lineMobile from "../../../../images/icons/aboutus/line-mobile.svg";
import IconMobile from "./IconMobile";

export default function HistoryMobile() {
    return (
        <div className="px-8 md:px-[78px] relative flex flex-col gap-3 justify-between mt-5">
            <img
                src={lineMobile}
                className="absolute -top-8 left-8.5 md:left-[80px]"
            ></img>
            <IconMobile title="1987" slogan="Foundation 3 employees" />
            <IconMobile
                title="1990"
                slogan="Supplier of the year <br>Inlan – General Motors"
            />
            <IconMobile
                title="1995"
                slogan="Ford/VW Autoeuropa project <br> Sales: € 5m"
            />
            <IconMobile
                title="1996"
                slogan="Ford Q1 award 100 employees<br>Sales: € 10m"
            />
            <IconMobile
                title="2002"
                slogan="Investment in new technologies<br>Tool Design & Manufacturing"
            />
            <IconMobile
                title="2003"
                slogan="Supplier of the year<br>Certification ISO/TS 16949"
            />
            <IconMobile
                title="2004"
                slogan="Environmental certification ISO 14001<br>Aeronautic certification<br> IQF 710.01 (OGMA)"
            />
            <IconMobile
                title="2005"
                slogan="New site: Benavente<br>First aeronautic jig (Pilatus)"
            />
            <IconMobile
                title="2008"
                slogan="Internal training centre <br>Sales: € 21m"
            />
            <IconMobile title="2009" slogan="Aeronautic certification EN9100" />
            <IconMobile
                title="2012-15"
                slogan="€ 3,2m Investment in new technologies"
            />
            <IconMobile
                title="2020"
                slogan="Covid pandemic:<br>sales retract to € 9.2m"
            />
            <IconMobile
                title="2023"
                slogan="Footprint increased to 17000 m2<br>Sales: € 17m<br>(85% increase over 3 years)"
            />
            <IconMobile title="2025" slogan="New branding" />
        </div>
    );
}
