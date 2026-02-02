import { useState } from "react";

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

    return (
        <div className="bg-azul">
            <SecondTitle
                slogan={slogan}
                title={title}
                className="pt-15 xl:pt-20 text-white text-center"
            />
            <div className="lg:px-[100px] xl:px-[377px] flex flex-col-reverse w-full lg:flex-row justify-between xl:pt-36 px-8 md:px-[80px] lg:px-0 4xl:px-[600px] ">
                <div className="flex items-start justify-between lg:justify-start lg:flex-col pt-15 xl:pt-0 pb-15">
                    <div className="">
                        <h1
                            className="text-[18px] xl:text-[28px] xl:leading-[32px uppercase text-white font-medium"
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
                    <div className=" lg:pt-11">
                        <h1 className="xl:text-[28px] xl:leading-[32px uppercase text-white font-medium">
                            SOCIALS
                        </h1>
                        <p
                            className="text-laranja underline underline-offset-3 xl:text-[19px] cursor-pointer hover:text-white duration-300 transition-all"
                            dangerouslySetInnerHTML={{
                                __html: linkedin,
                            }}
                        ></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <form className="w-full form-container">
                        <div className="xl:pt-0!">
                            <label id="name" className="form-title text-white">
                                Full name
                            </label>
                            <input type="text" name="name" required></input>
                        </div>
                        <div>
                            <label id="email" className="form-title text-white">
                                Email
                            </label>
                            <input type="email" name="email" required></input>
                        </div>
                        <div>
                            <label id="phone" className="form-title text-white">
                                Phone
                            </label>
                            <input type="text" name="number" required></input>
                        </div>
                        <div>
                            <label
                                id="message"
                                className="form-title text-white"
                            >
                                Message
                            </label>
                            <textarea
                                rows="6"
                                className="w-full bg-light-grey rounded-[20px] mt-2 xl:mt-3 py-3 px-4 text-azul outline-none text-[15px]"
                                name="message"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-start pt-1">
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
                                    src={
                                        termsChecked
                                            ? checkedIcon
                                            : uncheckedIcon
                                    }
                                    alt="Toggle visibility"
                                    className="pr-3 h-4"
                                />

                                <span className="text-[13px] leading-[16px]  xl:text-[15px] tracking-[0.03em] xl:leading-[19px] text-white mt-3 xl:mt-5">
                                    I accept the
                                    <a
                                        className="ml-1 underline text-secondary"
                                        href="/terms"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Privacy Policy
                                    </a>{" "}
                                    and consent to the processing of my personal
                                    data.
                                </span>
                            </label>
                        </div>
                        <button className="hover:border-white hover:text-white">
                            send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
