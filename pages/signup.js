import Navbar from "../components/Navbar";
import LoginPage from "../components/Login";
import Profile from "../components/Profile";
import SignUpPage from "../components/SignUp";

export default function SignUp() {
    return (
        <div>
            <center>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
                <Navbar />
                <p>Input your email and password.</p>
                <SignUpPage />
            </center>
        </div>
    )
}