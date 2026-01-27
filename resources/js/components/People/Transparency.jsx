import SecondTitle from "../Layout/SecondTitle";

export default function Transparency() {
    return (
        <div className="px-8">
            <SecondTitle
                slogan="Transparency Matters"
                title="Integrity and Compliance"
                className="pt-20 xl:pt-20 text-azul"
            />
            <div className="pt-6 xl:pt-26 flex justify-center items-center flex-col pb-20 xl:pb-52">
                <p className="text-base text-azul lg:max-w-[400px] xl:max-w-[480px]">
                    At <strong>INCOMPOL,</strong> we are committed to conducting
                    our business with honesty, transparency, and respect for
                    people and the environment.
                </p>
                <button className="border-3 border-laranja font-bold xl:text-[20px] uppercase px-4 py-1 text-laranja rounded-[40px] hover:text-azul hover:border-azul mt-10 xl:mt-13 cursor-pointer duration-300 transition-all">
                    Código de conduta
                </button>
            </div>
        </div>
    );
}
