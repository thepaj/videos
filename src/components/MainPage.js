import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

function MainPage(props) {

  // getting props
  const onTermSubmit = props.onTermSubmit;
  const videos = props.videos;
  const onVideoSelect = props.onVideoSelect;
  const selectedVideo = props.selectedVideo;

  return (
    <div className='content'>
      <SearchBar onTermSubmit={onTermSubmit}/>
      <VideoList videos={videos} onVideoSelect={onVideoSelect} selectedVideo={selectedVideo}/>
    </div>
  );
}

export default MainPage;
