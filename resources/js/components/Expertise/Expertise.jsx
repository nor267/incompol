//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Technologies from "./Technologies/Technologies";
import Production from "./Production";

//images
import banner from "../../../images/fake/expertise/banner-expertise.jpg";
import Footer from "../Layout/Footer";
import Certification from "./Certification";
import Laboratory from "./Laboratory";
import Crafting from "./Crafting";

export default function Expertise() {
    return (
        <>
            <NavbarPages />
            <Title
                title="Capabilities expertise"
                slogan="Crafting with precision."
                text="For over 30 years, INCOMPOL has combined technical know-how, innovation, and precision manufacturing to meet the demands of leading companies in the automotive, aerospace, and electrical sectors.<br><br>
Our industrial capacity and engineering expertise make us a trusted partner worldwide."
            />
            <div className="xl:mt-46">
                <img
                    src={banner}
                    className="w-full object-cover xlmax-h-[600px]"
                ></img>
            </div>
            <Technologies />
            <Production />
            <Certification />
            <Laboratory />
            <Crafting />
            <Footer />
        </>
    );
}
