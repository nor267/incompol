import SecondTitle from "../Layout/SecondTitle";

export default function Recognition({ title, slogan, text, video, image }) {
    return (
        <>
            <SecondTitle
                title={title}
                slogan={slogan}
                className="text-azul pt-20 md:pt-20 xl:pt-48 text-center"
            />
            <div className="mt-8 xl:mt-20 xl:mb-64 flex flex-col-reverse xl:flex-row justify-between 2xl:justify-center items-center 2xl:gap-58 px-8 md:px-[80px] xl:px-[137px]">
                <div>
                    <p
                        className="text-base text-azul xl:max-w-[430px] pt-10 pb-10 xl:pb-0 xl:pt-0"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></p>
                </div>
                <div className="relative">
                    {video && (
                        <video
                            key={video}
                            src={video}
                            className="xl:w-[540px] xl:h-[320px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <img
                        src={image}
                        className="w-20 md:w-25 xl:w-[200px] xl:h-auto object-cover absolute -bottom-7 -right-4 lg:bottom-110 md:-left-8 md:-bottom-8 lg:left-100  lg:right-1/2 lg:translate-x-1/2 xl:-bottom-20 xl:-left-0"
                    ></img>
                </div>
            </div>
        </>
    );
}
