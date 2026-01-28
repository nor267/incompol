import { useEffect, useState } from "react";
import axios from "axios";

//config
import { API_URL } from "../../config";

//fake images
import banner from "../../../images/fake/sustainability/banner.jpg";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import Footer from "../Layout/Footer";
//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Commitment from "./Commitment";
import Goals from "./Goals";

export default function Sustainability() {
    const [data, setData] = new useState([]);
    const [goals, setGoals] = new useState([]);

    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-page",
                    data: {
                        slug: "sustainability",
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-icons",
                    data: {
                        id: 6,
                    },
                });

                setGoals(response.data);
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
                title={data?.name?.en}
                slogan={data?.slogan?.en}
                text={data?.description?.en}
            />

            <div className="mt-15 xl:mt-32 relative">
                <img
                    src={appUrl + data?.second_image}
                    className="w-full object-cover xl:h-[794px]"
                ></img>
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src={triangleWhite} className="h-5 xl:h-fit"></img>
                </div>
                <div className="absolute bottom-1 left-8 xl:left-[120px] xl:bottom-[113px]">
                    <h1
                        className="text-white uppercase font-eurostile font-medium xl:text-[72px] xl:leading-[77px] w-full max-w-[250px] xl:max-w-[800px]"
                        dangerouslySetInnerHTML={{
                            __html: data?.section_1_title?.en,
                        }}
                    ></h1>
                </div>
            </div>
            <Commitment
                title={data?.section_2_title?.en}
                slogan={data?.section_2_slogan?.en}
                text={data?.section_2_text?.en}
                video={appUrl + data?.section_2_media}
                image={appUrl + data?.section_2_media_1}
            />
            <Goals
                title={data?.section_3_title?.en}
                slogan={data?.section_3_slogan?.en}
                text={data?.section_3_text?.en}
                goals={goals}
                titleRecognition={data?.section_4_title?.en}
                sloganRecognition={data?.section_4_slogan?.en}
                textRecognition={data?.section_4_text?.en}
                videoRecognition={appUrl + data?.section_4_media}
                imageRecognition={appUrl + data?.section_4_media_1}
            />
            <Footer />
        </>
    );
}
