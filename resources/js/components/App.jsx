import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Home/Home";
import Cookies from "./Cookies/Cookies";
import AboutUs from "./AboutUs/AboutUs";
import Contactus from "./Contactus/Contactus";
import Sustainability from "./Sustainability/Sustainability";
import People from "./People/People";
import Portefolio from "./Portefolio/Portefolio";
import Expertise from "./Expertise/Expertise";

function App() {
    return (
        <CookiesProvider>
            <Cookies />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/expertise" element={<Expertise />} />
                    <Route path="/portfolio" element={<Portefolio />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/contact-us" element={<Contactus />} />
                    <Route
                        path="/sustainability"
                        element={<Sustainability />}
                    />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

export default App;
