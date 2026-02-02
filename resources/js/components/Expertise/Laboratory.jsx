//components
import SecondTitle from "../Layout/SecondTitle";
import ShapeFuture from "../Layout/ShapeFuture";

export default function Laboratory({ slogan, title, text, video, video2 }) {
    return (
        <>
            <div className="bg-white relative">
                <SecondTitle
                    slogan={slogan}
                    title={title}
                    className="text-azul pt-15 xl:pt-20 text-center"
                />
                <div className="flex flex-col-reverse xl:flex-row pt-5 xl:pt-36 pb-25 lg:pb-30 xl:pb-[200px] xl:gap-30 2xl:gap-68 justify-center items-center md:margin-website">
                    <div className="relative px-8 md:px-0">
                        <img
                            src={video}
                            className="w-full lg:h-[500px] lg:w-[900px] xl:w-[570px] xl:h-[375px] object-cover pt-10 xl:pt-0"
                        ></img>

                        <div className="bg-laranja w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] rounded-full absolute right-4 md:-right-10 xl:-right-36 -bottom-15 xl:-bottom-20 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[148px] h-[148px] lg:w-[195px] lg:h-[195px] xl:w-[255px] xl:h-[255px] rounded-full overflow-hidden ">
                                    {video2 && (
                                        <video
                                            key={video2}
                                            src={video2}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-base text-azul xl:max-w-[465px] px-8 lg:px-0"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}
