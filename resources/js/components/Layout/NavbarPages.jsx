import logo from "../../../images/logo/logo.svg";
import hamburguer from "../../../images/icons/hamburg.svg";

export default function NavbarPages() {
    return (
        <div className="flex justify-between w-full margin-website items-center xl:h-[80px] bg-azul">
            <a href="/" className="cursor-pointer">
                <img src={logo} className="xl:h-[33px]"></img>
            </a>
            <div className="flex items-center justify-center xl:gap-4">
                <button className="border-3 border-laranja rounded-[40px] uppercase text-laranja px-3 font-bold cursor-pointer">
                    work with us
                </button>
                <p className="text-white font-eurostile font-medium xl:text-[22px] xl:leading-[22px] pt-2 cursor-pointer">
                    PT
                </p>
                <img src={hamburguer} className="cursor-pointer"></img>
            </div>
        </div>
    );
}
