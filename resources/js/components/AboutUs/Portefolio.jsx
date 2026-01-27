import shapeFuture from "../../../images/fake/aboutus/shapefuture.jpg";
import ShapeFuture from "../Layout/ShapeFuture";

export default function Portefolio() {
    return (
        <>
            <div className="bg-white flex flex-col md:flex-row justify-center items-center pt-10 pb-100 lg:pt-20 lg:pb-120 xl:pt-52 xl:gap-28 xl:pb-[800px] relative">
                <div className="">
                    <h1 className="font-medium lg:text-[40px] xl:text-[66px] xl:leading-[66px] text-azul max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] uppercase font-eurostile">
                        Precision. Innovation. Results.
                    </h1>
                </div>
                <div className="">
                    <p className="lg:text-[18px] xl:text-[20px] xl:leading-[26px] tracking-[0.03em] mt-5 md:mt-0 text-azul xl:max-w-[345px]">
                        Explore our portfolio<br></br> and see how we deliver.
                    </p>
                    <a href="/portfolio">
                        <button className="button-laranja-blue mt-4 xl:mt-8">
                            discover more
                        </button>
                    </a>
                </div>
                <ShapeFuture shapeFuture={shapeFuture} />
            </div>
        </>
    );
}
