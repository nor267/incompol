export default function Hiring({ text }) {
    return (
        <div className="mt-15 mb-15 xl:mt-52 xl:mb-50 text-center">
            <h1
                className="text-[16px] lg:text-[30px] xl:text-[48px] font-eurostile font-medium xl:leading-[56px] uppercase text-azul"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            ></h1>
        </div>
    );
}
