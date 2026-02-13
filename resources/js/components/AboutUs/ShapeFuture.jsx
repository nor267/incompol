export default function ShapeFuture({ banner }) {
    return (
        <div>
            <img
                src={banner}
                className="w-full object-cover h-[200px] md:h-[350px] lg:h-[500px] xl:h-[620px]"
            ></img>
        </div>
    );
}
