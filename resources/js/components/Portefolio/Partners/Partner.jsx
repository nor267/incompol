export default function Partner({ image }) {
    return (
        <div className="bg-white w-[150px] h-[40px] lg:w-[200px] lg:h-[60px] xl:w-[250px] xl:h-[90px] rounded-[40px] xl:rounded-[200px] flex items-center justify-center shadow-partner overflow-hidden">
            <img
                src={image}
                className="w-full max-w-[90px] max-h-[28px] lg:max-w-[110px] lg:max-h-[40px] xl:max-h-[53px] xl:max-w-[180px]"
            ></img>
        </div>
    );
}
