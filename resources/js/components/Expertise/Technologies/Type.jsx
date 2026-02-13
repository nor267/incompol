export default function Type({ text, dimensions, info, onClick }) {
    return (
        <>
            <div
                className={`rounded-3xl duration-300 cursor-pointer
                        ${info ? "w-fit max-w-[400px] bg-laranja/85 " : "w-fit max-w-fit opacity-100"}`}
                onClick={() => {
                    onClick();
                }}
            >
                <div
                    className={`bg-azul duration-300 text-white font-bold text-[14px] leading-[24px] xl:text-[17px] xl:leading-[38px] tracking-[0.03em] rounded-[40px] px-4 py-1 w-full ${dimensions === "<p></p>" ? "" : "hover:bg-laranja"}`}
                >
                    {text}
                </div>
                {dimensions !== "<p></p>" && (
                    <>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out
                        ${
                            info
                                ? "max-h-96 opacity-100 px-4 py-3"
                                : "max-h-0 opacity-0 px-0 py-0"
                        }`}
                        >
                            {info && (
                                <div
                                    className="text-white text-[12px] "
                                    dangerouslySetInnerHTML={{
                                        __html: dimensions,
                                    }}
                                ></div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
