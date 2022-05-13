function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item-container">
      <img
        alt={video.snippet.title}
        className="video-item-image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="video-item-content">
        <div className="video-item-header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;