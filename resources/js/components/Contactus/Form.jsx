import SecondTitle from "../Layout/SecondTitle";

export default function Form() {
    return (
        <div className="bg-azul">
            <SecondTitle
                slogan="Let us know what you need."
                title="Contact us"
                className="pt-15 xl:pt-20 text-white"
            />
            <div className="xl:px-[377px] flex flex-col-reverse w-full xl:flex-row justify-between xl:pt-36 px-8 4xl:px-[600px]">
                <div className="flex items-start justify-between xl:justify-start xl:flex-col pt-15 xl:pt-0 pb-15">
                    <div className="">
                        <h1 className="text-[18px] xl:text-[28px] xl:leading-[32px uppercase text-white font-medium">
                            Contacts
                        </h1>
                        <p className="text-base text-white pt-3 xl:pt-8">
                            incompol@incompol.pt<br></br>comercial@incompol.pt
                        </p>
                        <p className="text-base text-white pt-3 xl:pt-8">
                            Tel.:+ 351 263 650 160<br></br>Fax: + 351 263 655
                            425
                        </p>
                    </div>
                    <div className=" xl:pt-11">
                        <h1 className="xl:text-[28px] xl:leading-[32px uppercase text-white font-medium">
                            SOCIALS
                        </h1>
                        <p className="text-laranja underline underline-offset-3 xl:text-[19px] cursor-pointer hover:text-white duration-300 transition-all">
                            <a href="https://www.linkedin.com/" target="_blank">
                                Linkedin
                            </a>
                        </p>
                    </div>
                </div>
                <div className="w-full xl:w-1/2">
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
                        <p className="text-[13px] leading-[16px]  xl:text-[15px] tracking-[0.03em] xl:leading-[19px] text-white mt-3 xl:mt-5">
                            I accept the{" "}
                            <strong>
                                <a className="underline hover:text-laranja cursor-pointer">
                                    Privacy Policy
                                </a>
                            </strong>{" "}
                            and consent to the processing of my personal data.
                        </p>
                        <button className="hover:border-white hover:text-white">
                            send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
