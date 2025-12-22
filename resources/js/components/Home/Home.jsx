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
            <div className="relative">
                <img src={banner} className="object-cover w-full"></img>
                <Navbar />
            </div>
            <Expertise />
            <Manucfacture />
            <Sectors />
            <News />
            <Crafting />
            <Footer />
        </>
    );
}
