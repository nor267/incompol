import axios from "axios";
import { use, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Overview from "./Overview";
import ShapeFuture from "./ShapeFuture";
import History from "./History";
import Certifications from "./Certifications";
import Footer from "../Layout/Footer";
import Portefolio from "./Portefolio";

export default function AboutUs() {
    const [data, setData] = new useState([]);

    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: "https://incompolv2.nor267.com/api" + "/get-page",
                    data: {
                        slug: "about-us",
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
        <>
            <NavbarPages />
            <Title
                title={data.name?.en}
                slogan={data.slogan?.en}
                text={data.description?.en}
            />
            <div className="flex justify-center  items-center w-full mt-15 xl:mt-36 relative">
                {data?.banner_video && (
                    <video
                        className="object-cover w-full xl:max-w-[1259px] h-[200px] lg:h-[450px] xl:h-[637px] 4xl:max-w-[1700px] 4xl:h-[800px]"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src={appUrl + data.banner_video}
                            type="video/mp4"
                        />
                    </video>
                )}
                {data?.second_image && (
                    <div className="bg-laranja xl:w-[300px] xl:h-[300px] rounded-full hidden xl:block xl:absolute right-69 -bottom-20">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="xl:w-[294px] xl:h-[294px] rounded-full overflow-hidden ">
                                <img
                                    src={appUrl + data?.second_image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Overview
                title={data?.section_1_title?.en}
                slogan={data?.section_1_slogan?.en}
            />
            <ShapeFuture />
            <History />
            <Certifications />
            <Portefolio />
            <Footer work={true} />
        </>
    );
}
