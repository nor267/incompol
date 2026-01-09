import closeMenu from "../../../images/icons/close-menu.svg";
import icon from "../../../images/logo/logo-mini.svg";

export default function Menu({ isOpen, handleMenu, ...props }) {
    return (
        <menu
            className={`
    fixed inset-0 z-60 bg-azul h-screen w-full
    transform transition-all duration-900 ease-out
    ${
        isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
    }
  `}
        >
            <div className="w-full flex flex-col justify-center items-center h-full pl-5 xl:pl-10">
                <div className="pb-6 xl:pb-16 flex">
                    <a href="/about-us" className="link-menu">
                        about us
                    </a>
                    <p className="link-number"> [ 01 ]</p>
                </div>
                <div className="pb-6 xl:pb-16 flex">
                    <a href="/expertise" className="link-menu">
                        expertise
                    </a>
                    <p className="link-number"> [ 02 ]</p>
                </div>
                <div className="pb-6 xl:pb-16 flex">
                    <a href="/portfolio" className="link-menu">
                        portfolio
                    </a>
                    <p className="link-number"> [ 02 ]</p>
                </div>
                <div className="pb-6 xl:pb-16 flex">
                    <a href="/sustainability" className="link-menu">
                        sustainability
                    </a>
                    <p className="link-number"> [ 02 ]</p>
                </div>
                <div className="pb-6 xl:pb-16 flex">
                    <a href="/people" className="link-menu">
                        people
                    </a>
                    <p className="link-number"> [ 02 ]</p>
                </div>
                <div className="flex">
                    <a href="/contact-us" className="link-menu">
                        contacts
                    </a>
                    <p className="link-number"> [ 02 ]</p>
                </div>

                <img
                    src={closeMenu}
                    className="absolute 4xl:right-61 lg:right-24 xl:top-12 xl:right-34 top-10 right-10 h-5 lg:h-8 xl:h-auto cursor-pointer"
                    onClick={handleMenu}
                ></img>
                <img
                    src={icon}
                    className="absolute xl:bottom-18 lg:left-24 4xl:left-61 xl:left-32 bottom-10 left-10 h-8 lg:h-14 xl:h-[67px] cursor-pointer"
                ></img>
            </div>
        </menu>
    );
}
