import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

//compents
import New from "./New";
import NewInfo from "./NewInfo";

//configs
import { API_URL } from "../../../config";

export default function News({ appUrl }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-news",
                    data: {
                        slug: "/",
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    return (
        <div className="bg-light-grey lg:pl-[100px]  md:pl-[80px] xl:pl-[137px] pb-20 xl:pb-26 relative w-full">
            <div className="flex justify-between items-end w-full">
                <section className="text-azul pt-15 xl:pt-18 pl-5  md:pl-0 4xl:pl-[120px]">
                    <p className="uppercase text-[14px] xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                        what is happening
                    </p>
                    <h1 className="uppercase font-eurostile font-bold text-[18px] xl:text-[32px] xl:leading-[32px] tracking-[0.14em] xl:pt-5">
                        news
                    </h1>
                </section>
                <div className="flex justify-end gap-1 md:gap-2 xl:gap-4 pr-5 md:pr-[80px] lg:pr-[100px] xl:pr-[137px]">
                    <button className="swiper-button-prev-custom cursor-pointer">
                        <svg
                            width="18"
                            height="21"
                            viewBox="0 0 18 21"
                            xmlns="http://www.w3.org/2000/svg"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ cursor: "pointer" }}
                        >
                            <path
                                d="M0 10.1734L17.5676 20.3125V0L0 10.1734Z"
                                fill={
                                    activeIndex > 0 && isHovered
                                        ? "#FF671D" // hover ONLY when selected
                                        : activeIndex > 0
                                          ? "#1E22AA"
                                          : "#CFCFCF"
                                }
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
                            onMouseEnter={() => setIsHoveredRight(true)}
                            onMouseLeave={() => setIsHoveredRight(false)}
                            style={{ cursor: "pointer" }}
                        >
                            <path
                                d="M17.5676 10.1391L0 -1.71661e-05L0 20.3125L17.5676 10.1391Z"
                                fill={
                                    activeIndex !== data.length - 2 &&
                                    isHoveredRight
                                        ? "#FF671D"
                                        : activeIndex == data.length - 2
                                          ? "#CFCFCF" // disabled / gray
                                          : "#1E22AA" // selected / blue
                                }
                            />
                        </svg>
                    </button>
                </div>
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
                {data.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="my-swiper my-swiper-slide "
                    >
                        <div
                            onClick={() => {
                                setActiveIndex(index);
                                setIsModalOpen(true);
                            }}
                        >
                            <New
                                image={appUrl + item.banner_image}
                                title={item.title?.en}
                                date={new Date(item.date).toLocaleDateString(
                                    "en-GB",
                                )}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isModalOpen && (
                <NewInfo
                    news={data}
                    appUrl={appUrl}
                    initialIndex={activeIndex}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
