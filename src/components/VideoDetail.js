function VideoDetail(video) {
  if (!video) {
    return <div>Loading...</div>;
  }

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