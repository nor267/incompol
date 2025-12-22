import logoBlue from "../../../images/logo/logo-blue.svg";

export default function NavbarPages() {
    return (
        <div className="flex justify-between w-full margin-website xl:pt-[40px]">
            <a href="/" className="cursor-pointer">
                <img src={logoBlue}></img>
            </a>
            <div className="flex">
                <div className="uppercase xl:text-[15px] xl:leading-[15px] tracking-[0.03em] text-azul xl:pr-[290px] font-medium flex flex-col xl:gap-2.5">
                    <div className="border-l-4 border-laranja pl-4.5">
                        <a href="/about-us" className="cursor-pointer">
                            <p>About us</p>
                        </a>
                    </div>
                    <div className="border-l-4 border-transparent pl-4.5">
                        <a href="/about-us" className="cursor-pointer">
                            <p>Expertise</p>
                        </a>
                    </div>
                    <div className="border-l-4 border-transparent pl-4.5">
                        <a href="/about-us" className="cursor-pointer">
                            <p>Portfolio</p>
                        </a>
                    </div>
                    <div className="border-l-4 border-transparent pl-4.5">
                        <a href="/about-us" className="cursor-pointer">
                            <p>People</p>
                        </a>
                    </div>
                    <div className="border-l-4 border-transparent pl-4.5">
                        <a href="/about-us" className="cursor-pointer">
                            <p>Clients</p>
                        </a>
                    </div>
                    <div className="border-l-4 border-transparent pl-4.5">
                        <a href="/about-us" className="cursor-pointer">
                            <p>Contacts</p>
                        </a>
                    </div>
                </div>
                <p className="text-white font-eurostile font-medium text-[22px]">
                    PT
                </p>
            </div>
        </div>
    );
}
