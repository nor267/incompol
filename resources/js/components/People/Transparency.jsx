import SecondTitle from "../Layout/SecondTitle";

export default function Transparency() {
    return (
        <>
            <SecondTitle
                slogan="Transparency Matters"
                title="Integrity and Compliance"
                className="xl:pt-20 text-azul"
            />
            <div className="xl:pt-26 flex justify-center items-center flex-col xl:pb-52">
                <p className="text-base text-azul xl:max-w-[480px]">
                    At <strong>INCOMPOL,</strong> we are committed to conducting
                    our business with honesty, transparency, and respect for
                    people and the environment.
                </p>
                <button className="border-3 border-laranja font-bold xl:text-[20px] uppercase px-4 py-1 text-laranja rounded-[40px] xl:mt-13">
                    Código de conduta
                </button>
            </div>
        </>
    );
}
