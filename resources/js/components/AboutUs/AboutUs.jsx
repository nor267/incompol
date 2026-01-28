import axios from "axios";
import { useEffect, useState } from "react";

//config
import { API_URL } from "../../config";

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
                    url: API_URL + "/get-page",
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
                    <div className="bg-laranja xl:w-[300px] xl:h-[300px] rounded-full hidden xl:block xl:absolute right-50 -bottom-20">
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
                appUrl={appUrl}
            />
            <ShapeFuture banner={appUrl + data?.second_image} />
            <History
                slogan={data?.section_2_slogan?.en}
                title={data?.section_2_title?.en}
            />
            <Certifications
                slogan={data?.section_3_slogan?.en}
                title={data?.section_3_title?.en}
            />
            <Portefolio
                slogan={data?.section_4_slogan?.en}
                title={data?.section_4_title?.en}
                banner={appUrl + data?.section_5_media}
                titleShape={data?.section_5_title?.en}
                sloganShape={data?.section_5_slogan?.en}
                buttonShape={data?.section_5_text?.en}
            />
            <Footer work={true} />
        </>
    );
}
