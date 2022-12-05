import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import { LOG_OUT } from "../redux/features/user_data/userSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(LOG_OUT())
        navigate('/', { replace: true })
    }

    return (
        <section>
            <h2></h2>
            <Outlet />
            <footer style={{backgroundColor: "purple"}}>I'm a footer - c / ASJHDKAJHSDKAJHS lksjfjlk </footer>
        </section>
    )
}

export default Profile