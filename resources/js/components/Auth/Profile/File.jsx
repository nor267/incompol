import { APP_URL } from "../../../config";
import documentBlue from "../../../../images/icons/profile/document-blue.svg";

export default function File({ filePath }) {
    const name = filePath.replace(APP_URL + "/storage/uploads/clients/", "");

    return (
        <>
            <div className="flex gap-1 pb-1">
                <img src={documentBlue} className="h-5"></img>
                <a
                    href={filePath}
                    className="text-[#8d8d99] hover:text-laranja duration-300"
                    target="__blank"
                >
                    {name}
                </a>
            </div>
        </>
    );
}
