import axioss from "axios"; // import axios

const axiosInstance = axioss.create({
  baseURL: "http://localhost:3000/",
});

export default axiosInstance;
