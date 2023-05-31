import axios from "axios";

const getMoviesRelatedByGenre = async (genre, movieName) => {
    if(genre === undefined) return [];
    if(movieName === undefined) return [];
    const response = await axios.get(`http://127.0.0.1:105/moviesByGenre/${genre}/${movieName}`);
    return response.data;
}

export default getMoviesRelatedByGenre;