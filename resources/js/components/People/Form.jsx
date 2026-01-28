import { useState } from "react";

export default function Form({ image, text }) {
    const [fileName, setFileName] = useState("No file selected");
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file selected");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center xl:gap-40 4xl:gap-53">
            <div className="xl:mt-38  relative flex-col-reverse flex mt-10 justify-center items-center xl:items-start w-full xl:w-auto">
                <img
                    src={image}
                    className="h-[240px] w-full xl:w-[972px] lg:h-[650px] xl:h-[982px] object-cover"
                ></img>
                <div className="lg:absolute lg:left-30 xl:left-[100px] lg:bottom-[40px] xl:bottom-[120px] z-20 pb-2">
                    <h1
                        className="uppercase  text-azul lg:text-white font-eurostile lg:text-[20px] xl:text-[29px] xl:leading-[35px] font-medium text-left"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></h1>
                </div>
            </div>
            <div className="w-full xl:w-1/2 xl:pr-[165px] pt-5 pr-8 pl-8">
                <form className="w-full form-container ">
                    <div>
                        <label id="name" className="form-title text-azul">
                            Full name
                        </label>
                        <input name="name" type="text"></input>
                    </div>
                    <div>
                        <label id="email" className="form-title text-azul">
                            Email
                        </label>
                        <input name="email" type="email"></input>
                    </div>
                    <div>
                        <label id="phone" className="form-title text-azul">
                            Phone
                        </label>
                        <input name="phone" type="text"></input>
                    </div>
                    <div className=" flex flex-col">
                        <label id="cv" className="form-title text-azul">
                            Curriculum Vitae
                        </label>
                        <div className="w-full flex mt-1 xl:mt-3 bg-light-grey items-center h-9">
                            <label className="custom-file bg-light-grey flex justify-cente text-center">
                                <p>UPLOAD</p>
                                <input
                                    type="file"
                                    hidden
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                />
                            </label>

                            <span className="file-name bg-light-grey w-full rounded-r-[40px] tracking-[0.03em] text-[15px] leading-[22px] text-[#949494]/80 px-4 font-light">
                                {fileName}
                            </span>
                        </div>
                    </div>
                    <div>
                        <label id="message" className="form-title text-azul">
                            Message
                        </label>
                        <textarea
                            rows="6"
                            className="w-full bg-light-grey rounded-[20px] mt-1 xl:mt-3 xl:py-3 xl:px-4 text-azul outline-azul text-[15px]"
                        ></textarea>
                    </div>
                    <p className="mt-4 text-[14px] leading-[18px] xl:text-[15px] xl:leading-[19px] tracking-[0.03em] text-azul xl:mt-5">
                        I accept the{" "}
                        <strong>
                            <a className="underline hover:text-laranja cursor-pointer">
                                Privacy Policy
                            </a>
                        </strong>{" "}
                        and consent to the processing of my personal data.
                    </p>
                    <button className="hover:text-azul hover:border-azul">
                        send
                    </button>
                </form>
            </div>
        </div>
    );
}
