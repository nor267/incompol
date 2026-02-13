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
                <div className="flex flex-col-reverse xl:flex-row pt-5 xl:pt-20 pb-25 lg:pb-30 xl:pb-[150px] xl:gap-30 2xl:gap-68 justify-center items-center md:margin-website">
                    <div className="relative px-8 md:px-0">
                        <img
                            src={video}
                            className="w-full md:h-[380px] lg:w-[800px] lg:h-[400px]  xl:w-[570px] xl:h-[375px] object-cover pt-10 xl:pt-0"
                        ></img>

                        <div className="bg-laranja w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] 2xl:w-[260px] 2xl:h-[260px] rounded-full absolute right-4 md:-right-10 xl:-right-15 2xl:-right-36 -bottom-10 xl:-bottom-20 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[98px] h-[98px] lg:w-[195px] lg:h-[195px] 2xl:w-[255px] 2xl:h-[255px] rounded-full overflow-hidden ">
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
                        className="text-base text-azul xl:max-w-[465px] px-8 md:px-[80px] lg:px-[100px] xl:px-0"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}
