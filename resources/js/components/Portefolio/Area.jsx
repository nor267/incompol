import i18n from "../../../i18n/i18n";

export default function Area({
    image,
    text,
    clicked,
    onClick,
    handleClick,
    active,
}) {
    let classes =
        "h-[10px] lg:h-[8px] xl:h-[13px] duration-300 transition-all w-full";
    let titleClasses =
        "font-eurostile font-bold text-[15px] xl:text-[18px] 2xl:text-[20px] xl:leading-[40px] tracking-[0.05em] uppercase duration-300 transition-all text-center w-full lg:h-12 xl:h-auto";

    let imageClasses =
        "h-[200px] max-w-[350px] w-full xl:max-w-[520px] lg:h-[280px] xl:h-[350px] 2xl:h-[400px] 4xl:max-w-[670px] 4xl:h-[500px] overflow-hidden";

    if (clicked) {
        imageClasses += " max-h-0 opacity-0";
    } else {
        imageClasses += " max-h-full opacity-100";
    }

    if (active) {
        classes += " bg-laranja xl:mt-[10px]";
        titleClasses += " text-laranja";
    } else {
        classes += " bg-azul xl:mt-[10px]";
        titleClasses += " text-azul";
    }

    return (
        <div className="relative w-full" onClick={onClick}>
            <button
                tyoe="button"
                className="flex flex-col justify-center items-center cursor-pointer w-full"
                onClick={handleClick}
            >
                <h1
                    className={titleClasses}
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></h1>
                <div className={imageClasses}>
                    <div className={classes}></div>
                    <img
                        src={image}
                        className="object-cover w-full h-full"
                    ></img>
                    {!clicked && (
                        <div className=" absolute right-4 bottom-6 button-laranja-blue h-7 xl:h-[30px] py-0! mt-0! mt-2! 2xl:mt-0! hidden lg:block">
                            {i18n.language === "pt"
                                ? "saber mais"
                                : "know more"}
                        </div>
                    )}
                </div>

                {clicked && <div className={classes}></div>}
            </button>
        </div>
    );
}
