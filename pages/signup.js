import Navbar from "../components/Navbar";
import LoginPage from "../components/Login";
import Profile from "../components/Profile";

export default function SignUp() {
    return (
        <div>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <Navbar />
            <p>Input your email and password.</p>
            <LoginPage />
        </div>
    )
}