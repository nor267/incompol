import image from "../../../images/fake/home/work-with-us.jpg";
import arrowWhite from "../../../images/icons/triangle-white.svg";

export default function WorkWithUs() {
    return (
        <div className="xl:h-[707px] xl:w-[1440px] relative">
            <img src={image} className="object-cover w-full"></img>
            <div className="absolute top-0">
                <img src={arrowWhite}></img>
                <h1 className="xl:max-w-[357px] w-full font-eurostile xl:leading-[39px] xl:text-[32px] tracking-[0.14em]">
                    Shape <br></br> the future <br></br> with us.
                </h1>
                <p className="xl:max-w-[324px] w-full xl:text-[17px] xl:leading-[25px] tracking-[0.03em]">
                    Be part of precision, innovation, and progress.
                </p>
            </div>
        </div>
    );
}
