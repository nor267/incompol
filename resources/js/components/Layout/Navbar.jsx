import logo from "../../../images/logo/logo.svg";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between w-full absolute top-0 margin-website xl:pt-[40px]">
                <img src={logo}></img>
                <p className="text-white font-eurostile font-medium text-[22px]">
                    PT
                </p>
            </div>
            <div className="absolute bottom-0 text-white margin-website">
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
