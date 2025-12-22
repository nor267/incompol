import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Home/Home";
import Cookies from "./Cookies/Cookies";
import AboutUs from "./AboutUs/AboutUs";

function App() {
    return (
        <CookiesProvider>
            <Cookies />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

export default App;
