export default function HistoryIcon({ title, slogan, sloganMobile }) {
    return (
        <div className="ml-10 xl:mt-6 xl:ml-4">
            <h1 className="font-eurostile text-laranja text-[16px] xl:text-[21px] xl:leading-[24px] tracking-[0.14em] font-bold">
                {title}
            </h1>
            <p
                className="text-azul text-[14px] leading-[20px] lg:text-[14px] xl:leading-[21px] tracking-[0.01em] xl:pt-2 lg:max-w-[140px] xl:max-w-[160px] 2xl:max-w-[180px] w-full"
                dangerouslySetInnerHTML={{
                    __html: slogan,
                }}
            ></p>
        </div>
    );
}
