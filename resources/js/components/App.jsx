import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Home/Home";
import Cookies from "./Cookies/Cookies";

function App() {
    return (
        <CookiesProvider>
            <Cookies />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

export default App;
