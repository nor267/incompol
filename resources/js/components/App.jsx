import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { useEffect, useState, Suspense, lazy } from "react";
import i18n from "../../i18n/i18n";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";
import { API_URL } from "../config";

const Home = lazy(() => import("./Home/Home"));
const Cookies = lazy(() => import("./Cookies/Cookies"));
const AboutUs = lazy(() => import("./AboutUs/AboutUs"));
const Contactus = lazy(() => import("./Contactus/Contactus"));
const Sustainability = lazy(() => import("./Sustainability/Sustainability"));
const People = lazy(() => import("./People/People"));
const Portefolio = lazy(() => import("./Portefolio/Portefolio"));
const Expertise = lazy(() => import("./Expertise/Expertise"));
const Privacy = lazy(() => import("./Privacy"));
const NotFound = lazy(() => import("./Layout/Errors/NotFound"));
const VerifiedEmail = lazy(() => import("./VerifyEmail/VerifiedEmail"));
const ResetPassword = lazy(() => import("./ResetPassword/ResetPassword"));

import LoadingScreen from "./Others/LoadingScreen";
import Login from "./Auth/Login";
import Profile from "./Auth/Profile";

function ProtectedRoute({ isAuthenticated, children }) {
    console.log(isAuthenticated);
    if (isAuthenticated !== "true") {
        return <Navigate to="/login" />;
    }

    return children;
}

function App() {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

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
                <Suspense fallback={<LoadingScreen />}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home showWorkWithUs={showWorkWithUs} />}
                        />
                        <Route
                            path="/about-us"
                            element={
                                <AboutUs showWorkWithUs={showWorkWithUs} />
                            }
                        />
                        <Route
                            path="/expertise"
                            element={
                                <Expertise showWorkWithUs={showWorkWithUs} />
                            }
                        />
                        <Route
                            path="/portfolio"
                            element={
                                <Portefolio showWorkWithUs={showWorkWithUs} />
                            }
                        />
                        <Route
                            path="/people"
                            element={<People showWorkWithUs={showWorkWithUs} />}
                        />
                        <Route
                            path="/contacts"
                            element={
                                <Contactus showWorkWithUs={showWorkWithUs} />
                            }
                        />
                        <Route
                            path="/sustainability"
                            element={
                                <Sustainability
                                    showWorkWithUs={showWorkWithUs}
                                />
                            }
                        />
                        <Route
                            path="/terms"
                            element={
                                <Privacy showWorkWithUs={showWorkWithUs} />
                            }
                        />
                        <Route
                            path="/verify-email"
                            element={
                                <VerifiedEmail
                                    showWorkWithUs={showWorkWithUs}
                                />
                            }
                        />
                        <Route
                            path="/reset-password/:token"
                            element={
                                <ResetPassword
                                    showWorkWithUs={showWorkWithUs}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={<Login showWorkWithUs={showWorkWithUs} />}
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute
                                    isAuthenticated={isAuthenticated}
                                >
                                    <Profile showWorkWithUs={showWorkWithUs} />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <NotFound showWorkWithUs={showWorkWithUs} />
                            }
                        />
                    </Routes>
                </Suspense>
            </Router>
        </CookiesProvider>
    );
}

export default App;
