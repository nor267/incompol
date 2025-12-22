import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";

import empresa from "../../../images/fake/aboutus/empresa.jpg";
import empresa2 from "../../../images/fake/aboutus/empresa2.jpg";
import Overview from "./Overview";
import HumanResources from "./HumanResources";
import ShapeFuture from "./ShapeFuture";
import History from "./History";

export default function AboutUs() {
    return (
        <>
            <NavbarPages />
            <Title
                title="About us"
                slogan="a little about our history"
                text="Founded in 1987, <strong>INCOMPOL</strong> emerged to meet the call from major automotive manufacturers seeking innovative partners for components and integrated functions.<br><br>
With decades of experience in metal transformation, we design and produce high-quality components that support some of the world’s leading industries — from automotive to advanced engineering.<br><br>
Our commitment goes beyond manufacturing. We invest in technology, people, and sustainability to ensure efficiency, reliability, and continuous improvement in every project we undertake.<br><br>
<strong>Every part we create carries our signature of excellence — built on knowledge, driven by innovation, and forged in metal.</strong>"
            />
            <div className="flex justify-center  items-center w-full xl:mt-36 relative">
                <img
                    src={empresa}
                    className="object-cover w-full xl:max-w-[1259px]  xl:max-h-[637px] h-full"
                ></img>
                <div className="bg-laranja xl:w-[300px] xl:h-[300px] rounded-full absolute right-69 -bottom-20 ">
                    <div className="flex justify-center items-center w-full h-full">
                        <div class="xl:w-[294px] xl:h-[294px] rounded-full overflow-hidden ">
                            <img
                                src={empresa2}
                                alt=""
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Overview />
            <HumanResources />
            <ShapeFuture />
            <History />
        </>
    );
}
