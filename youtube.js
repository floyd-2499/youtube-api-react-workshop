import axios from 'axios';

const KEY = 'AIzaSyCjFWwb6sGy6c-uTJH1QiTY2yZ8SLjZjPI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

