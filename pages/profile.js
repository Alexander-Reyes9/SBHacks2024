import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Chat() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <Navbar/>
            <center>
                <p>Add some details to help us match you with other users!</p>
                <Profile/>
            </center>
        </div>
    );
}