import api from "@/services/api.js";
//import axios from "axios";

export default {
    login(credentials) {
        return api().post("login", credentials);
    }
}