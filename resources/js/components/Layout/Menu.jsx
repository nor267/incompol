import closeMenu from "../../../images/icons/close-menu.svg";

export default function Menu({ handleMenu, ...props }) {
    return (
        <menu {...props}>
            <div className="bg-azul z-60 absolute w-full top-0 h-screen xl:pt-30">
                <div className="w-full flex flex-col justify-center items-center h-full pl-5 xl:pl-10">
                    <div className="pb-6 xl:pb-16 flex">
                        <a href="/about-us" className="link-menu ">
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
                        className="absolute xl:top-18 xl:right-32 top-10 right-10 h-5 xl:h-auto cursor-pointer"
                        onClick={handleMenu}
                    ></img>
                </div>
            </div>
        </menu>
    );
}
