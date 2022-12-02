import { Outlet } from "react-router-dom"

const Profile = () => {
    return (
        <section>
            <h2></h2>
            <Outlet />
            <footer style={{backgroundColor: "purple"}}>I'm a footer - c / ASJHDKAJHSDKAJHS lksjfjlk </footer>
        </section>
    )
}

export default Profile