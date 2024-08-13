import axios from "axios";

const apiKey= process.env.REACT_APP_APIKEY;
const baseUrl= process.env.REACT_APP_BASEURL;

export const getMovieList= async()=>{
    const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return response.data.results;
}

export const searchMovies= async(q)=>{
    const search= await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
    return search.data;
    
}