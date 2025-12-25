//fake images
import icon1 from "../../../images/fake/sustainability/icon1.svg";
import icon2 from "../../../images/fake/sustainability/icon2.svg";
import icon3 from "../../../images/fake/sustainability/icon3.svg";

//components
import SecondTitle from "../Layout/SecondTitle";
import GoalIcon from "./GoalIcon";
import Recognition from "./Recognition";

export default function Goals() {
    return (
        <div>
            <SecondTitle
                title="what we have<br> achieved"
                slogan="Goals achieved"
                className=" text-azul"
            />
            <div className="flex justify-center items-center xl:mt-20 xl:gap-14">
                <GoalIcon
                    icon={icon1}
                    title="New photovoltaic solar plant installed"
                    className="bg-azul w-full h-full text-white"
                    text="<strong>462 solar</strong> photovoltaic modules<br>
<strong>400 MWh</strong> annual production<br><strong>37% autonomy</strong>"
                />
                <GoalIcon
                    icon={icon2}
                    title="100% green electricity since November 2025"
                    className="bg-light-grey w-full h-full text-azul"
                    text="<strong>462 solar</strong> photovoltaic modules<br>
<strong>400 MWh</strong> annual production<br><strong>37% autonomy</strong>"
                />
                <GoalIcon
                    icon={icon3}
                    title="Shop floor: <br>new LED light bulbs installed"
                    className="bg-azul w-full h-full text-white"
                    text="63% reduction on electricity<br>consumption for shop floor lighting"
                />
            </div>
            <Recognition />
        </div>
    );
}
