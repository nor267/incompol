//components
import SecondTitle from "../../Layout/SecondTitle";
import Partner from "./Partner";

export default function Partners({ title, slogan, partners, appUrl }) {
    const partnersDestkop = (
        <>
            <div className="margin-website flex mt-8 xl:mt-15 justify-center xl:gap-10">
                <Partner image={appUrl + partners[0]?.icon} />
                <Partner image={appUrl + partners[1]?.icon} />
                <Partner image={appUrl + partners[2]?.icon} />
                <Partner image={appUrl + partners[3]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-10 xl:gap-10 justify-center">
                <Partner image={appUrl + partners[4]?.icon} />
                <Partner image={appUrl + partners[5]?.icon} />
                <Partner image={appUrl + partners[6]?.icon} />
                <Partner image={appUrl + partners[7]?.icon} />
                <Partner image={appUrl + partners[8]?.icon} />
                <Partner image={appUrl + partners[9]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-10 xl:gap-10 justify-center">
                <Partner image={appUrl + partners[10]?.icon} />
                <Partner image={appUrl + partners[11]?.icon} />
                <Partner image={appUrl + partners[12]?.icon} />
                <Partner image={appUrl + partners[13]?.icon} />
                <Partner image={appUrl + partners[14]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-10 xl:gap-10 justify-center">
                <Partner image={appUrl + partners[15]?.icon} />
                <Partner image={appUrl + partners[16]?.icon} />
                <Partner image={appUrl + partners[17]?.icon} />
                <Partner image={appUrl + partners[18]?.icon} />
                <Partner image={appUrl + partners[19]?.icon} />
                <Partner image={appUrl + partners[20]?.icon} />
            </div>
            <div className="margin-website flex xl:mt-10 xl:gap-10 justify-center">
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
        <div className="bg-light-grey pb-15 xl:pb-20">
            <SecondTitle
                slogan={slogan}
                title={title}
                className="text-azul pt-10 xl:pt-15 text-center"
            />
            <div className="hidden xl:block"> {partnersDestkop}</div>
            <div className="hidden lg:block xl:hidden"> {partnersTablet}</div>
            <div className="block lg:hidden"> {partnersMobile}</div>
        </div>
    );
}
