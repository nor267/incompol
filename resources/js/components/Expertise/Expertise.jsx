import axios from "axios";
import { useEffect, useState } from "react";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Technologies from "./Technologies/Technologies";
import Production from "./Production";
import Footer from "../Layout/Footer";
import Certification from "./Certification";
import Laboratory from "./Laboratory";
import Crafting from "./Crafting";

//config
import { API_URL } from "../../config";

export default function Expertise() {
    const [data, setData] = new useState([]);
    const [tecnologies, setTecnologies] = new useState([]);

    const appUrl = window.location.origin + "/storage/";

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-icons",
                    data: {
                        id: 3,
                    },
                });

                setTecnologies(response.data);
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
                    url: API_URL + "/get-page",
                    data: {
                        slug: "expertise",
                    },
                });

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, []);

    console.log(data);
    return (
        <>
            <NavbarPages />
            <Title
                title={data?.name?.en}
                slogan={data?.slogan?.en}
                text={data?.description?.en}
            />
            <div className="mt-15 xl:mt-40">
                <img
                    src={appUrl + data?.second_image}
                    className="w-full object-cover h-[200px] lg:h-[450px] xl:h-[600px]"
                ></img>
            </div>
            <Technologies
                title={data?.section_1_title?.en}
                slogan={data?.section_1_slogan?.en}
                text={data?.section_1_text?.en}
                tecnologies={tecnologies}
                appUrl={appUrl}
                capacitySlogan={data?.section_2_slogan?.en}
                capacityTitle={data?.section_2_title?.en}
                capacityText={data?.section_2_text?.en}
                capacityVideo={appUrl + data?.section_2_media_1}
                capacityVideo2={appUrl + data?.section_2_media}
            />
            <Production
                title={data?.section_3_title?.en}
                slogan={data?.section_3_slogan?.en}
                text={data?.section_3_text?.en}
                market={appUrl + data?.section_3_media}
            />
            <Crafting
                title={data?.section_4_title?.en}
                slogan={data?.section_4_slogan?.en}
                text={data?.section_4_text?.en}
                video={appUrl + data?.section_4_media}
                image={appUrl + data?.section_4_media_1}
            />
            <Certification
                title={data?.section_5_title?.en}
                slogan={data?.section_5_slogan?.en}
                text={data?.section_5_text?.en}
                video={appUrl + data?.section_5_media}
                video2={appUrl + data?.section_5_media_1}
            />
            <Laboratory
                title={data?.section_6_title?.en}
                slogan={data?.section_6_slogan?.en}
                text={data?.section_6_text?.en}
                video={appUrl + data?.section_6_media}
                video2={appUrl + data?.section_6_media_1}
            />

            <Footer />
        </>
    );
}
