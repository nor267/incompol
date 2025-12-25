import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import new1 from "../../../../images/fake/news/news1.png";
import new2 from "../../../../images/fake/news/news2.png";
import new3 from "../../../../images/fake/news/news3.png";
import Job from "./job";

export default function Jobs() {
    return (
        <div className="bg-light-grey xl:pl-[137px] xl:pb-26 relative">
            <section className="text-azul xl:pt-18 ">
                <p className="uppercase xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                    Career Opportunities
                </p>
                <h1 className="uppercase font-eurostile font-bold xl:text-[32px] xl:leading-[32px] tracking-[0.14em] xl:pt-5">
                    We’re Hiring
                </h1>
            </section>
            <div className="flex justify-end xl:gap-4 xl:pr-[137px]">
                <button className="swiper-button-prev-custom cursor-pointer">
                    <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.3869e-05 10.1734L17.5676 20.3125V0L4.3869e-05 10.1734Z"
                            fill="#CFCFCF"
                        />
                    </svg>
                </button>

                <button className="swiper-button-next-custom cursor-pointer">
                    <svg
                        width="18"
                        height="21"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5676 10.1391L0 -1.71661e-05L0 20.3125L17.5676 10.1391Z"
                            fill="#1E22AA"
                        />
                    </svg>
                </button>
            </div>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={72}
                modules={[Pagination, Navigation]}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                className="mySwiper xl:mt-20"
            >
                <SwiperSlide>
                    <Job image={new1} title="CNC Operator" date="17/01/23" />
                </SwiperSlide>
                <SwiperSlide>
                    <Job
                        image={new2}
                        title="Internship – Production & Engineering"
                        date="17/01/23"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Job image={new3} title="CNC Operator" date="17/01/23" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
