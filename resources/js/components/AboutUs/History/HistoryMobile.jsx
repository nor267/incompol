import i18n from "../../../../i18n/i18n";
//icons
import lineMobile from "../../../../images/icons/aboutus/line-mobile.svg";

//component
import IconMobile from "./IconMobile";

export default function HistoryMobile({ dates }) {
    return (
        <div className="px-8 md:px-[78px] relative flex flex-col gap-3 justify-between mt-5 pb-10 h-[1590px]">
            <img
                src={lineMobile}
                className="absolute -top-8 left-8 md:left-[80px] h-[1690px]"
            ></img>
            {dates.map((item, index) => (
                <IconMobile
                    key={index}
                    title={item?.year}
                    slogan={
                        i18n.language === "pt" ? item?.text?.pt : item?.text?.en
                    }
                />
            ))}
        </div>
    );
}
