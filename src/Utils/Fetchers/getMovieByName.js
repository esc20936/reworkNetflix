import axios from "axios";

const getMovieByName = async (movieName) => {
    const response = await axios.get(`http://127.0.0.1:105/movieByName/${movieName}`);
    return response.data;
}

export default getMovieByName;