export default function Job({ image, title, date }) {
    return (
        <div className="relative w-full h-[220px] xl:h-[450px] overflow-hidden">
            <img className="w-full object-cover h-full z-0" src={image}></img>
            <div className="w-full h-full  z-20 absolute top-0 gradient-black-white-news">
                <div className="w-full h-full z-30 relative gradient-black-white-news2">
                    <h1 className="text-white uppercase text-[16px] xl:text-[27px] xl:leading-[25px] tracking-[0.04em] absolute left-8 bottom-4 xl:bottom-14 xl:left-9 z-20 font-semibold">
                        {title}
                    </h1>
                    <p className="text-white text-[14px] xl:text-[17px] xl:leading-[25px] tracking-[0.04em] absolute top-4 xl:top-13 right-8 xl:right-9 z-20">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}
