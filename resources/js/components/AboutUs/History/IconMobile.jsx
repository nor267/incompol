import arrowMobile from "../../../../images/icons/aboutus/arrow-mobile.svg";
import HistoryIcon from "../HistoryIcon";

export default function IconMobile({ title, slogan }) {
    return (
        <div className="history-line">
            <HistoryIcon title={title} slogan={slogan} />
            <img src={arrowMobile} className="z-20 mt-1"></img>
        </div>
    );
}
