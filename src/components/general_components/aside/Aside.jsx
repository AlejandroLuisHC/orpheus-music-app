import { useState, useEffect, memo } from 'react';
import AsideDesktop from './AsideDesktop';
import AsideMobile from './AsideMobile';

const AsideMenu = () => {
    const [windowDesk, setWindowDesk] = useState(innerWidth > 768 ? true : false);
    useEffect(() => {
        if(innerWidth > 768){
            setWindowDesk(prev => prev = true);
        } else {
            setWindowDesk(prev => prev = false);
        }
    }, [innerWidth])
  
    //It should render the component in the useEffect when the windows width change
    return (
        windowDesk
            ? 
            <AsideDesktop />
            : 
            <AsideMobile />
    )
}

export default memo(AsideMenu)   