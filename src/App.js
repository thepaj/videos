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

import Overview from './components/Overview';
import Navigation from './components/Navigation';

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
    onTermSubmit('svaz ceskych bohemu');
    console.log(`videos: ${videos}`)
  }, [onTermSubmit, videos])

  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path='/' element={<Overview onTermSubmit={onTermSubmit} videos={videos}/>} />
      </Routes>
    </div>
  );
}

export default App;
