import { Swiper, SwiperSlide } from "swiper/react";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../config";
import i18n from "../../../../i18n/i18n";

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

//componets
import Job from "./job";
import NewInfo from "../../Home/News/NewInfo";

export default function Jobs({ title, slogan }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const [jobs, setJobs] = useState([]);
    const appUrl = window.location.origin + "/storage/";
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-jobs",
                });

                setJobs(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    console.log(jobs);

    return (
        <div className="bg-light-grey xl:pl-[137px] pb-15 xl:pb-26 relative">
            <div className="flex justify-between items-end w-full">
                <section className="text-azul  px-8 md:px-[80px] lg:px-[100px] xl:px-0 pt-10 xl:pt-18 ">
                    <p
                        className="uppercase md:text-[17px] xl:text-[17px] xl:leading-[22px] tracking-[0.03em]"
                        dangerouslySetInnerHTML={{
                            __html: slogan,
                        }}
                    ></p>
                    <h1
                        className="uppercase font-eurostile font-bold  md:text-[25px] xl:text-[32px] xl:leading-[32px] tracking-[0.14em] md:pt-1 lg:pt-2 xl:pt-5"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                </section>
                <div className="flex justify-end gap-2 xl:gap-4 pr-8 md:pr-[80px] lg:pr-[100px] xl:pr-[137px]">
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
                                    activeIndex !== 1 && isHoveredRight
                                        ? "#FF671D"
                                        : activeIndex == 1
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
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                className="mySwiper mt-5 xl:mt-20"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {jobs.map((item, index) => (
                    <SwiperSlide>
                        <div
                            onClick={() => {
                                setActiveIndex(index);
                                setIsModalOpen(true);
                            }}
                        >
                            <Job
                                image={appUrl + item?.banner_image}
                                title={
                                    i18n.language === "pt"
                                        ? item.title?.pt
                                        : item.title?.en
                                }
                                date={new Date(item?.date).toLocaleDateString(
                                    "en-GB",
                                )}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isModalOpen && (
                <NewInfo
                    news={jobs}
                    appUrl={appUrl}
                    initialIndex={activeIndex}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
