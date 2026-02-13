import Footer from "../Footer";
import NavbarPages from "../NavbarPages";
import i18n from "../../../../i18n/i18n";
export default function NotFound({ showWorkWithUs }) {
    return (
        <>
            <NavbarPages showWorkWithUs={showWorkWithUs} i18n={i18n} />
            <div className="bg-white py-15 xl:pb-48 pt-40 xl:pt-60">
                <h1 className="text-center font-eurostile tracking-[0.03em] text-azul uppercase text-[20px] xl:text-[50px]">
                    page not found
                </h1>
            </div>
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
