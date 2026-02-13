import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../../i18n/i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { API_URL } from "../config";

import Home from "./Home/Home";
import Cookies from "./Cookies/Cookies";
import AboutUs from "./AboutUs/AboutUs";
import Contactus from "./Contactus/Contactus";
import Sustainability from "./Sustainability/Sustainability";
import People from "./People/People";
import Portefolio from "./Portefolio/Portefolio";
import Expertise from "./Expertise/Expertise";
import Privacy from "./Privacy";
import NotFound from "./Layout/Errors/NotFound";

function App() {
    const [settings, setSettings] = useState([]);
    const [settingsEn, setSettingsEn] = useState([]);
    const showWorkWithUs =
        settings?.value &&
        (i18n.language === "pt" ||
            (i18n.language === "en" && settingsEn?.value == true));

    /**
     * Obtém as definições do backoffice
     */
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-settings",
                    data: {
                        key: "jobs_posts",
                    },
                });

                setSettings(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, [i18n.language]);

    /**
     * verifica se no backoffice quer as páginas em inglês ou não
     */
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axios({
                    method: "post",
                    url: API_URL + "/get-settings",
                    data: {
                        key: "jobs_posts_en",
                    },
                });

                setSettingsEn(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, [i18n.language]);

    return (
        <CookiesProvider>
            <Cookies />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Home showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="/about-us"
                        element={<AboutUs showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="/expertise"
                        element={<Expertise showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="/portfolio"
                        element={<Portefolio showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="/people"
                        element={<People showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="/contacts"
                        element={<Contactus showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="/sustainability"
                        element={
                            <Sustainability showWorkWithUs={showWorkWithUs} />
                        }
                    />
                    <Route
                        path="/terms"
                        element={<Privacy showWorkWithUs={showWorkWithUs} />}
                    />
                    <Route
                        path="*"
                        element={<NotFound showWorkWithUs={showWorkWithUs} />}
                    />
                </Routes>
            </Router>
        </CookiesProvider>
    );
}

export default App;
