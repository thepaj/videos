import { GoogleLogout } from "react-google-login";

const clientId = '223893764449-la5a6a8he6g9qdcn1d212olke4q2jo9r.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully!')
    }

    return(
        <div>
            <GoogleLogout 
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;