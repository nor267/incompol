import { useEffect, useState } from "react";
import axios from "axios";

//config
import { API_URL } from "../../config";

//components
import Icon from "./Icon";
import SecondTitle from "../Layout/SecondTitle";

//icons
import house from "../../../images/icons/aboutus/house.svg";
import graph from "../../../images/icons/aboutus/graph.svg";
import industrial from "../../../images/icons/aboutus/industrial.svg";
import settings from "../../../images/icons/aboutus/settings.svg";
import map from "../../../images/icons/aboutus/map.svg";
import roller from "../../../images/icons/aboutus/roller.svg";
import heart from "../../../images/icons/aboutus/heart.svg";
import world from "../../../images/icons/aboutus/world.svg";
import goals from "../../../images/icons/aboutus/goals.svg";
import wired from "../../../images/icons/aboutus/wire.svg";

export default function Overview({ title, slogan, appUrl }) {
    const [data, setData] = new useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-icons",
                    data: {
                        id: 2,
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
        <div className="mt-15 mb-10 xl:mt-44 xl:mb-38 text-azul text-center">
            <SecondTitle slogan={slogan} title={title} className="text-azul" />
            <div className="lg:mt-10 xl:mt-28 bg-light-grey mt-5 company-overview ">
                <Icon
                    icon={house}
                    title={data[0]?.first_title?.en}
                    text={data[0]?.text?.en}
                    subtitle={data[0]?.second_title?.en}
                />
                <Icon
                    icon={map}
                    title={data[1]?.first_title?.en}
                    text={data[1]?.text?.en}
                    subtitle={data[1]?.second_title?.en}
                />
                <Icon
                    icon={industrial}
                    title={data[2]?.first_title?.en}
                    text={data[2]?.text?.en}
                    subtitle={data[2]?.second_title?.en}
                    className="hidden lg:block"
                />
                <Icon
                    icon={heart}
                    title={data[3]?.first_title?.en}
                    text={data[3]?.text?.en}
                    subtitle={data[3]?.second_title?.en}
                    className="hidden lg:block"
                />
            </div>
            <div className="bg-white company-overview lg:hidden lg:py-0!">
                <Icon
                    icon={industrial}
                    title={data[2]?.first_title?.en}
                    text={data[2]?.text?.en}
                    subtitle={data[2]?.second_title?.en}
                    className="block lg:hidden"
                />
                <Icon
                    icon={heart}
                    title={data[3]?.first_title?.en}
                    text={data[3]?.text?.en}
                    subtitle={data[3]?.second_title?.en}
                    className="block lg:hidden"
                />
            </div>
            <div className="bg-light-grey lg:bg-white lg:grid-cols-2! lg:px-70! xl:px-60! 2xl:px-80! company-overview">
                <Icon
                    icon={graph}
                    title={data[4]?.first_title?.en}
                    text={data[4]?.text?.en}
                    subtitle={data[4]?.second_title?.en}
                />
                <Icon
                    icon={world}
                    title={data[5]?.first_title?.en}
                    text={data[5]?.text?.en}
                    subtitle={data[5]?.second_title?.en}
                />
            </div>
            <div className="bg-white lg:bg-light-grey company-overview">
                <Icon
                    icon={goals}
                    title={data[6]?.first_title?.en}
                    text={data[6]?.text?.en}
                    subtitle={data[6]?.second_title?.en}
                />
                <Icon
                    icon={settings}
                    title={data[7]?.first_title?.en}
                    text={data[7]?.text?.en}
                    subtitle={data[7]?.second_title?.en}
                />
                <Icon
                    icon={roller}
                    title={data[8]?.first_title?.en}
                    text={data[8]?.text?.en}
                    subtitle={data[8]?.second_title?.en}
                    className="hidden lg:block"
                />

                <Icon
                    icon={wired}
                    title={data[9]?.first_title?.en}
                    text={data[9]?.text?.en}
                    subtitle={data[9]?.second_title?.en}
                    className="hidden lg:block"
                />
            </div>
            <div className="bg-light-grey company-overview lg:hidden! lg:py-0!">
                <Icon
                    icon={roller}
                    title={data[8]?.first_title?.en}
                    text={data[8]?.text?.en}
                    subtitle={data[8]?.second_title?.en}
                />

                <Icon
                    icon={wired}
                    title={data[8]?.first_title?.en}
                    text={data[8]?.text?.en}
                    subtitle={data[8]?.second_title?.en}
                />
            </div>
        </div>
    );
}
