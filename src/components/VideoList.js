import VideoItem from "./VideoItem";

function VideoList(props) {
    const videos = props.videos;

    return(
        <div>
            {videos !== [] && videos.map(video => {
                return(
                    <VideoItem
                    key={videos.id.videoId}
                    video={video}
                    // onVideoSelect={onVideoSelect}
                    />
                )
            })}
        </div>
    )
}

export default VideoList;