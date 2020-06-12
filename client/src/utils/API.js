import axios from "axios";

export default {
    // Gets all

    // Gets single

    // Deletes

    // Saves

    // Get weather
    getWeather: function () {
        return axios.post("/api/dashboard/weather");
    }

}