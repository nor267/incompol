export default function Hiring({ text }) {
    return (
        <div className="mt-15 mb-15 md:mt-20 md:mb-20 xl:mt-40 xl:mb-0 text-center">
            <h1
                className="text-[16px] md:text-[26px] lg:text-[30px] xl:text-[40px] font-eurostile font-medium xl:leading-[50px] uppercase text-azul people-text"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            ></h1>
        </div>
    );
}
