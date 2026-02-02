//icons
import logo from "../../../images/logo/logo-mini.svg";
import triangleGrey from "../../../images/icons/triangle-grey.svg";

export default function Map({ title, slogan, video }) {
    return (
        <div className="gradient-map relative text-white margin-website flex justify-center flex-col w-full">
            <div className="w-full flex justify-end flex-col items-end pt-10 xl:pt-48">
                <img src={logo} className="w-5 lg:w-6 xl:w-7"></img>
                <h1
                    className="font-eurostile text-[15px] leading-[20px] pt-3 lg:text-[30px] lg:leading-[38px] xl:text-[38px] xl:leading-[45px] font-medium text-right uppercase xl:pt-10"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
            <div className="w-full flex justify-center ">
                {video && (
                    <video
                        key={video}
                        src={video}
                        className="xl:max-w-[800px]"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                )}
            </div>

            <img
                src={triangleGrey}
                className="w-10 xl:w-fit absolute top-0 left-1/2 -translate-x-1/2"
            ></img>
            <div className="flex items-center xl:items-start xl:pl-12 pt-4 xl:pt-0">
                <div className="h-3 w-3 lg:w-4 lg:h-4 xl:w-[23px] xl:h-[23px] bg-laranja rounded-full mb-2 mr-1  lg:mb-2 lg:mr-3"></div>
                <p
                    className="font-bold text-base "
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
            </div>
        </div>
    );
}
