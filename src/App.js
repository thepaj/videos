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


function App() {
  const [videos, setVideos] = useState([]);

  const onTermSubmit = useCallback(async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
 
    setVideos(response.data.items);
  }, []);

  useEffect(() => {
    onTermSubmit('bunny');
    console.log(videos)
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <Routes>
        <Route path='/' element={<MainPage onTermSubmit={onTermSubmit} videos={videos}/>}/>
        <Route path='/video-detail/:videoId' element={<VideoDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
