import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import LoginPage from "../components/Login";
import Link from "next/link";

export default function Login() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <Navbar/>
            <p>Enter your email and password or <Link href="./signup">sign up</Link> here.</p>
            <LoginPage />
        </div>
    );
}