import i18n from "../../../i18n/i18n";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { APP_URL } from "../../config";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";

export default function Login({ showWorkWithUs }) {
    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.get(APP_URL + "/sanctum/csrf-cookie", {
                withCredentials: true,
            });

            const response = await axios.post(APP_URL + "/authenticate", form, {
                withCredentials: true,
                withXSRFToken: true,
            });
            if (response.status == 200) {
                if (response.data.erros === true) {
                    const messageError =
                        i18n.language === "pt"
                            ? response.data.message_pt
                            : response.data.message_en;
                    toast.error(messageError, {
                        position: "top-right",
                        autoClose: 3000, // 3 seconds
                    });
                } else {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("isAuthenticated", true);
                    window.location.href = "/profile";
                }
            }
        } catch (error) {
            const messageError =
                i18n.language === "pt"
                    ? "Ocorreu um erro, por favor tente mais tarde."
                    : "An error occurred. Please try again later.";
            toast.error(messageError, {
                position: "top-right",
                autoClose: 3000, // 3 seconds
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <NavbarPages
                toggleLanguage={toggleLanguage}
                showWorkWithUs={showWorkWithUs}
                i18n={i18n}
            />
            <div className="bg-white py-15 xl:pb-48 pt-40 xl:pt-60">
                <h1 className="text-center font-eurostile tracking-[0.03em] text-azul uppercase text-[20px] xl:text-[50px]">
                    {i18n.language == "pt" ? "Iniciar sessão" : "Login"}
                </h1>
                <div className="flex flex-col justify-center items-center w-full">
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        className="w-full form-container margin-website lg:max-w-200 2xl:max-w-240 pt-10 lg:pt-15 pb-30 2xl:pb-60"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div>
                            <label
                                id="password"
                                className="form-title text-azul"
                            >
                                {i18n.language === "pt"
                                    ? "Nome de utilizador"
                                    : "Username"}
                                *
                            </label>
                            <input
                                name="username"
                                type="text"
                                value={form.username}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div>
                            <label
                                id="password"
                                className="form-title text-azul"
                            >
                                {i18n.language === "pt"
                                    ? "Palavra-passe"
                                    : "Password"}
                                *
                            </label>
                            <input
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <button
                            className="hover:text-azul! hover:border-azul! duration-300 w-fit!"
                            type="submit"
                        >
                            {i18n.language === "pt" ? "Entrar" : "Login"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
