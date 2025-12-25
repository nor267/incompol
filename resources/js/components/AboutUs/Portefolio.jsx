import triangleWhite from "../../../images/icons/triangle-white.svg";
import shapeFuture from "../../../images/fake/aboutus/shapefuture.jpg";
import ShapeFuture from "../Layout/ShapeFuture";

export default function Portefolio() {
    return (
        <>
            <div className="bg-white flex justify-center items-center xl:pt-52 xl:gap-28 xl:pb-[800px] relative">
                <div className="">
                    <h1 className="font-medium xl:text-[66px] xl:leading-[66px] text-azul xl:max-w-[600px] uppercase font-eurostile">
                        Precision. Innovation. Results.
                    </h1>
                </div>
                <div className="">
                    <p className="xl:text-[20px] xl:leading-[26px] tracking-[0.03em] text-azul xl:max-w-[345px]">
                        Explore our portfolio<br></br> and see how we deliver.
                    </p>
                    <button className="border-3 border-laranja rounded-[40px] uppercase text-laranja px-3 font-bold xl:mt-8">
                        discover more
                    </button>
                </div>
                <ShapeFuture shapeFuture={shapeFuture} />
            </div>
        </>
    );
}
