import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import i18n from "../../../i18n/i18n";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";

export default function VerifiedEmail({ showWorkWithUs }) {
    const toggleLanguage = () => {
        const nextLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(nextLang);
        window.location.reload();
    };

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-page",
                    data: {
                        slug: "contacts",
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
            <NavbarPages
                i18n={i18n}
                toggleLanguage={toggleLanguage}
                showWorkWithUs={showWorkWithUs}
            />
            <Title
                title={
                    i18n.language === "pt"
                        ? "Email verificado"
                        : "Email verified"
                }
            />
            <div className="margin-website text-base text-azul  pt-10">
                <p>Your email address has been successfully verified.</p>
                <p>
                    You can now access all features of your account. If you did
                    not perform this action, please contact our support team
                    immediately.
                </p>
            </div>
            <div className="flex justify-center pb-20 pt-10">
                <a href="/" className="button-laranja-blue">
                    {i18n.language === "pt"
                        ? "Voltar à Página inicial"
                        : "Back to Home"}
                </a>
            </div>

            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
