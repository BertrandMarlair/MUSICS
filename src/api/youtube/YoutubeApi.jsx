import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3/videos?";
const FLAG = "&part=snippet,contentDetails,statistics,status";
const API_KEY = "key=AIzaSyBy3HnUvWxTToO1iIOJ5WdQjCeN8CIKj8M";

export function getData(videoId) {
    return new Promise(resolve => {
        const link = `${URL}id=${videoId}&${API_KEY}${FLAG}`;
        console.log(link);
        axios
            .get(link)
            .then(response => resolve(response.data))
            .catch(error => resolve(error.error));
    });
}
