//icons
import logo from "../../../images/logo/logo-mini.svg";
import triangleGrey from "../../../images/icons/triangle-grey.svg";

//fake images
import mapa from "../../../images/fake/portefolio/mapa.png";
export default function Map() {
    return (
        <div className="gradient-map relative text-white margin-website flex justify-center flex-col w-full">
            <div className="w-full flex justify-end flex-col items-end pt-10 xl:pt-48">
                <img src={logo} className="w-5 xl:w-fit"></img>
                <h1 className="font-eurostile text-[15px] leading-[20px] pt-3 xl:text-[44px] xl:leading-[50px] font-medium text-right uppercase xl:pt-10">
                    Excellence<br></br> Without<br></br> Borders
                </h1>
            </div>
            <div className="w-full flex justify-center ">
                <img src={mapa} className="xl:max-w-[1440px]"></img>
            </div>

            <img
                src={triangleGrey}
                className="w-10 xl:w-fit absolute top-0 left-1/2 -translate-x-1/2"
            ></img>

            <p className="font-bold text-base pt-4 xl:pt-0 xl:pl-12">
                Our presence has grown here.
            </p>
        </div>
    );
}
