import axios from "axios";

const apiKey= process.env.REACT_APP_APIKEY;
const baseUrl= process.env.REACT_APP_BASEURL;

export const getMovieList= async()=>{
    const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return response.data.results;
}