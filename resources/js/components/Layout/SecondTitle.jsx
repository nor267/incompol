export default function SecondTitle({ title, slogan, ...props }) {
    return (
        <div {...props}>
            <div className="xl:text-center margin-website">
                <p
                    className="text-base"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
                <h1
                    className="uppercase font-eurostile text-[16px] lg:text-[25px] xl:text-[32px] xl:leading-[36px] tracking-[0.14em] pt-0 xl:pt-5 font-bold"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
        </div>
    );
}
