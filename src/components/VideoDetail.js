import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function VideoDetail() {
  const location = useLocation();
  const video = location.state?.video;

  //const [selectedVideo, setVideo] = useState(video)

  useEffect(() => {
    console.log(video)
  }, [video])

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='content'>
      <div className='player-container'>
         <iframe title="video player" src={videoSrc} />
      </div>
      <div className='video-detail-content'>
        <h2>{video.snippet.title}</h2>
      </div>
    </div>
  );
};

export default VideoDetail;