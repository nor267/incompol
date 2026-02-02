import axios from "axios";
window.axios = axios;
import "./i18n";

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
