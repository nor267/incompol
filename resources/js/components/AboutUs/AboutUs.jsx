import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";

import empresa from "../../../images/fake/aboutus/empresa.jpg";
import empresa2 from "../../../images/fake/aboutus/empresa2.jpg";
import Overview from "./Overview";
import ShapeFuture from "./ShapeFuture";
import History from "./History";
import Certifications from "./Certifications";
import Footer from "../Layout/Footer";
import Portefolio from "./Portefolio";

export default function AboutUs() {
    return (
        <>
            <NavbarPages />
            <Title
                title="About us"
                slogan="a little<br> about our<br> history"
                text="Founded in 1987, <strong>INCOMPOL</strong> emerged to meet the call from major automotive manufacturers seeking innovative partners for components and integrated functions.<br><br>
With decades of experience in metal transformation, we design and produce high-quality components that support some of the world’s leading industries — from automotive to advanced engineering.<br><br>
Our commitment goes beyond manufacturing. We invest in technology, people, and sustainability to ensure efficiency, reliability, and continuous improvement in every project we undertake.<br><br>
<strong>Every part we create carries our signature of excellence — built on knowledge, driven by innovation, and forged in metal.</strong>"
            />
            <div className="flex justify-center  items-center w-full mt-15 xl:mt-36 relative">
                <img
                    src={empresa}
                    className="object-cover w-full xl:max-w-[1259px] h-[200px] xl:h-[637px] 4xl:max-w-[1700px] 4xl:h-[800px]"
                ></img>
                <div className="bg-laranja xl:w-[300px] xl:h-[300px] rounded-full hidden xl:block xl:absolute right-69 -bottom-20">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="xl:w-[294px] xl:h-[294px] rounded-full overflow-hidden ">
                            <img
                                src={empresa2}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Overview />
            <ShapeFuture />
            <History />
            <Certifications />
            <Portefolio />
            <Footer work={true} />
        </>
    );
}
