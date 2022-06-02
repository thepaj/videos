import VideoItem from "./VideoItem";
import { Link } from 'react-router-dom' 

function VideoList(props) {
    const videos = props.videos;

    return(
        <div className='video-list'>
            {videos !== [] && videos.map(video => {
                return(
                    <Link 
                        to={{
                            pathname: `/video-detail/${video.id.videoId}`,
                        }}
                        state={video}
                    >
                        <VideoItem
                            key={video.id.videoId}
                            video={video}
                        />    
                    </Link>
                )
            })}
        </div>
    )
}

export default VideoList;