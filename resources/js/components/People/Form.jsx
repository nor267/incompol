import { useState } from "react";
import { useTranslation } from "react-i18next";

//icons
import checkedIcon from "../../../images/icons/radio-button-checked.svg";
import uncheckedIcon from "../../../images/icons/radio-button-unchecked.svg";

export default function Form({ image, text }) {
    const [fileName, setFileName] = useState("No file selected");
    const [termsChecked, setTermsChecked] = useState(false);
    const { t } = useTranslation();

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file selected");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center xl:gap-20 2xl:gap-40 4xl:gap-53">
            <div className="xl:mt-38  relative flex-col-reverse flex justify-center items-center xl:items-start w-full xl:w-auto">
                <img
                    src={image}
                    className="h-[240px] w-full xl:w-[972px] md:h-[450px] lg:h-[650px] xl:h-[982px] object-cover"
                ></img>
                <div className="absolute left-8 bottom-5 md:left-[80px] lg:left-30  xl:left-[100px] lg:bottom-[40px] xl:bottom-[120px] z-20 pb-2 people-text">
                    <h1
                        className="uppercase text-white font-eurostile text-[18px] leading-[22px] md:text-[20px] md:leading-[25px] xl:text-[29px] xl:leading-[35px] font-medium text-left"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></h1>
                </div>
            </div>
            <div className="w-full xl:w-1/2 xl:pr-[137px] 2xl:pr-[165px] pt-5 pr-8 pl-8 md:pl-[80px] md:pr-[80px]">
                <form className="w-full form-container ">
                    <div>
                        <label id="name" className="form-title text-azul">
                            {t("form.name")}
                        </label>
                        <input name="name" type="text"></input>
                    </div>
                    <div>
                        <label id="email" className="form-title text-azul">
                            {t("form.email")}
                        </label>
                        <input name="email" type="email"></input>
                    </div>
                    <div>
                        <label id="phone" className="form-title text-azul">
                            {t("form.phone")}
                        </label>
                        <input name="phone" type="text"></input>
                    </div>
                    <div className=" flex flex-col">
                        <label id="cv" className="form-title text-azul">
                            {t("form.cv")}
                        </label>
                        <div className="w-80  xl:w-full flex mt-1 xl:mt-3 bg-light-grey items-center h-9 rounded-r-[40px] rounded-l-[40px]">
                            <label className="custom-file bg-azul flex justify-cente text-center">
                                <p> {t("form.upload")}</p>
                                <input
                                    type="file"
                                    hidden
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                />
                            </label>

                            <span className=" bg-light-grey w-full rounded-r-[40px] tracking-[0.03em] text-[15px] leading-[22px] text-[#949494]/80 px-4 font-light">
                                {fileName}
                            </span>
                        </div>
                    </div>
                    <div>
                        <label id="message" className="form-title text-azul">
                            {t("form.message")}
                        </label>
                        <textarea
                            rows="6"
                            className="w-full bg-light-grey rounded-[20px] mt-1 xl:mt-3 xl:py-3 xl:px-4 text-azul outline-azul text-[15px]"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-start pt-1 mt-4 xl:mt-5">
                        <input
                            id="terms_conditions"
                            type="checkbox"
                            name="terms_conditions"
                            checked={termsChecked}
                            onChange={() => setTermsChecked(!termsChecked)}
                            className="hidden"
                        />

                        {/* Checkbox toggle */}
                        <label
                            htmlFor="terms_conditions"
                            className="flex items-center cursor-pointer"
                        >
                            <img
                                src={termsChecked ? checkedIcon : uncheckedIcon}
                                alt="Toggle visibility"
                                className="pr-3 h-4"
                            />

                            <span className="text-[14px] leading-[18px] xl:text-[15px] xl:leading-[19px] tracking-[0.03em] text-azul ">
                                {t("form.accept")}
                                <a
                                    className="ml-1 underline text-secondary font-bold hover:text-laranja duration-300 transition-all"
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
                    <button className="hover:text-azul! hover:border-azul! duration-300">
                        {t("form.send")}
                    </button>
                </form>
            </div>
        </div>
    );
}
