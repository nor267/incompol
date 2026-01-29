import { useEffect, useState } from "react";
import axios from "axios";

//icons
import closeMenu from "../../../images/icons/close-menu.svg";
import icon from "../../../images/logo/logo-mini.svg";

//config
import { API_URL } from "../../config";

export default function Menu({ isOpen, handleMenu }) {
    const [data, setData] = new useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-pages",
                    data: {
                        en: true,
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    return (
        <menu
            className={`
    fixed inset-0 z-60 bg-azul h-screen w-full
    transform transition-all duration-900 ease-out
    ${
        isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
    }
  `}
        >
            <div className="w-full flex flex-col justify-center items-center h-full pl-5 xl:pl-10">
                {data.map((item, index) => (
                    <div className="pb-6 xl:pb-16 flex" key={index}>
                        <a
                            href={"/" + item?.slug}
                            className="link-menu"
                            dangerouslySetInnerHTML={{
                                __html: item?.name_menu?.en,
                            }}
                        ></a>
                    </div>
                ))}

                <img
                    src={closeMenu}
                    className="absolute 4xl:right-61 lg:right-24 xl:top-12 xl:right-34 top-10 right-10 h-5 lg:h-8 xl:h-auto cursor-pointer opacity-80 hover:opacity-100 duration-300"
                    onClick={handleMenu}
                ></img>
                <img
                    src={icon}
                    className="absolute xl:bottom-18 lg:left-24 4xl:left-61 xl:left-32 bottom-10 left-10 h-8 lg:h-14 xl:h-[67px] cursor-pointer"
                ></img>
            </div>
        </menu>
    );
}
