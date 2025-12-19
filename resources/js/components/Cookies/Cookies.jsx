import { useCookies } from "react-cookie";

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
            <div className="bg-black-impuro/70 w-full h-15 lg:h-20 fixed z-50 bottom-0 text-white text-[12px] flex items-center px-4 md:px-20 lg:px-30 xl:px-50 4xl:px-90 justify-between">
                cookies
                <button
                    onClick={saveUser}
                    className="cursor-pointer bg-white text-black-impuro px-4 py-2"
                >
                    button
                </button>
            </div>
        );
    }

    return <>{htmlCookie}</>;
}
