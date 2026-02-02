//components
import SecondTitle from "../Layout/SecondTitle";

export default function Crafting({ title, slogan, text, video, image }) {
    console.log(video);
    return (
        <>
            <SecondTitle
                slogan={slogan}
                title={title}
                className="pt-15 xl:pt-20 text-azul text-center"
            />
            <div className="flex flex-col-reverse xl:flex-row-reverse margin-website xl:pt-36 pb-20 xl:pb-40 xl:gap-30  2xl:gap-68 justify-center items-center relative">
                <div className="relative pt-5 xl:pt-0">
                    {video && (
                        <video
                            key={video}
                            src={video}
                            className="xl:w-[500px] xl:h-[400px] 2xl:w-[650px] 2xl:h-[437px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    )}
                    <div className="bg-laranja w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] rounded-full absolute -left-10 xl:-left-36 -bottom-10 xl:-bottom-20 ">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className=" w-[148px] h-[148px] lg:w-[195px] lg:h-[195px] xl:w-[255px] xl:h-[255px] rounded-full overflow-hidden ">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="text-base text-azul xl:max-w-[465px] pt-5"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></div>
            </div>
        </>
    );
}
