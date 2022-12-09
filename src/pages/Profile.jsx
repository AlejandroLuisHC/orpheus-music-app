import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import ProfileDesktop from "../components/profile/ProfileDesktop";
import { LOG_OUT } from "../redux/features/user_data/userSlice";

const Profile = () => {
    return (
        <ProfileDesktop />
    )
}

export default Profile