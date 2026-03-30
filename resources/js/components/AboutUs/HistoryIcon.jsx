export default function HistoryIcon({ title, slogan, sloganMobile }) {
    return (
        <div className="ml-10 xl:mt-6 xl:ml-4 lg:max-w-[140px] xl:max-w-[160px] 2xl:max-w-[180px]">
            <h1 className="font-eurostile text-laranja text-[16px] xl:text-[21px] xl:leading-[24px] tracking-[0.14em] font-bold">
                {title}
            </h1>
            <p
                className="text-azul leading-[20px] text-[12px] xl:text-[14px] xl:leading-[21px] tracking-[0.01em] xl:pt-2 w-full"
                dangerouslySetInnerHTML={{
                    __html: slogan,
                }}
            ></p>
        </div>
    );
}
