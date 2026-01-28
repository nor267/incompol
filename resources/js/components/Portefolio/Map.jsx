//icons
import logo from "../../../images/logo/logo-mini.svg";
import triangleGrey from "../../../images/icons/triangle-grey.svg";

export default function Map({ title, slogan, video }) {
    return (
        <div className="gradient-map relative text-white margin-website flex justify-center flex-col w-full">
            <div className="w-full flex justify-end flex-col items-end pt-10 xl:pt-48">
                <img src={logo} className="w-5 xl:w-7"></img>
                <h1
                    className="font-eurostile text-[15px] leading-[20px] pt-3 xl:text-[38px] xl:leading-[45px] font-medium text-right uppercase xl:pt-10"
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
            <div className="flex items-start xl:pl-12 ">
                <div className="w-[23px] h-[23px] bg-laranja rounded-full xl:mr-3"></div>
                <p
                    className="font-bold text-base pt-4 xl:pt-0 "
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
            </div>
        </div>
    );
}
