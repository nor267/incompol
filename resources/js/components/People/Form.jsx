//fake images
import image from "../../../images/fake/people/form.jpg";

export default function Form() {
    return (
        <div className="flex items-center xl:gap-40">
            <div className="xl:mt-38  relative">
                <img
                    src={image}
                    className="xl:w-[972px] xl:h-[982px] object-cover"
                ></img>
                <div className="absolute left-[117px] bottom-[120px] z-20">
                    <h1 className="uppercase text-white font-eurostile xl:text-[29px] xl:leading-[35px] font-medium">
                        Excellence<br></br> starts with<br></br> people.
                    </h1>
                </div>
            </div>
            <div className="w-1/2 xl:pr-[165px]">
                <form className="w-full">
                    <div>
                        <label
                            id="name"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Full name
                        </label>
                        <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul text-base "></input>
                    </div>
                    <div className="xl:pt-8">
                        <label
                            id="email"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Email
                        </label>
                        <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul text-base "></input>
                    </div>
                    <div className="xl:pt-8">
                        <label
                            id="phone"
                            className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-azul"
                        >
                            Phone
                        </label>
                        <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul text-base "></input>
                    </div>
                </form>
            </div>
        </div>
    );
}
