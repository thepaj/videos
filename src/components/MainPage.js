import SearchBar from "./SearchBar";
import VideoList from "./VideoList"; 

function MainPage(props) {

  // getting props
  const onTermSubmit = props.onTermSubmit;
  const videos = props.videos;

  return (
    <div className='content'>
      <SearchBar onTermSubmit={onTermSubmit}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default MainPage;
