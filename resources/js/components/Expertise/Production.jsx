//components
import SecondTitle from "../Layout/SecondTitle";

//icons
import peca from "../../../images/icons/expertise/peca.png";
import peca2 from "../../../images/icons/expertise/peca2.png";

export default function Production({ title, slogan, text, market }) {
    return (
        <div className="bg-light-grey text-azul flex justify-center items-center flex-col relative">
            <SecondTitle
                slogan={title}
                title={slogan}
                className="pt-15 lg:pt-20 text-azul w-full text-center"
            />
            <div className="mt-5 xl:mt-20 flex flex-col xl:flex-row xl:gap-32 items-center mb-5 lg:mb-20 xl:mb-25 px-8 lg:px-[100px] xl:px-[137px] 2xl:px-0">
                <div>
                    <p
                        className="text-base  xl:px-0 xl:max-w-[440px]"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></p>
                </div>
                <div className="pt-8 xl:pt-0 pb-15 xl:pb-0">
                    <img
                        src={market}
                        className="md:h-[280px] lg:h-[320px]"
                    ></img>
                </div>
            </div>
            <img
                src={peca}
                className="absolute right-0 bottom-0 h-[150px] lg:h-[250px] xl:h-[300px] 2xl:h-[400px]"
            ></img>
            <img
                src={peca2}
                className="absolute left-0 -top-12 lg:-top-27 xl:-top-18 2xl:-top-10 h-[140px] lg:h-[300px] xl:h-[400px]"
            ></img>
        </div>
    );
}
