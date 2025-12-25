import banner from "../../../images/fake/aboutus/banner.jpg";

export default function ShapeFuture() {
    return (
        <>
            <div>
                <img
                    src={banner}
                    className="w-full object-cover xl:max-h-[720px]"
                ></img>
            </div>
        </>
    );
}
