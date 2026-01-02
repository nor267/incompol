import banner from "../../../images/fake/home/manufacture.jpg";

export default function Manucfacture() {
    return (
        <div className="w-full xl:h-[875px] z-0 relative mt-10 xl:mt-0 ">
            <img src={banner} className="object-cover z-0 w-full"></img>

            <div className="absolute text-white top-0 margin-website pt-5 xl:pt-[165px] gradient-black-white inset-0">
                <h1 className="font-eurostile text-[14px] leading-[18px] xl:text-[32px] xl:leading-[42px] tracking-[0.14em] uppercase xl:max-w-[700px]">
                    manufacture <br></br>
                    <span className="font-bold">
                        high-precision
                    </span> <br></br> metallic components.
                </h1>
                <button className="button-laranja mt-3 xl:mt-[42px]">
                    discover what we can do
                </button>
            </div>
        </div>
    );
}
