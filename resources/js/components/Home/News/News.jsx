import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import New from "./New";

//fake images
import new1 from "../../../../images/fake/news/news1.png";
import new2 from "../../../../images/fake/news/news2.png";
import new3 from "../../../../images/fake/news/news3.png";

export default function News() {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex);
    return (
        <div className="bg-light-grey xl:pl-[137px] xl:pb-26 relative">
            <section className="text-azul pt-5 xl:pt-18 pl-5">
                <p className="uppercase text-[14px]  xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                    what is happening
                </p>
                <h1 className="uppercase font-eurostile font-bold text-[18px] xl:text-[32px] xl:leading-[32px] tracking-[0.14em] xl:pt-5">
                    news
                </h1>
            </section>
            <div className="flex justify-end gap-1 xl:gap-4 pr-5 xl:pr-[137px]">
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
                            fill={activeIndex > 0 ? "#1E22AA" : "#CFCFCF"}
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
                            fill={activeIndex == 1 ? "#CFCFCF" : "#1E22AA"}
                        />
                    </svg>
                </button>
            </div>
            <Swiper
                slidesPerView={2.5}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2.5,
                    },
                }}
                spaceBetween={72}
                modules={[Pagination, Navigation]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                className="mySwiper mt-5 xl:mt-20"
            >
                <SwiperSlide>
                    <New
                        image={new1}
                        title="Título da noticia aqui"
                        date="17/01/23"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <New
                        image={new2}
                        title="Título da noticia aqui"
                        date="17/01/23"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <New
                        image={new3}
                        title="Título da noticia aqui"
                        date="17/01/23"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
