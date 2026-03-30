import i18n from "../../../i18n/i18n";
import { useNavigate, useParams } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";

export default function ResetPassword({ showWorkWithUs }) {
    const navigate = useNavigate();
    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };

    //token necessário para identificar o pedido de mudança de password
    const { token } = useParams();

    const [form, setForm] = useState({
        token: token,
        password: "",
        password_confirmation: "",
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
            const response = await axios(API_URL + "/confirm-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: form,
            });
            if (response.status == 200) {
                if (response.data.erros === true) {
                    const messageError =
                        i18n.language === "pt"
                            ? "O link é inválido. Por favor contacte o administrador."
                            : "The link is invalid. Please reach out the admin.";
                    toast.error(messageError, {
                        position: "top-right",
                        autoClose: 3000, // 3 seconds
                    });
                } else {
                    const message =
                        i18n.language === "pt"
                            ? "Palavra-passe alterada"
                            : "Password changed";
                    toast.success(message, {
                        position: "top-right",
                        autoClose: 3000, // 3 seconds
                    });

                    setTimeout(function () {
                        navigate("/");
                    }, 5000);
                }
            }
        } catch (error) {
            const messageError =
                i18n.language === "pt"
                    ? "Preencha todos os campos e tente novamente"
                    : "Fill all the camps and try again";
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
                i18n={i18n}
                toggleLanguage={toggleLanguage}
                showWorkWithUs={showWorkWithUs}
            />
            <Title
                title={
                    i18n.language === "pt"
                        ? "Mudar Password"
                        : "Change Password"
                }
                text={
                    i18n.language === "pt"
                        ? "Obrigada por confiar em nós e por darmos mais um passo em frente! Falta apenas dois cliques para aceder à sua área de cliente. "
                        : "Thank you for trusting us and for allowing us to take another step forward! You're just two clicks away from accessing your client area."
                }
            />

            <div className="flex flex-col justify-center items-center w-full">
                <form
                    onSubmit={(event) => handleSubmit(event)}
                    className="w-full form-container margin-website lg:max-w-200 2xl:max-w-240 pt-10 lg:pt-20 pb-30 2xl:pb-60"
                    method="POST"
                    encType="multipart/form-data"
                >
                    <div>
                        <label id="password" className="form-title text-azul">
                            Email*
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label id="password" className="form-title text-azul">
                            {i18n.language === "pt"
                                ? "Palavra-passe"
                                : "Password"}
                            *
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                            value={form.password}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label
                            id="password_confirmation"
                            className="form-title text-azul"
                        >
                            {i18n.language === "pt"
                                ? "Confirmar palavra-passe"
                                : "Password confirmation"}
                            *
                        </label>
                        <input
                            name="password_confirmation"
                            type="password"
                            required
                            value={form.password_confirmation}
                            onChange={handleChange}
                        ></input>
                    </div>

                    <button
                        className="hover:text-azul! hover:border-azul! duration-300 w-fit!"
                        type="submit"
                    >
                        {i18n.language === "pt" ? "Confirmar" : "Save"}
                    </button>
                </form>
            </div>

            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
