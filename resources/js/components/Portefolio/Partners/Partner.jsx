export default function Partner({ image }) {
    return (
        <div className="bg-white xl:w-[250px] xl:h-[90px] rounded-[200px] flex items-center justify-center shadow-partner">
            <img
                src={image}
                className="  xl:max-h-[53px] xl:max-w-[180px]"
            ></img>
        </div>
    );
}
