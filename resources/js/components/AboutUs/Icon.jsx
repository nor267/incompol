export default function Icon({ icon, title, text, subtitle, ...props }) {
    return (
        <div {...props}>
            <div className="flex justify-center flex-col items-center">
                <img
                    src={icon}
                    className="h-[30px] xl:h-[51px] object-cover"
                ></img>
                <h2
                    className="font-eurostile text-laranja text-[13px] leading-[14px] xl:text-[20px] xl:leading-[22px]  2xl:text-[20px] 2xl:leading-[26px] tracking-[0.14em] font-bold mt-4 xl:mt-7 uppercase"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h2>
                {subtitle != "" && (
                    <p className="text-[12px] text-[15px] 2xl:text-[16px] xl:leading-[22px] tracking-[0.03em] uppercase text-azul font-eurostile">
                        {subtitle}
                    </p>
                )}
                <p
                    className="text-base text-azul font-light xl:mt-2"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></p>
            </div>
        </div>
    );
}
