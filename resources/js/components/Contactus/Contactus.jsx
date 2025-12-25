//fake image
import banner from "../../../images/fake/contacts/banner.jpg";
import sede1 from "../../../images/fake/contacts/sede1.jpg";

//icons
import triangleWhite from "../../../images/icons/triangle-white.svg";
import Footer from "../Layout/Footer";

//components
import NavbarPages from "../Layout/NavbarPages";
import Title from "../Layout/Title";
import Form from "./Form";

export default function Contactus() {
    return (
        <>
            <NavbarPages />
            <Title
                title="contacts"
                text="We’re always ready to connect. <br><br>
                    Whether you have a question about our products, need technical support, or want to explore a partnership opportunity, our team is here to help. Get in touch with us and we’ll respond as soon as possible."
            />
            <div className="xl:mt-40 relative">
                <img
                    src={banner}
                    className="xl:h-[760px] w-full object-cover"
                ></img>
                <img
                    src={triangleWhite}
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                ></img>
            </div>
            <div className="xl:py-38">
                <div className=" margin-website flex justify-between">
                    <div className="">
                        <h1 className="uppercase xl:text-[28px] xl:leading-[32px] text-azul font-bold">
                            Instalações Porto Alto{" "}
                            <span className="text-laranja">(Sede)</span>
                        </h1>
                        <p className="text-base text-azul xl:pt-8">
                            Av. Nossa Senhora da Guadalupe,<br></br> 106,
                            Apartado 41 - Porto Alto<br></br>2135-015 Samora
                            Correia<br></br>
                            Portugal
                        </p>
                        <h1 className="uppercase xl:text-[28px] xl:leading-[32px] text-azul font-bold xl:pt-22">
                            Contactos
                        </h1>
                        <p className="text-base text-azul xl:pt-8">
                            incompol@incompol.pt<br></br>comercial@incompol.pt
                        </p>
                        <p className="text-base text-azul xl:pt-8">
                            Tel.:+ 351 263 650 160<br></br>Fax: + 351 263 655
                            425
                        </p>
                    </div>
                    <div>
                        <img src={sede1}></img>
                    </div>
                </div>
                <div className="xl:pt-20 margin-website flex flex-row-reverse justify-between">
                    <div className="">
                        <h1 className="uppercase xl:text-[28px] xl:leading-[32px] text-azul font-bold">
                            Instalações Benavente
                        </h1>
                        <p className="text-base text-azul xl:pt-8">
                            Estrada Nacional 118 - Km 45,6<br></br>Apartado 121
                            - Benavente<br></br>2130-999 Benavente<br></br>
                            Portugal
                        </p>
                        <h1 className="uppercase xl:text-[28px] xl:leading-[32px] text-azul font-bold xl:pt-22">
                            Contactos
                        </h1>
                        <p className="text-base text-azul xl:pt-8">
                            incompol@incompol.pt
                        </p>
                        <p className="text-base text-azul xl:pt-8">
                            Tel.:+351 263 507 396<br></br>Fax: + 351 263 507 321
                        </p>
                    </div>
                    <div>
                        <img src={sede1}></img>
                    </div>
                </div>
            </div>
            <Form />
            <Footer />
        </>
    );
}
