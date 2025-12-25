import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import SecondTitle from "../Layout/SecondTitle";
import Title from "../Layout/Title";

export default function Portefolio() {
    return (
        <>
            <NavbarPages />

            <Title
                title="Portfolio Incompol"
                slogan="A showcase of what we build."
                text="INCOMPOL designs and manufactures precision components that meet the highest standards of quality and functionality.<br><br>
With decades of experience and certified expertise, we supply tailored solutions for demanding sectors such as automotive, aerospace, and electrical industries."
            />
            <div>
                <SecondTitle
                    title="our Products"
                    slogan="Delivering quality on every scale."
                    className="xl:pt-20 text-azul"
                />
            </div>
            <Title
                title="Clients"
                slogan="trusted by experience"
                text="For over three decades, <strong>INCOMPOL</strong> has been a reliable partner for some of the most demanding brands across the automotive, aeronautical, and electrical industries.<br><br>
<strong>Our clients trust us to deliver precision, consistency, and innovation — every single time.</strong>"
            />
            <Footer />
        </>
    );
}
