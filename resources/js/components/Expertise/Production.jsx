//images
import market from "../../../images/fake/expertise/market.jpg";
import SecondTitle from "../Layout/SecondTitle";

export default function Production() {
    return (
        <div className="bg-light-grey text-azul flex justify-center items-center flex-col">
            <SecondTitle
                slogan="From concept to production"
                title="Engineering Expertise"
                className="xl:pt-20 text-azul"
            />
            <div className="xl:mt-36 flex xl:gap-32 items-center xl:mb-64">
                <div>
                    <p className="text-base xl:max-w-[440px]">
                        Our engineering team works with clients from concept to
                        production, providing design, prototyping, and tooling
                        support to ensure optimal manufacturability and
                        performance.<br></br> Our integrated approach allows for
                        faster prototyping, optimized production processes, and
                        continuous improvement — guaranteeing results that meet
                        the most demanding industry standards.
                    </p>
                </div>
                <div>
                    <img src={market}></img>
                </div>
            </div>
        </div>
    );
}
