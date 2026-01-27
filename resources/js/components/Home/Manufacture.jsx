import { motion } from "framer-motion";

//fake images

export default function Manucfacture({ banner, appUrl, title, button }) {
    return (
        <div className="w-full xl:h-[875px] z-0 relative mt-20 lg:mt-0 ">
            <div className=" lg:hidden text-azul margin-website pb-10">
                <h1
                    className="font-eurostile text-[14px] leading-[18px] tracking-[0.14em] uppercase"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
                <button
                    className="button-laranja mt-3"
                    dangerouslySetInnerHTML={{
                        __html: button,
                    }}
                ></button>
            </div>

            <img
                src={appUrl + banner}
                className="h-[220px] lg:h-[500px] xl:h-[875px] object-cover z-0 w-full"
            ></img>

            <div className="hidden lg:block lg:absolute text-white lg:top-10 xl:top-0 margin-website pt-5 xl:pt-[165px] gradient-black-white inset-0">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1
                        className="font-eurostile text-[14px] leading-[18px] xl:text-[32px] xl:leading-[42px] tracking-[0.14em] uppercase xl:max-w-[700px]"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <button
                        className="button-laranja mt-3 xl:mt-[42px]"
                        dangerouslySetInnerHTML={{
                            __html: button,
                        }}
                    ></button>
                </motion.div>
            </div>
        </div>
    );
}
