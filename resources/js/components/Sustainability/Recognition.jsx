import SecondTitle from "../Layout/SecondTitle";

export default function Recognition({ title, slogan, text, video, image }) {
    console.log(video);
    return (
        <>
            <SecondTitle
                title={title}
                slogan={slogan}
                className="text-azul pt-10 xl:pt-48"
            />
            <div className="mt-8 xl:mt-20  xl:mb-64 flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-58 px-8">
                <div>
                    <p
                        className="text-base text-azul xl:max-w-[430px] pt-5 pb-10 xl:pb-0 xl:pt-0"
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
                        className="w-25 xl:w-[200px] xl:h-auto object-cover absolute bottom-30 left-1/2 -translate-x-1/2 xl:-bottom-20 xl:-left-0"
                    ></img>
                </div>
            </div>
        </>
    );
}
