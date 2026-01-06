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
                    <a href="/portfolio">
                        <button className="button-laranja-blue xl:mt-8">
                            discover more
                        </button>
                    </a>
                </div>
                <ShapeFuture shapeFuture={shapeFuture} />
            </div>
        </>
    );
}
