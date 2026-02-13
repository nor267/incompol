import { useState } from "react";
import { useTranslation } from "react-i18next";
import { API_URL } from "../../config";
import i18n from "../../../i18n/i18n";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

//components
import SecondTitle from "../Layout/SecondTitle";

//icons
import checkedIcon from "../../../images/icons/radio-button-checked.svg";
import uncheckedIcon from "../../../images/icons/radio-button-unchecked.svg";

export default function Form({
    title,
    slogan,
    contacts,
    contactTitle,
    linkedin,
}) {
    const [termsChecked, setTermsChecked] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const { t } = useTranslation();

    //handle the form
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        terms_conditions: 0,
        captchaToken: "",
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            const errorMessage =
                i18n.language === "pt"
                    ? "Por favor verifique que não é um robô"
                    : "Please verify you are not a robot";
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000, // 3 seconds
            });
            return;
        }

        form.captchaToken = captchaToken;

        const response = await fetch(API_URL + "/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            const message =
                i18n.language === "pt"
                    ? "Messagem enviada"
                    : "Message submited";
            toast.success(message, {
                position: "top-right",
                autoClose: 3000, // 3 seconds
            });
            setForm({ name: "", email: "", message: "", phone: "" });
        } else {
            const messageError =
                i18n.language === "pt"
                    ? "Ocorreu um erro, por favor tente de novo"
                    : "Ocorred an error, please try again";
            toast.error(messageError, {
                position: "top-right",
                autoClose: 3000, // 3 seconds
            });
        }
    };
    // -----

    return (
        <div className="bg-azul">
            <SecondTitle
                slogan={slogan}
                title={title}
                className="pt-15 xl:pt-20 text-white text-center"
            />
            <ToastContainer />
            <div className="lg:px-[100px] xl:px-[377px] flex flex-col-reverse w-full lg:flex-row justify-between xl:pt-20 px-8 md:px-[80px] lg:px-0 4xl:px-[600px] ">
                <div className="flex items-start justify-between lg:justify-start lg:flex-col pt-15 xl:pt-0 pb-15">
                    <div className="">
                        <h1
                            className="text-[18px] xl:text-[25px] xl:leading-[32px] uppercase text-white font-medium"
                            dangerouslySetInnerHTML={{
                                __html: contactTitle,
                            }}
                        ></h1>
                        <p
                            className="text-base text-white pt-3 xl:pt-8"
                            dangerouslySetInnerHTML={{
                                __html: contacts,
                            }}
                        ></p>
                    </div>
                    <div className="lg:pt-11">
                        <h1 className="xl:text-[25px] xl:leading-[32px] uppercase text-white font-medium">
                            {t("socials")}
                        </h1>
                        <p
                            className="text-laranja underline underline-offset-3 text-base pt-1 cursor-pointer hover:text-white duration-300 transition-all"
                            dangerouslySetInnerHTML={{
                                __html: linkedin,
                            }}
                        ></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <form
                        className="w-full form-container"
                        method="POST"
                        onSubmit={(event) => handleSubmit(event)}
                    >
                        <div className="xl:pt-0!">
                            <label id="name" className="form-title text-white">
                                {t("form.name")}
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div>
                            <label id="email" className="form-title text-white">
                                {t("form.email")}
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div>
                            <label id="phone" className="form-title text-white">
                                {t("form.phone")}
                            </label>
                            <input
                                type="text"
                                name="phone"
                                required
                                onChange={handleChange}
                                value={form.phone}
                            ></input>
                        </div>
                        <div>
                            <label
                                id="message"
                                className="form-title text-white"
                            >
                                {t("form.message")}
                            </label>
                            <textarea
                                rows="5"
                                className="w-full bg-light-grey rounded-[20px] mt-2 xl:mt-3 py-3 px-4 text-azul outline-none text-[15px]"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-start pt-1">
                            <input
                                id="terms_conditions"
                                type="checkbox"
                                name="terms_conditions"
                                checked={termsChecked}
                                onChange={(e) => {
                                    setTermsChecked(!termsChecked);
                                    handleChange(e);
                                }}
                                className="hidden"
                            />

                            {/* Checkbox toggle */}
                            <label
                                htmlFor="terms_conditions"
                                className="flex items-center cursor-pointer"
                            >
                                <img
                                    src={
                                        termsChecked
                                            ? checkedIcon
                                            : uncheckedIcon
                                    }
                                    alt="Toggle visibility"
                                    className="pr-3 h-4"
                                />

                                <span className="text-base text-white mt-3 xl:mt-5">
                                    {t("form.accept")}
                                    <a
                                        className="ml-1 underline text-secondary hover:text-laranja duration-300 transition-all font-bold"
                                        href="/terms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("form.policy")}
                                    </a>{" "}
                                    {t("form.consent")}
                                </span>
                            </label>
                        </div>
                        <ReCAPTCHA
                            sitekey={
                                import.meta.env
                                    .VITE_REACT_APP_RECAPTCHA_SITE_KEY
                            }
                            onChange={(token) => setCaptchaToken(token)}
                            onExpired={() => setCaptchaToken(null)}
                        />
                        <button
                            className="hover:border-white! hover:text-white! md:w-fit!"
                            type="submit"
                        >
                            {t("form.send")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
