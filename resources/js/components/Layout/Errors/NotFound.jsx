import Footer from "../Footer";
import NavbarPages from "../NavbarPages";
export default function NotFound({ showWorkWithUs }) {
    return (
        <>
            <NavbarPages showWorkWithUs={showWorkWithUs} />
            <div className="bg-white py-15 xl:pb-48 xl:pt-60">
                <h1 className="text-center font-eurostile tracking-[0.03em] text-azul uppercase text-[20px] xl:text-[50px]">
                    page not found
                </h1>
            </div>
            <Footer showWorkWithUs={showWorkWithUs} />
        </>
    );
}
