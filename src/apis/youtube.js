import axios from 'axios';

const API_KEY = 'AIzaSyC0C6Cpyxk3lJWQCNJnT2HmdKqoTu-xr0A';
const oauth2Token = '560737261180-vn0jpnk3u1ku95rclmfbnhahajqph77g.apps.googleusercontent.com'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: {
    Authorization: oauth2Token
  },
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  }
});