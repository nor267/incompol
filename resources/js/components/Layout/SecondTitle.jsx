export default function SecondTitle({ title, slogan, ...props }) {
    return (
        <div {...props}>
            <div className="text-center">
                <p
                    className="text-base"
                    dangerouslySetInnerHTML={{
                        __html: slogan,
                    }}
                ></p>
                <h1
                    className="uppercase font-eurostile xl:text-[32px] xl:leading-[36px] tracking-[0.14em] xl:pt-5 font-bold"
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></h1>
            </div>
        </div>
    );
}
