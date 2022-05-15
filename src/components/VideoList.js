import VideoItem from "./VideoItem";
import { Link } from 'react-router-dom' 

function VideoList(props) {
    const videos = props.videos;
    const onVideoSelect = props.onVideoSelect;

    return(
        <div className='video-list'>
            {videos !== [] && videos.map(video => {
                return(
                    <Link 
                        to={{
                            pathname: `/video-detail/${video.id.videoId}`
                        }}
                    >
                        <VideoItem
                        key={video.id.videoId}
                        video={video}
                        onVideoSelect={onVideoSelect}
                        />    
                    </Link>
                )
            })}
        </div>
    )
}

export default VideoList;