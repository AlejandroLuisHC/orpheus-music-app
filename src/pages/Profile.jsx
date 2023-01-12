import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProfileDesktop from "../components/profile/ProfileDesktop";
import ProfileMobile from "../components/profile/ProfileMobile";
import useWidth from "../helper/hooks/useWidth";

const Profile = () => {
    const width = useWidth();
    const [windowDesk, setWindowDesk] = useState(width > 768 ? true : false);
    useEffect(() => {
        if(width > 768){
            setWindowDesk(prev => prev = true);
        } else if (width < 768) {
            setWindowDesk(prev => prev = false);
        }
    }, [width])
    return (
       windowDesk
       ?
       <>
        <ProfileDesktop />
       </>
       :
       <>
        <ProfileMobile />       
       </>
    )
}

export default Profile