export default function Title({ title, slogan, text }) {
    return (
        <section className="margin-website text-azul flex justify-center xl:gap-[175px] xl:mt-56 ">
            <main className="relative overflow-hidden">
                <h1 className="font-eurostile text-azul xl:text-[86px] xl:leading-[92px] font-medium uppercase xl:max-w-[700px]">
                    {title}
                </h1>
                <p className="uppercase xl:text-[15px] xl:leading-[19px] text-right w-full xl:max-w-[95px] font-medium absolute -top-20 -right-20">
                    {slogan}
                </p>
            </main>
            <p
                className="w-full xl:max-w-[465px] xl:text-[17px] trackinf-[0.03em]"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            ></p>
        </section>
    );
}
