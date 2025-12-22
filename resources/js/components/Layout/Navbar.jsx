import logo from "../../../images/logo/logo.svg";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between w-full absolute top-0 margin-website xl:pt-[40px]">
                <img src={logo}></img>
                <div className="flex">
                    <div className="uppercase xl:text-[15px] xl:leading-[25px] tracking-[0.03em] text-white xl:pr-[270px] font-medium">
                        <a href="/about-us" className="cursor-pointer">
                            <p>About us</p>
                        </a>

                        <p>Expertise</p>
                        <p>Portfolio</p>
                        <p>People</p>
                        <p>Clients</p>
                        <p>Contacts</p>
                    </div>
                    <p className="text-white font-eurostile font-medium text-[22px]">
                        PT
                    </p>
                </div>
            </div>
            <div className="absolute bottom-[140px] text-white margin-website">
                <div className="relative w-full xl:mac-w-[720px]">
                    <h1 className="font-eurostile xl:text-[86px] xl:leading-[87px] uppercase">
                        We<br></br> create<br></br> solutions.
                    </h1>
                    <p className="absolute right-0 text-white top-20 uppercase font-normal xl:text-[15px] text-right">
                        Through <br></br>innovation and<br></br> precision.
                    </p>
                </div>
            </div>
        </>
    );
}
