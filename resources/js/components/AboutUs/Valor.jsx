export default function ({ title, description }) {
    return (
        <section className="flex flex-col">
            <div className="py-1 mb-3! bg-laranja w-fit px-3 rounded-l-full rounded-r-full">
                <h1 className="text-base font-bold">{title}</h1>
            </div>
            <p
                className="text-base  2xl:max-w-107 w-full"
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></p>
        </section>
    );
}
