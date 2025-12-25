export default function HistoryIcon({ title, slogan }) {
    return (
        <div className="xl:mt-6 xl:ml-4">
            <h1 className="font-eurostile text-laranja xl:text-[24px] xl:leading-[26px] tracking-[0.14em] font-bold">
                {title}
            </h1>
            <p
                className="text-azul lg:text-[16px] xl:leading-[25px] tracking-[0.01em] xl:pt-2 xl:max-w-[240px] w-full"
                dangerouslySetInnerHTML={{
                    __html: slogan,
                }}
            ></p>
        </div>
    );
}
