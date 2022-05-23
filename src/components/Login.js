import { GoogleLogin } from "react-google-login";

const clientId = '223893764449-la5a6a8he6g9qdcn1d212olke4q2jo9r.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log(`[Login Success] currentUser: ${res.profileObj}`);
    };
    const onFailure = (res) => {
        console.log(`[Login failer] res: ${res}`)
    };

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;