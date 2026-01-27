import client1 from "../../../../images/fake/portefolio/client1.png";
import client2 from "../../../../images/fake/portefolio/client2.png";
import client3 from "../../../../images/fake/portefolio/client3.png";
import client4 from "../../../../images/fake/portefolio/client4.png";
import client5 from "../../../../images/fake/portefolio/client5.png";
import client6 from "../../../../images/fake/portefolio/client6.png";
import client7 from "../../../../images/fake/portefolio/client7.png";
import client8 from "../../../../images/fake/portefolio/client8.png";
import client9 from "../../../../images/fake/portefolio/client9.png";
import client10 from "../../../../images/fake/portefolio/client10.png";
import client11 from "../../../../images/fake/portefolio/client11.png";
import client12 from "../../../../images/fake/portefolio/client12.png";
import client13 from "../../../../images/fake/portefolio/client13.png";
import client14 from "../../../../images/fake/portefolio/client14.png";
import client15 from "../../../../images/fake/portefolio/client15.png";
import client16 from "../../../../images/fake/portefolio/client16.png";
import client17 from "../../../../images/fake/portefolio/client17.png";
import client18 from "../../../../images/fake/portefolio/client18.png";
import client19 from "../../../../images/fake/portefolio/client19.png";
import client20 from "../../../../images/fake/portefolio/client20.png";
import client21 from "../../../../images/fake/portefolio/client21.png";
import client22 from "../../../../images/fake/portefolio/client22.png";
import client23 from "../../../../images/fake/portefolio/client23.png";
import client24 from "../../../../images/fake/portefolio/client24.png";

//components
import SecondTitle from "../../Layout/SecondTitle";
import Partner from "./Partner";

export default function Partners() {
    const partnersDestkop = (
        <>
            <div className="margin-website flex mt-8 xl:mt-26 justify-center xl:gap-14">
                <Partner image={client1} />
                <Partner image={client2} />
                <Partner image={client3} />
                <Partner image={client4} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={client5} />
                <Partner image={client6} />
                <Partner image={client7} />
                <Partner image={client8} />
                <Partner image={client9} />
                <Partner image={client10} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={client11} />
                <Partner image={client12} />
                <Partner image={client13} />
                <Partner image={client14} />
                <Partner image={client15} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={client16} />
                <Partner image={client17} />
                <Partner image={client18} />
                <Partner image={client19} />
                <Partner image={client20} />
                <Partner image={client21} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={client22} />
                <Partner image={client23} />
                <Partner image={client24} />
            </div>
        </>
    );

    const partnersTablet = (
        <>
            <div className="margin-website flex mt-8 xl:mt-26 justify-center lg:gap-8">
                <Partner image={client1} />
                <Partner image={client2} />
                <Partner image={client3} />
                <Partner image={client4} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8 justify-center">
                <Partner image={client5} />
                <Partner image={client6} />
                <Partner image={client7} />
                <Partner image={client8} />
                <Partner image={client9} />
                <Partner image={client10} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8  justify-center">
                <Partner image={client11} />
                <Partner image={client12} />
                <Partner image={client13} />
                <Partner image={client14} />
                <Partner image={client15} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8  justify-center">
                <Partner image={client16} />
                <Partner image={client17} />
                <Partner image={client18} />
                <Partner image={client19} />
                <Partner image={client20} />
                <Partner image={client21} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8  justify-center">
                <Partner image={client22} />
                <Partner image={client23} />
                <Partner image={client24} />
            </div>
        </>
    );

    const partnersMobile = (
        <>
            <div className="margin-website mt-8 xl:mt-26 partner-mobile">
                <Partner image={client1} />
                <Partner image={client2} />
                <Partner image={client3} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client4} />
                <Partner image={client6} />
                <Partner image={client7} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client8} />
                <Partner image={client9} />
                <Partner image={client10} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client11} />
                <Partner image={client12} />
                <Partner image={client13} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client14} />
                <Partner image={client15} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client16} />
                <Partner image={client17} />
                <Partner image={client18} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client19} />
                <Partner image={client20} />
                <Partner image={client21} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={client22} />
                <Partner image={client23} />
                <Partner image={client24} />
            </div>
        </>
    );

    return (
        <div className="bg-light-grey pb-15 xl:pb-52">
            <SecondTitle
                slogan="Chosen by Industry Leaders Worldwide"
                title="Partners Who<br> Trust Our Work"
                className="text-azul pt-10 xl:pt-36"
            />
            <div className="hidden xl:block"> {partnersDestkop}</div>
            <div className="hidden lg:block xl:hidden"> {partnersTablet}</div>
            <div className="block lg:hidden"> {partnersMobile}</div>
        </div>
    );
}
