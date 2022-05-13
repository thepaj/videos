import VideoItem from "./VideoItem";

function VideoList(props) {
    const videos = props.videos;
    const onVideoSelect = props.onVideoSelect;

    return(
        <div className='video-list'>
            {videos !== [] && videos.map(video => {
                return(
                    <VideoItem
                    key={video.id.videoId}
                    video={video}
                    onVideoSelect={onVideoSelect}
                    />
                )
            })}
        </div>
    )
}

export default VideoList;