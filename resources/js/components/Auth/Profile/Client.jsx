import i18n from "../../../../i18n/i18n";

export default function Client({ name, address, phone, fax, email }) {
    return (
        <>
            <p className="text-azul text-base font-bold 2xl:text-[20px]! pb-3 pt-3 2xl:pt-5">
                {name}
            </p>
            <p className="text-azul text-base">{address}</p>
            <p className="text-azul text-base">
                {i18n.language == "pt" ? "T.:" : "P.:"}
                {phone}
            </p>
            <p className="text-azul text-base">F.:{fax}</p>
            <p className="text-azul text-base">M.:{email}</p>
        </>
    );
}
