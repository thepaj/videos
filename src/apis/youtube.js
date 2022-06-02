import axios from 'axios';

const API_KEY = 'AIzaSyBj5ik_WppAQj_5psqQqK37r552Igq6GG0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: API_KEY,
  },
  headers: {}
});

// export default related = axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     maxResults: 10,
//     key: API_KEY,
//   },
//   headers: {}
// })