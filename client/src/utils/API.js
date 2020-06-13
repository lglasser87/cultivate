import axios from "axios";

export default {
    // Get weather from seeded database
    getWeather: function () {
        return axios.get("/api/dashboard");
    },

    // Get weather from Open Weather API
    getWeatherAPI: function () {
        return axios.get("http://api.openweathermap.org/data/2.5/forecast?zip=91911,us&units=imperial&appid=" + process.env.REACT_APP_WEATHER_API_KEY);
    },

    //Blogs
    // Gets all posts
    getPosts: function () {
        return axios.get("/api/blogs");
    },
    // Gets the post with the given id
    getPost: function (id) {
        return axios.get("/api/blogs/" + id);
    },
    // Deletes the post with the given id
    deletePost: function (id) {
        return axios.delete("/api/blogs/" + id);
    },
    // Saves a post to the database
    savePost: function (postData) {
        return axios.post("/api/blogs", postData);
    },

    //Plants
    getPlants: function () {
        return axios.get("/api/plants");
    },
    // Gets the post with the given id
    getPlant: function (id) {
        return axios.get("/api/plants/" + id);
    },
    // Deletes the post with the given id
    deletePlant: function (id) {
        return axios.delete("/api/plants/" + id);
    },
    // Saves a post to the database
    savePlant: function (plantData) {
        return axios.post("/api/plants", plantData);
    }
}