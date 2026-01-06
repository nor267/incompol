import SecondTitle from "../Layout/SecondTitle";
import HistoryDesktop from "./History/HistoryDesktop";
import HistoryMobile from "./History/HistoryMobile";

export default function History() {
    return (
        <div className="mt-15 mb-32 xl:my-52">
            <main className="text-center mb-10 xl:mb-22">
                <SecondTitle
                    slogan=" The beginning and the progress"
                    title="Our HISTORY"
                    className="text-azul"
                />
            </main>
            {/* DESKTOP */}
            <div className="hidden xl:block">
                <HistoryDesktop />
            </div>
            {/* MOBILE */}
            <div className="xl:hidden">
                <HistoryMobile />
            </div>
        </div>
    );
}
