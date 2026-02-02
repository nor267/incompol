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

export default function Partners({ title, slogan, partners, appUrl }) {
    console.log(partners);

    const partnersDestkop = (
        <>
            <div className="margin-website flex mt-8 xl:mt-26 justify-center xl:gap-14">
                <Partner image={appUrl + partners[0]?.icon} />
                <Partner image={appUrl + partners[1]?.icon} />
                <Partner image={appUrl + partners[2]?.icon} />
                <Partner image={appUrl + partners[3]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={appUrl + partners[4]?.icon} />
                <Partner image={appUrl + partners[5]?.icon} />
                <Partner image={appUrl + partners[6]?.icon} />
                <Partner image={appUrl + partners[7]?.icon} />
                <Partner image={appUrl + partners[8]?.icon} />
                <Partner image={appUrl + partners[9]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={appUrl + partners[10]?.icon} />
                <Partner image={appUrl + partners[11]?.icon} />
                <Partner image={appUrl + partners[12]?.icon} />
                <Partner image={appUrl + partners[13]?.icon} />
                <Partner image={appUrl + partners[14]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={appUrl + partners[15]?.icon} />
                <Partner image={appUrl + partners[16]?.icon} />
                <Partner image={appUrl + partners[17]?.icon} />
                <Partner image={appUrl + partners[18]?.icon} />
                <Partner image={appUrl + partners[19]?.icon} />
                <Partner image={appUrl + partners[20]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-14 xl:gap-14 justify-center">
                <Partner image={appUrl + partners[21]?.icon} />
                <Partner image={appUrl + partners[22]?.icon} />
                <Partner image={appUrl + partners[23]?.icon} />
            </div>
        </>
    );

    const partnersTablet = (
        <>
            <div className="margin-website flex mt-8 xl:mt-26 justify-center lg:gap-8">
                <Partner image={appUrl + partners[0]?.icon} />
                <Partner image={appUrl + partners[1]?.icon} />
                <Partner image={appUrl + partners[2]?.icon} />
                <Partner image={appUrl + partners[3]?.icon} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8 justify-center">
                <Partner image={appUrl + partners[4]?.icon} />
                <Partner image={appUrl + partners[5]?.icon} />
                <Partner image={appUrl + partners[6]?.icon} />
                <Partner image={appUrl + partners[7]?.icon} />
                <Partner image={appUrl + partners[8]?.icon} />
                <Partner image={appUrl + partners[9]?.icon} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8 justify-center">
                <Partner image={appUrl + partners[10]?.icon} />
                <Partner image={appUrl + partners[11]?.icon} />
                <Partner image={appUrl + partners[12]?.icon} />
                <Partner image={appUrl + partners[13]?.icon} />
                <Partner image={appUrl + partners[14]?.icon} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8  justify-center">
                <Partner image={appUrl + partners[15]?.icon} />
                <Partner image={appUrl + partners[16]?.icon} />
                <Partner image={appUrl + partners[17]?.icon} />
                <Partner image={appUrl + partners[18]?.icon} />
                <Partner image={appUrl + partners[19]?.icon} />
                <Partner image={appUrl + partners[20]?.icon} />
            </div>
            <div className="margin-website flex lg:mt-5 lg:gap-8  justify-center">
                <Partner image={appUrl + partners[21]?.icon} />
                <Partner image={appUrl + partners[22]?.icon} />
                <Partner image={appUrl + partners[23]?.icon} />
            </div>
        </>
    );

    const partnersMobile = (
        <>
            <div className="margin-website mt-8 xl:mt-26 partner-mobile">
                <Partner image={appUrl + partners[1]?.icon} />
                <Partner image={appUrl + partners[2]?.icon} />
                <Partner image={appUrl + partners[3]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[4]?.icon} />
                <Partner image={appUrl + partners[5]?.icon} />
                <Partner image={appUrl + partners[6]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[7]?.icon} />
                <Partner image={appUrl + partners[8]?.icon} />
                <Partner image={appUrl + partners[9]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[10]?.icon} />
                <Partner image={appUrl + partners[11]?.icon} />
                <Partner image={appUrl + partners[12]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[13]?.icon} />
                <Partner image={appUrl + partners[14]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[15]?.icon} />
                <Partner image={appUrl + partners[16]?.icon} />
                <Partner image={appUrl + partners[17]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[18]?.icon} />
                <Partner image={appUrl + partners[19]?.icon} />
                <Partner image={appUrl + partners[20]?.icon} />
            </div>
            <div className="margin-website partner-mobile">
                <Partner image={appUrl + partners[21]?.icon} />
                <Partner image={appUrl + partners[22]?.icon} />
                <Partner image={appUrl + partners[23]?.icon} />
            </div>
        </>
    );

    return (
        <div className="bg-light-grey pb-15 xl:pb-52">
            <SecondTitle
                slogan={slogan}
                title={title}
                className="text-azul pt-10 xl:pt-36 text-center"
            />
            <div className="hidden xl:block"> {partnersDestkop}</div>
            <div className="hidden lg:block xl:hidden"> {partnersTablet}</div>
            <div className="block lg:hidden"> {partnersMobile}</div>
        </div>
    );
}
