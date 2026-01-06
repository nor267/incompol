//fake images
import banner from "../../../images/fake/sustainability/banner.jpg";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import Footer from "../Layout/Footer";
//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Commitment from "./Commitment";
import Goals from "./Goals";

export default function Sustainability() {
    return (
        <>
            <NavbarPages />
            <Title
                title="SUSTAINABILITY"
                slogan="Respect the Future"
                text="At <strong>INCOMPOL</strong>, sustainability is not an afterthought, it’s built into how we design, produce and grow.<br><br>
We believe industrial excellence must go hand in hand with environmental responsibility, ensuring that every part we create contributes to a more efficient and sustainable future."
            />

            <div className="mt-15 xl:mt-32 relative">
                <img
                    src={banner}
                    className="w-full object-cover xl:h-[794px]"
                ></img>
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src={triangleWhite} className="h-5 xl:h-fit"></img>
                </div>
                <div className="absolute bottom-1 left-8 xl:left-[120px] xl:bottom-[113px]">
                    <h1 className="text-white uppercase font-eurostile font-medium xl:text-[72px] xl:leading-[77px] w-full max-w-[250px] xl:max-w-[800px]">
                        Committed to a Responsible Future
                    </h1>
                </div>
            </div>
            <Commitment />
            <Goals />
            <Footer />
        </>
    );
}
