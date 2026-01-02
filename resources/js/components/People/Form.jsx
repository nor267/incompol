import { useState } from "react";
//fake images
import image from "../../../images/fake/people/form.jpg";

export default function Form() {
    const [fileName, setFileName] = useState("No file selected");
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file selected");
        }
    };

    return (
        <div className="flex items-center xl:gap-40">
            <div className="xl:mt-38  relative">
                <img
                    src={image}
                    className="xl:w-[972px] xl:h-[982px] object-cover"
                ></img>
                <div className="absolute left-[117px] bottom-[120px] z-20">
                    <h1 className="uppercase text-white font-eurostile xl:text-[29px] xl:leading-[35px] font-medium">
                        Excellence<br></br> starts with<br></br> people.
                    </h1>
                </div>
            </div>
            <div className="w-1/2 xl:pr-[165px]">
                <form className="w-full">
                    <div>
                        <label
                            id="name"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Full name
                        </label>
                        <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul outline-azul text-[15px] h-9"></input>
                    </div>
                    <div className="xl:pt-8">
                        <label
                            id="email"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Email
                        </label>
                        <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul outline-azul text-[15px] h-9"></input>
                    </div>
                    <div className="xl:pt-8">
                        <label
                            id="phone"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Phone
                        </label>
                        <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul outline-azul text-[15px] h-9"></input>
                    </div>
                    <div className="xl:pt-8 flex flex-col">
                        <label
                            id="cv"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Curriculum Vitae
                        </label>
                        <div className="w-full flex xl:mt-3 bg-light-grey items-center h-9">
                            <label className="custom-file bg-light-grey">
                                UPLOAD
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
                    <div className="xl:pt-8">
                        <label
                            id="message"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Message
                        </label>
                        <textarea
                            rows="6"
                            className="w-full bg-light-grey rounded-[20px] xl:mt-3 xl:py-3 xl:px-4 text-azul outline-azul text-[15px]"
                        ></textarea>
                    </div>
                    <p className="xl:text-[15px] xl:leading-[19px] tracking-[0.03em] text-azul xl:mt-5">
                        I accept the{" "}
                        <strong>
                            <a className="underline hover:text-laranja cursor-pointer">
                                Privacy Policy
                            </a>
                        </strong>{" "}
                        and consent to the processing of my personal data.
                    </p>
                    <button className="mt-5 text-laranja uppercase border-2 border-laranja font-bold rounded-[40px] py-1 px-8 xl:text-[20px] hover:text-azul duration-300 transition-all hover:border-azul cursor-pointer">
                        send
                    </button>
                </form>
            </div>
        </div>
    );
}
