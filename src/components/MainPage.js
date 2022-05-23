import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { GoogleOAuthProvider } from '@react-oauth/google';  
import { GoogleLogin } from '@react-oauth/google';  

const googleSuccess =  async (res) => {  
  console.log('auth.js-googlesuccess-res',res)  
  fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${res.credential}`)
    .then(res => res.json())
    .then(response => {
      console.log('user Info=',response)
    })
    .catch(error => console.log(error));    
};
const googleError = (error) => {
  console.log('google signin failed-error',error)
}
function MainPage(props) {

  // getting props
  const onTermSubmit = props.onTermSubmit;
  const videos = props.videos;

  return (
    <div className='content'>
      <GoogleOAuthProvider clientId="223893764449-la5a6a8he6g9qdcn1d212olke4q2jo9r.apps.googleusercontent.com">
          <GoogleLogin            
            onSuccess={googleSuccess}
            onFailure={googleError}     
          />
</GoogleOAuthProvider>
      <SearchBar onTermSubmit={onTermSubmit}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default MainPage;
