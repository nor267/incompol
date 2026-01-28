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
                    className="text-azul pt-15 xl:pt-20"
                />
                <div className="flex flex-col-reverse xl:flex-row pt-5 xl:pt-36 pb-15 xl:pb-[150px] xl:gap-68 justify-center items-center">
                    <div className="relative">
                        <img
                            src={video}
                            className="w-full xl:w-[570px] xl:h-[375px] object-cover pt-10 xl:pt-0"
                        ></img>

                        <div className="bg-laranja w-[150px] h-[150px] xl:w-[260px] xl:h-[260px] rounded-full absolute -right-10 xl:-right-36 -bottom-15 xl:-bottom-20 ">
                            <div className="flex justify-center items-center w-full h-full">
                                <div className=" w-[148px] h-[148px] xl:w-[255px] xl:h-[255px] rounded-full overflow-hidden ">
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
                        className="text-base text-azul xl:max-w-[465px] px-8 lg:px-[100px] xl:px-0"
                        dangerouslySetInnerHTML={{
                            __html: text,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}
