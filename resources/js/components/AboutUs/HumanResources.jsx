import market1 from "../../../images/fake/aboutus/market1.jpg";
import market2 from "../../../images/fake/aboutus/market2.jpg";
import market3 from "../../../images/fake/aboutus/market3.jpg";

export default function HumanResources() {
    return (
        <div className="bg-azul xl:h-[579px] flex text-white">
            <div className="flex">
                <img
                    src={market1}
                    className="w-full xl:max-w-[340px] object-cover"
                ></img>
                <img
                    src={market2}
                    className="w-full xl:max-w-[340px] object-cover"
                ></img>
                <img
                    src={market3}
                    className="w-full xl:max-w-[340px] object-cover"
                ></img>
            </div>
            <div className="xl:pl-[130px] xl:pt-[150px]">
                <p className="xl:text-[17px] xl:leading-[22px] tracking-[0.03em]">
                    Our Human Resources
                </p>
                <h1 className="font-eurostile xl:text-[32px] xl:leading-[32px] font-bold uppercase xl:max-w-[500px] xl:pt-7">
                    People at the core of excellence
                </h1>
                <div className="flex items-start xl:pt-28 xl:gap-28">
                    <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-laranja font-bold font-eurostile xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]">
                            111
                        </h1>
                        <p className="xl:text-[18px] xl:leading-[24px] font-medium uppercase">
                            Employees
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-laranja font-bold font-eurostile xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]">
                            12
                        </h1>
                        <p className="xl:text-[18px] xl:leading-[24px] font-medium uppercase">
                            Engineers
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-laranja font-bold font-eurostile xl:text-[38px] xl:leading-[38px] xl:-tracking-[0.14em]">
                            15
                        </h1>
                        <p className="xl:text-[18px] xl:leading-[24px] font-medium uppercase">
                            Specialized <br></br>technicians
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
