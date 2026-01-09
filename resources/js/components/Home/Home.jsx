import banner from "../../../images/fake/home/banner.webp";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Crafting from "./Crafting";
import Expertise from "./Expertise";
import Manucfacture from "./Manufacture";
import News from "./News/News";
import Sectors from "./Sectors";

export default function Home() {
    return (
        <>
            <div className="relative xl:h-screen">
                <img
                    src={banner}
                    className="object-cover w-full h-[550px] xl:h-screen overflow-hidden"
                ></img>
                <Navbar />
            </div>
            <Expertise />
            <News />
            <Manucfacture />
            <Sectors />
            <Crafting />
            <Footer work={true} />
        </>
    );
}
