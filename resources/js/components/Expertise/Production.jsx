//images
import market from "../../../images/fake/expertise/market.jpg";

//components
import SecondTitle from "../Layout/SecondTitle";

//icons
import peca from "../../../images/icons/expertise/peca.png";
import peca2 from "../../../images/icons/expertise/peca2.png";

export default function Production() {
    return (
        <div className="bg-light-grey text-azul flex justify-center items-center flex-col relative">
            <SecondTitle
                slogan="From concept to production"
                title="Engineering Expertise"
                className="pt-15 xl:pt-20 text-azul"
            />
            <div className="mt-5 xl:mt-36 flex flex-col xl:flex-row xl:gap-32 items-center mb-5 xl:mb-64 px-8 xl:px-0">
                <div>
                    <p className="text-base lg:px-[80px] xl:px-0 xl:max-w-[440px]">
                        Our engineering team works with clients from concept to
                        production, providing design, prototyping, and tooling
                        support to ensure optimal manufacturability and
                        performance.<br></br> Our integrated approach allows for
                        faster prototyping, optimized production processes, and
                        continuous improvement — guaranteeing results that meet
                        the most demanding industry standards.
                    </p>
                </div>
                <div className="pt-8 xl:pt-0 pb-15 xl:pb-0">
                    <img src={market}></img>
                </div>
            </div>
            <img
                src={peca}
                className="absolute right-0 bottom-0 h-[150px] xl:h-[600px]"
            ></img>
            <img
                src={peca2}
                className="absolute left-0 -top-12 xl:top-40 h-[140px] xl:h-[400px]"
            ></img>
        </div>
    );
}
