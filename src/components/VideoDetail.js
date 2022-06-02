import { useParams, useLocation } from "react-router-dom";
import youtube from '../apis/youtube';
import { useEffect, useState } from "react";
import CommentsList from './CommentsList';

function VideoDetail(props) {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const params = useParams();
  const location = useLocation();
  const video = location.state;
  const authedUser = props.authedUser;

  const videoSrc = `https://www.youtube.com/embed/${params.videoId}`;

  useEffect(() => {
    async function fetchData() {
      console.log()
      const response = await youtube.get('/search', {
        params: {
          relatedToVideoId: `${params.videoId}`,
          type: 'video'
        }
      });
      setRelatedVideos(response.data.items)
      console.log(relatedVideos)
    }

    fetchData();
  }, [])

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible)
  }

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
      <div>
        {commentsVisible === true 
          ? <CommentsList toggleComments={toggleComments} authedUser={authedUser} />
          : <p className='comments-toggle' onClick={toggleComments}>View comments</p>
        }
      </div>
    </div>
  );
};

export default VideoDetail;