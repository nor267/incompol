import { useState } from "react";

//fake images
import area1 from "../../../images/fake/portefolio/area1.jpg";
import area2 from "../../../images/fake/portefolio/area2.jpg";
import area3 from "../../../images/fake/portefolio/area3.jpg";
import component from "../../../images/fake/portefolio/component.png";

//components
import Footer from "../Layout/Footer";
import NavbarPages from "../Layout/NavbarPages";
import SecondTitle from "../Layout/SecondTitle";
import Title from "../Layout/Title";
import Area from "./Area";
import Map from "./Map";
import Partners from "./Partners/Partners";
import Component from "./Component";

export default function Portefolio() {
    const [click, setClick] = new useState(false);

    const components = (
        <div className="mt-0 xl:mt-[50px]">
            <div className="area-componets">
                <Component image={component} />
                <Component image={component} />
                <Component image={component} />
            </div>
            <div className="area-componets xl:mt-14">
                <Component image={component} />
                <Component image={component} />
                <Component image={component} />
            </div>
            <div className="area-componets xl:mt-14">
                <Component image={component} />
                <Component image={component} />
            </div>
        </div>
    );

    function handleClick() {
        setClick((prev) => !prev);
    }

    return (
        <>
            <NavbarPages />
            <Title
                title="Portfolio Incompol"
                slogan="A showcase<br> of what we<br> build."
                text="INCOMPOL designs and manufactures precision components that meet the highest standards of quality and functionality.<br><br>
With decades of experience and certified expertise, we supply tailored solutions for demanding sectors such as automotive, aerospace, and electrical industries."
            />
            <div>
                <SecondTitle
                    title="our Products"
                    slogan="Delivering quality on every scale."
                    className="pt-15 xl:pt-20 text-azul"
                />
                <div className="flex flex-col xl:flex-row justify-between mt-5 xl:mt-32 margin-website gap-5 xl:gap-9">
                    <Area
                        image={area1}
                        text="automotive"
                        onClick={handleClick}
                        clicked={click}
                    />
                    {click && <div className=" xl:hidden"> {components}</div>}
                    <Area
                        image={area2}
                        text="HOME & APPLIANCE"
                        onClick={handleClick}
                        clicked={click}
                    />
                    <Area
                        image={area3}
                        text="AEROSPACE & DEFENSE"
                        onClick={handleClick}
                        clicked={click}
                    />
                </div>
                {click && <div className="hidden xl:block"> {components}</div>}
            </div>
            <div className="mb-10 xl:mb-52">
                <Title
                    title="Clients"
                    slogan="trusted by<br> experience"
                    text="For over three decades, <strong>INCOMPOL</strong> has been a reliable partner for some of the most demanding brands across the automotive, aeronautical, and electrical industries.<br><br>
<strong>Our clients trust us to deliver precision, consistency, and innovation — every single time.</strong>"
                />
            </div>
            <Partners />
            <Map />
            <Footer />
        </>
    );
}
