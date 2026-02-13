import { useTranslation } from "react-i18next";

//components
import SecondTitle from "../Layout/SecondTitle";

export default function Transparency({ title, slogan, text, pdf }) {
    const { t, i18n } = useTranslation();

    return (
        <div className="">
            <SecondTitle
                slogan={slogan}
                title={title}
                className="pt-20 xl:pt-40 text-azul text-center"
            />
            <div className="pt-6 xl:pt-20 flex justify-center items-center flex-col pb-20 xl:pb-30">
                <p
                    className="text-base text-azul  xl:max-w-[480px] px-8 md:px-[80px] lg:px-[100px] xl:px-0"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></p>
                <a href={pdf} target="__blank">
                    <button className="border-3 border-laranja font-bold xl:text-[20px] uppercase px-4 py-1 text-laranja rounded-[40px] hover:text-azul hover:border-azul mt-10 xl:mt-13 cursor-pointer duration-300 transition-all">
                        {t("footerNor.conduta")}
                    </button>
                </a>
            </div>
        </div>
    );
}
