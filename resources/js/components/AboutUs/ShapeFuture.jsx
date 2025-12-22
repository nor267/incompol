import banner from "../../../images/fake/aboutus/banner.jpg";

export default function ShapeFuture() {
    return (
        <>
            <div className="xl:my-64 flex text-azul justify-center xl:gap-40">
                <h1 className="font-eurostile xl:text-[66px] xl:leading-[72px] uppercase xl:max-w-[626px]">
                    Shape the Future With Us.
                </h1>
                <div>
                    <p className="xl:max-w-[259px] xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                        Be part of precision, innovation, and progress.
                    </p>
                    <button className="text-laranja border-3 uppercase rounded-[40px] px-3 font-medium xl:mt-6">
                        Work with us
                    </button>
                </div>
            </div>
            <div>
                <img
                    src={banner}
                    className="w-full object-cover xl:max-h-[720px]"
                ></img>
            </div>
        </>
    );
}
