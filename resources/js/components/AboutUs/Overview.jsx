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

export default function Overview({ title, slogan, webPageId }) {
    return (
        <div className="mt-15 mb-10 xl:mt-44 xl:mb-38 text-azul text-center">
            <SecondTitle slogan={slogan} title={title} className="text-azul" />
            <div className="lg:mt-10 xl:mt-28 bg-light-grey mt-5 company-overview ">
                <Icon icon={house} title="1987" text="Foundation" />

                <Icon
                    icon={map}
                    title="Porto alto,"
                    text="Location"
                    subtitle="Portugal"
                />
                <Icon
                    icon={industrial}
                    title="2 sites <br> 17000 M2"
                    text="Facilities"
                    className="hidden lg:block"
                />
                <Icon
                    icon={heart}
                    title="120"
                    text="Employees"
                    className="hidden lg:block"
                />
            </div>
            <div className="bg-white company-overview lg:hidden lg:py-0!">
                <Icon
                    icon={industrial}
                    title="2 sites <br> 17000 M2"
                    text="Facilities"
                    className="block lg:hidden"
                />
                <Icon
                    icon={heart}
                    title="120"
                    text="Employees"
                    className="block lg:hidden"
                />
            </div>
            <div className="bg-light-grey lg:bg-white lg:grid-cols-2! lg:px-70! xl:px-80! company-overview">
                <Icon
                    icon={graph}
                    title="€ 15.4 M"
                    text="Sales 2024"
                    subtitle="(outlook 2025: €23M)"
                />
                <Icon
                    icon={world}
                    title="4 markets"
                    text="Automotive, Home & Appliance,<br> Aerospace & Defence"
                />
            </div>
            <div className="bg-white lg:bg-light-grey company-overview">
                <Icon
                    icon={goals}
                    title="Core business"
                    text="High-precision metallic<br> parts for high volume<br> industries"
                />
                <Icon icon={settings} title="17 M" text="Parts supplied 2024" />
                <Icon
                    icon={roller}
                    title="6000 TON"
                    text="Transformed raw<br> material 2024"
                    className="hidden lg:block"
                />

                <Icon
                    icon={wired}
                    title="Technologies"
                    text="Stamping, Machining,<br> Turning, Welding<br> & Assembling"
                    className="hidden lg:block"
                />
            </div>
            <div className="bg-light-grey company-overview lg:hidden! lg:py-0!">
                <Icon
                    icon={roller}
                    title="6000 TON"
                    text="Transformed raw<br> material 2024"
                />

                <Icon
                    icon={wired}
                    title="Technologies"
                    text="Stamping, Machining,<br> Turning, Welding<br> & Assembling"
                />
            </div>
        </div>
    );
}
