import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

//icons
import closeMenu from "../../../../images/icons/close-component.svg";

export default function NewInfo({ news, initialIndex, onClose }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-[#2E2E2E]/70">
                <button
                    className="fixed top-10 right-10 z-50 cursor-pointer"
                    onClick={onClose}
                >
                    <img src={closeMenu} />
                </button>

                <Swiper
                    initialSlide={initialIndex}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    className="h-full"
                    allowTouchMove={true}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                    touchStartPreventDefault={false}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                >
                    {news.map((item, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="h-full overflow-y-auto flex justify-center">
                                <div className="flex flex-col items-center xl:pt-40 ">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="xl:w-[1200px] xl:h-[550px] object-cover"
                                    />

                                    <div className="bg-white xl:w-[1200px] py-20 px-8 xl:py-[150px] xl:pl-[124px] text-azul relative">
                                        <h2 className="font-eurostile text-[18px] xl:text-[24px] tracking-[0.14em] uppercase font-bold">
                                            {item.title}
                                        </h2>

                                        <p className="text-base font-bold text-azul absolute top-4 xl:top-13 right-8 xl:right-20">
                                            {item.date}
                                        </p>

                                        <p
                                            className="pt-5 xl:pt-20 text-base xl:max-w-[670px]"
                                            dangerouslySetInnerHTML={{
                                                __html: item.content,
                                            }}
                                        />
                                        <div className="absolute bottom-8 right-8 xl:bottom-20 xl:right-20 flex gap-3">
                                            <button className="swiper-button-prev-custom cursor-pointer">
                                                <svg
                                                    width="29"
                                                    height="25"
                                                    viewBox="0 0 18 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.3869e-05 10.1734L17.5676 20.3125V0L4.3869e-05 10.1734Z"
                                                        fill={
                                                            activeIndex > 0
                                                                ? "#1E22AA"
                                                                : "#CFCFCF"
                                                        }
                                                    />
                                                </svg>
                                            </button>

                                            <button className="swiper-button-next-custom cursor-pointer">
                                                <svg
                                                    width="29"
                                                    height="25"
                                                    viewBox="0 0 18 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M17.5676 10.1391L0 -1.71661e-05L0 20.3125L17.5676 10.1391Z"
                                                        fill={
                                                            activeIndex ==
                                                            news.length - 1
                                                                ? "#CFCFCF"
                                                                : "#1E22AA"
                                                        }
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
