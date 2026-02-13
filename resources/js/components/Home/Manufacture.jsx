import { motion } from "framer-motion";

//fake images

export default function Manucfacture({ banner, appUrl, title, button }) {
    return (
        <div className="w-full h-[220px] md:h-[400px] lg:h-[500px] xl:h-[600px] 4xl:h-[750px] z-0 relative">
            <img
                src={appUrl + banner}
                className="h-full object-cover z-0 w-full"
            ></img>

            <div className=" absolute text-white top-1 lg:top-10 xl:top-0 margin-website pt-5 xl:pt-30 2xl:pt-[165px] gradient-black-white inset-0">
                <motion.div
                    initial={{ x: -250, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1
                        className="md:mt-10 lg:mt-0 font-eurostile text-[14px] leading-[18px] md:text-[24px] md:leading-[32px] lg:text-[26px] lg:leading-[34px] xl:text-[32px] xl:leading-[42px] tracking-[0.14em] uppercase xl:max-w-[700px]"
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <a href="/expertise">
                        <button
                            className="button-laranja mt-3 xl:mt-[42px]"
                            dangerouslySetInnerHTML={{
                                __html: button,
                            }}
                        ></button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
