import Icon from "./Icon";

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

export default function Overview() {
    return (
        <div className="xl:mt-44 xl:mb-38 text-azul text-center">
            <h4 className="xl:text-[17px] xl:leading-[22px] tracking-[0.03em] capitalize">
                Company overview
            </h4>
            <h1 className="font-eurostile font-bold xl:text-[32px] xl:leading-[32px] tracking-[0.14em] uppercase xl:mt-8">
                incompol at a glance
            </h1>
            <div className="bg-light-grey xl:max-h-[295px] w-full flex justify-between items-start xl:mt-28 xl:px-80 xl:py-16">
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
                />
                <Icon icon={heart} title="120" text="Employees" />
            </div>
            <div className="bg-white xl:max-h-[295px] w-full flex justify-center items-start xl:gap-110 xl:py-16">
                <Icon
                    icon={graph}
                    title="€ 15.4 M"
                    text="Sales 2024"
                    subtitle="(outlook 2025: €23M)"
                />
                <Icon
                    icon={world}
                    title="4 markets"
                    text="Automotive, Home <br>appliance, Aerospace"
                />
            </div>
            <div className="bg-light-grey xl:max-h-[295px] w-full flex justify-between items-start xl:px-80 xl:py-16">
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
