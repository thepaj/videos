import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

function Overview(props) {
  const onTermSubmit = props.onTermSubmit;
  const videos = props.videos;

  return (
    <div className='overview'>
      <SearchBar onTermSubmit={onTermSubmit}/>
      {videos === [] 
        ? <div>No videos</div>
        : <VideoList videos={videos} />
      }
    </div>
  );
}

export default Overview;
