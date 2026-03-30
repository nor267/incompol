import i18n from "../../../i18n/i18n";
import { useEffect, useState } from "react";
import api from "../../api";
import { APP_URL } from "../../config";
import { useNavigate } from "react-router";

//images
import areaPartners from "../../../images/area-partners.jpg";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import Client from "./Profile/Client";
import File from "./Profile/File";

export default function Profile({ showWorkWithUs }) {
    const [files, setFiles] = useState();
    const navigate = useNavigate();

    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    useEffect(() => {
        const documents = async () => {
            const response = await api.post("/documents");
            setFiles(response?.data?.files);
        };

        documents();
    }, []);

    function logout() {
        api.post("/logout").then(function () {
            localStorage.setItem("isAuthenticated", false);
            localStorage.setItem("token", "");
            navigate("/");
        });
    }

    return (
        <>
            <NavbarPages
                toggleLanguage={toggleLanguage}
                showWorkWithUs={showWorkWithUs}
                i18n={i18n}
            />
            <div className="bg-white pt-15 2xl:pt-20 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 pt-20 xl:pt-30 pb-20">
                    <h1 className="text-start margin-website font-eurostile tracking-[0.03em] text-azul uppercase text-[25px] leading-[30px] lg:text-[30px] xl:text-[45px] xl:leading-[52px] 2xl:text-[50px] 2xl:pb-10">
                        {i18n.language == "pt"
                            ? "Área de parceiros"
                            : "Partners Area"}
                    </h1>
                    <section className="margin-website">
                        <section>
                            <h1 className="text-azul uppercase pt-3 xl:pt-5 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium ">
                                {i18n.language == "pt"
                                    ? "Bem-vindo"
                                    : "Welcome"}
                            </h1>
                            <div className="w-fit py-2">
                                <Client
                                    name={files?.name}
                                    address={files?.morada}
                                    phone={files?.phone}
                                    fax={files?.fax}
                                    email={files?.email}
                                />
                            </div>
                        </section>
                        <section>
                            <h1 className="text-azul uppercase lg:text-lg xl:text-xl 2xl:text-2xl font-medium pt-5 lg:pt-10 pb-2">
                                {i18n.language == "pt"
                                    ? "Documentos"
                                    : "Documents"}
                            </h1>
                            {files?.files.map((item, index) => (
                                <File
                                    filePath={
                                        APP_URL + "/storage/" + item?.file_path
                                    }
                                    key={index}
                                />
                            ))}
                        </section>
                        <section className="pt-20 flex flex-col w-fit gap-3">
                            <a
                                className="button-laranja-blue w-fit!"
                                href="/contacts"
                            >
                                {i18n.language == "pt"
                                    ? "Fale connosco"
                                    : "Talk to us"}
                            </a>
                            <a
                                className="button-laranja-blue w-fit!"
                                onClick={logout}
                            >
                                {i18n.language == "pt" ? "Sair" : "Logout"}
                            </a>
                        </section>
                    </section>
                </div>
                <div className=" w-screen md:h-[400px] lg:min-h-220 lg:w-1/2">
                    <img
                        src={areaPartners}
                        className="object-cover md:h-[400px] lg:h-full w-full"
                    ></img>
                </div>
            </div>
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
