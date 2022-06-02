// Create a UI to browse videos. The UI will have the following requirements:

// You can leave comments on the video
// Comments can be toggled on/off
// Related videos should be shown on the video UI
// And overview page of all videos should be shown
// The system should be protected by a login

// You can make the following assumptions

// Videos should be loaded as persisted data
// Comments should not be saved
// Login should authenticate against a separate service

import MainPage from './components/MainPage';
import Navigation from './components/Navigation';
import VideoDetail from './components/VideoDetail';

import youtube from './apis/youtube';
import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';  
import { GoogleLogin } from '@react-oauth/google';  

function App() {
  const [videos, setVideos] = useState([]);
  const [authedUser, setAuthedUser] = useState({ name: '', email: ''});

  const onTermSubmit = useCallback(async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
 
    setVideos(response.data.items);
    console.log(videos)
  }, []);

  useEffect(() => {
    onTermSubmit('bunny');
  }, []);

  const googleSuccess =  async (res) => {  
  console.log('auth.js-googlesuccess-res',res)  
  fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${res.credential}`)
    .then(res => res.json())
    .then(response => {
      console.log('user Info=',response)
      setAuthedUser({ name: response.given_name, email: response.email })
    })
    .catch(error => console.log(error));    
  };

  const googleError = (error) => {
    console.log('google signin failed-error',error)
  }

  return (
    <div className="app">
      <Navigation />
      <GoogleOAuthProvider clientId="223893764449-la5a6a8he6g9qdcn1d212olke4q2jo9r.apps.googleusercontent.com">
          <GoogleLogin            
            onSuccess={googleSuccess}
            onFailure={googleError}     
          />
      </GoogleOAuthProvider>
      <Routes>
        <Route path='/' element={<MainPage onTermSubmit={onTermSubmit} videos={videos}/>}/>
        <Route path='/video-detail/:videoId/' element={<VideoDetail authedUser={authedUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
