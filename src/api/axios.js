import axioss from "axios"; // import axios

const axiosInstance = axioss.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default axiosInstance;
