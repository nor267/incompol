import SecondTitle from "../Layout/SecondTitle";

export default function Form() {
    return (
        <div className="bg-azul">
            <SecondTitle
                slogan="Let us know what you need."
                title="Contact us"
                className="xl:pt-20 text-white"
            />
            <div className="xl:px-[377px] flex justify-between  xl:pt-36">
                <div>
                    <div>
                        <h1 className="xl:text-[28px] xl:leading-[32px uppercase text-white font-medium">
                            Contacts
                        </h1>
                        <p className="text-base text-white xl:pt-8">
                            incompol@incompol.pt<br></br>comercial@incompol.pt
                        </p>
                        <p className="text-base text-white xl:pt-8">
                            Tel.:+ 351 263 650 160<br></br>Fax: + 351 263 655
                            425
                        </p>
                    </div>
                    <div className="xl:pt-11">
                        <h1 className="xl:text-[28px] xl:leading-[32px uppercase text-white font-medium">
                            SOCIALS
                        </h1>
                        <p className="text-laranja underline underline-offset-3 xl:text-[19px]">
                            Linkedin
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <form className="w-full">
                        <div>
                            <label
                                id="name"
                                className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-white"
                            >
                                Full name
                            </label>
                            <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul text-base "></input>
                        </div>
                        <div className="xl:pt-8">
                            <label
                                id="email"
                                className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-white"
                            >
                                Email
                            </label>
                            <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul text-base "></input>
                        </div>
                        <div className="xl:pt-8">
                            <label
                                id="phone"
                                className="xl:text-[19px] xl:leading-[22px] tracking-[0.03em] font-bold text-white"
                            >
                                Phone
                            </label>
                            <input className="w-full bg-light-grey rounded-[40px] xl:mt-3 xl:py-1 xl:px-4 text-azul text-base "></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
