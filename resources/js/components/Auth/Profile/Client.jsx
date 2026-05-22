import i18n from "../../../../i18n/i18n";

export default function Client({ name, address, phone, fax, email }) {
    return (
        <>
            <p className="text-azul text-base font-bold 2xl:text-[20px]! pb-0 pt-3 2xl:pt-5">
                {name}
            </p>
        </>
    );
}
