import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
//icons
import logo from "../../../images/logo/logo-mini.svg";
import triangleGrey from "../../../images/icons/triangle-grey.svg";

export default function Map({ title, slogan, video, image1, image2, image3 }) {
    return (
        <div className="gradient-map relative text-white margin-website flex justify-center flex-col w-ful">
            <div className="w-full flex justify-end flex-col items-end pt-10 xl:pt-20">
                <img src={logo} className="w-5 lg:w-6 xl:w-7"></img>
                <h1
                    className="font-eurostile text-[15px] leading-[20px] pt-3 lg:text-[30px] lg:leading-[38px] xl:text-[38px] xl:leading-[45px] font-medium text-right uppercase xl:pt-10"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
            <div className="w-full flex justify-center items-center ">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px]"
                >
                    <SwiperSlide key={1}>
                        <img src={image1} className="" />
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <img src={image2} className="" />
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <img src={image3} className="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <img
                src={triangleGrey}
                className="w-10 xl:w-fit absolute top-0 left-1/2 -translate-x-1/2"
            ></img>
            <div className="flex items-center xl:items-start xl:pl-12 pt-4 xl:pt-0">
                <div className="h-3 w-3 lg:w-4 lg:h-4 xl:w-[23px] xl:h-[23px] bg-laranja rounded-full mb-2 mr-1  lg:mb-2 lg:mr-3"></div>
                <p
                    className="font-bold text-base"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
            </div>
        </div>
    );
}
