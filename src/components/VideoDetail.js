import { useParams, useLocation } from "react-router-dom";

function VideoDetail() {
  const params = useParams();
  const location = useLocation();
  const video = location.state;

  const videoSrc = `https://www.youtube.com/embed/${params.videoId}`;

  return (
    <div className='video-detail-container'>
      <div className='video-container'>
        <iframe src={videoSrc} className='video' title={params.videoId}/>
      </div>
      <div className='video-detail-content'>
        <div className='video-detail-title'>
          {video.snippet.title}
        </div>
        <div className='video-detail-channel'>
          {video.snippet.channelTitle}
        </div>
        <div className='video-detail-text'>
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;