import axios from "axios";

const getRandomMovie = async () => {
    const response = await axios.get("http://127.0.0.1:105/randomMovie");
    // console.log(response.data);
    return response.data;
}

export default getRandomMovie;