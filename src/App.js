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
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = useCallback(async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response.data)
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
  }, []);

  useEffect(() => {
    onTermSubmit('bunny')
  }, []);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log(video)
  }

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage onTermSubmit={onTermSubmit} videos={videos} onVideoSelect={onVideoSelect} selectedVideo={selectedVideo}/>} />
        <Route path='/video-detail/:videoId' element={<VideoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
