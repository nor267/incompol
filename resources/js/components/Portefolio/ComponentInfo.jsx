import i18n from "../../../i18n/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
//icons
import closeComponent from "../../../images/icons/close-component.svg";

export default function ComponentInfo({
    image,
    title,
    onClick,
    text,
    secondText,
    gallery,
    appUrl,
}) {
    return (
        <div className="h-screen bg-azul flex justify-center items-center fixed top-0 z-80 w-screen left-0 flex flex-col xl:px-[244px]">
            <img
                src={closeComponent}
                className="absolute top-10 right-10 w-5 xl:w-auto xl:top-15 xl:right-40 cursor-pointer"
                onClick={onClick}
            ></img>
            <h1
                className="uppercase font-black text-white text-[18px] leading-[22px] xl:text-[32px] xl:leading-[38px] tracking-[0.14em] mb-10"
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            ></h1>
            <div className="flex items-center w-full justify-between px-8 xl:px-0 gap-2">
                <button className="swiper-button-prev-custom cursor-pointer">
                    <svg
                        width="25"
                        height="30"
                        viewBox="0 0 18 21"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            d="M0 10.1734L17.5676 20.3125V0L0 10.1734Z"
                            fill="#fff"
                        />
                    </svg>
                </button>

                <Swiper
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    modules={[Navigation]}
                    className="!flex !justify-center"
                >
                    {gallery.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="!flex !justify-center !items-center flex-col! gap-20"
                        >
                            <div className="bg-white w-[250px] h-[300px] md:w-[600px] lg:w-[800px] lg:h-[530px] xl:w-[980px] xl:h-[522px] flex justify-center items-center overflow-hidden">
                                <img
                                    src={appUrl + item.image}
                                    className="h-full w-full object-contain xl:py-10"
                                />
                            </div>
                            <div className="flex justify-center items-center gap-5 xl:gap-46 w-full">
                                <section
                                    className="text-base text-white"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            i18n.language === "pt"
                                                ? item.text.pt
                                                : item.text.en,
                                    }}
                                ></section>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="swiper-button-next-custom cursor-pointer">
                    <svg
                        width="25"
                        height="30"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                    >
                        <path
                            d="M17.5676 10.1391L0 -1.71661e-05L0 20.3125L17.5676 10.1391Z"
                            fill="#fff"
                        />
                    </svg>
                </button>
            </div>
            {/* <div className="flex w-full gap-5 xl:gap-46 px-8">
                <h1
                    className="uppercase font-black text-white text-[18px] leading-[22px] xl:text-[32px] xl:leading-[38px] tracking-[0.14em]"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
                <section
                    className="text-[14px] leading-[22px] xl:text-[18px] xl:leading-[24px] tracking-[0.03em] font-light text-white"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></section>
            </div> */}
        </div>
    );
}
