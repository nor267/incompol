export default function Icon({ icon, title, text, subtitle }) {
    return (
        <div className="flex justify-center flex-col items-center">
            <img src={icon} className="xl:h-[51px] object-cover"></img>
            <h2
                className="font-eurostile text-laranja xl:text-[24px] xl:leading-[26px] tracking-[0.14em] font-bold  xl:mt-11 uppercase"
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            ></h2>
            {subtitle != "" && (
                <p className="xl:text-[16px] xl:leading-[22px] tracking-[0.03em] uppercase text-azul font-eurostile">
                    {subtitle}
                </p>
            )}
            <p
                className="xl:text-[20px] xl:leading-[27px] text-azul font-light xl:mt-2"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            ></p>
        </div>
    );
}
