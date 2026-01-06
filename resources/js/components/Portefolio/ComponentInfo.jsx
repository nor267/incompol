import triangleWhite from "../../../images/icons/triangle-white.svg";
import closeComponent from "../../../images/icons/close-component.svg";

export default function ComponentInfo({ image, title, onClick }) {
    return (
        <div className="h-screen bg-azul flex justify-center items-center absolute z-80 w-screen left-0 flex flex-col xl:px-[244px]">
            <img
                src={closeComponent}
                className="absolute top-10 right-10 w-5 xl:w-auto xl:top-15 xl:right-40 cursor-pointer"
                onClick={onClick}
            ></img>
            <div className="flex items-center w-full justify-between px-8 xl:px-0 gap-2">
                <img src={triangleWhite} className="rotate-90 h-4 xl:h-5"></img>
                <div className="bg-white xl:h-[522px] xl:w-[980px] overflow-hidden flex justify-center items-center">
                    <img
                        src={image}
                        className="w-auto xl:max-w-[1030px] object-fit xl:max-h-[400px] h-auto"
                    ></img>
                </div>
                <img
                    src={triangleWhite}
                    className="-rotate-90 h-4 xl:h-5"
                ></img>
            </div>
            <div className="flex w-full xl:pt-30 gap-5 xl:gap-46 px-8 pt-10">
                <h1 className="uppercase font-black text-white text-[18px] leading-[22px] xl:text-[32px] xl:leading-[38px] tracking-[0.14em]">
                    Steering<br></br> Wheels
                </h1>
                <section className="text-[14px] leading-[22px] xl:text-[15px] xl:leading-[22px] tracking-[0.03em] font-light text-white">
                    <p>Spokes</p>
                    <p>Hub & Plate assy</p>
                    <p>Contact ring</p>
                    <p>Various</p>
                </section>
            </div>
        </div>
    );
}
