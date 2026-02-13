import { useCookies } from "react-cookie";
import i18n from "../../../i18n/i18n";

export default function Cookies() {
    const [cookies, setCookie] = useCookies(["user"]);

    const saveUser = () => {
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        setCookie("user", "JohnDoe", {
            path: "/",
            expires: oneYearFromNow, // 1 year
            sameSite: "strict",
        });
    };

    let htmlCookie = null;
    if (!cookies.user) {
        htmlCookie = (
            <div className="text-[12px] xl:text-[14px] bg-azul w-full h-fit py-4 flex-col md:flex-row lg:h-20 fixed z-50 bottom-0 text-white flex items-center margin-website justify-between gap-2 xl:gap-20">
                {i18n.language === "pt"
                    ? "Este website utiliza Cookies no seu funcionamento. Ao navegar está a consentir a sua utilização. Para saber mais consulte a nossa página de políticas de privacidade."
                    : "This website uses cookies in its operation. By browsing, you are consenting to their use. To learn more, please consult our privacy policy page."}
                <button
                    onClick={saveUser}
                    className="button-laranja xl:text-[16px]! cursor-pointer text-base  w-fit md:w-60 lg:w-60 xl:w-50 mt-3 md:mt-0"
                >
                    {i18n.language === "pt" ? "Compreendi" : "I understand"}
                </button>
            </div>
        );
    }

    return <>{htmlCookie}</>;
}
