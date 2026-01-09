import { motion } from "framer-motion";

//fake images
import banner from "../../../images/fake/home/manufacture.jpg";

export default function Manucfacture() {
    return (
        <div className="w-full xl:h-[875px] z-0 relative mt-20 xl:mt-0 ">
            <div className=" xl:hidden text-azul margin-website pb-10">
                <h1 className="font-eurostile text-[14px] leading-[18px] tracking-[0.14em] uppercase">
                    manufacture <br></br>
                    <span className="font-bold">
                        high-precision
                    </span> <br></br> metallic components.
                </h1>
                <button className="button-laranja mt-3">
                    discover what we can do
                </button>
            </div>

            <img
                src={banner}
                className="h-[220px] xl:h-[875px] object-cover z-0 w-full"
            ></img>

            <div className="hidden xl:block xl:absolute text-white top-0 margin-website pt-5 xl:pt-[165px] gradient-black-white inset-0">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="font-eurostile text-[14px] leading-[18px] xl:text-[32px] xl:leading-[42px] tracking-[0.14em] uppercase xl:max-w-[700px]">
                        manufacture <br></br>
                        <span className="font-bold">high-precision</span>{" "}
                        <br></br> metallic components.
                    </h1>
                    <button className="button-laranja mt-3 xl:mt-[42px]">
                        discover what we can do
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
