import axios from "axios";
import { useEffect, useState } from "react";

//config
import { API_URL } from "../../config";

//components
import SecondTitle from "../Layout/SecondTitle";
import HistoryDesktop from "./History/HistoryDesktop";
import HistoryMobile from "./History/HistoryMobile";

export default function History({ title, slogan }) {
    const [data, setData] = new useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-history",
                    data: {},
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    return (
        <div className="mt-15 mb-32 xl:my-52">
            <main className="text-center mb-10 xl:mb-22">
                <SecondTitle
                    slogan={slogan}
                    title={title}
                    className="text-azul"
                />
            </main>
            {/* DESKTOP */}
            <div className="hidden lg:block">
                <HistoryDesktop dates={data} />
            </div>
            {/* MOBILE */}
            <div className="lg:hidden">
                <HistoryMobile />
            </div>
        </div>
    );
}
