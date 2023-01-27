import { useState, useEffect, memo } from 'react';
import AsideDesktop from './AsideDesktop';
import AsideMobile from './AsideMobile';
import useWidth from '../../../helper/hooks/useWidth';

const AsideMenu = () => {
    const width = useWidth();
    const [windowDesk, setWindowDesk] = useState(width > 768 ? true : false);

    useEffect(() => {
        if (width > 768) {
            setWindowDesk(prev => prev = true);
        } else if (width < 768) {
            setWindowDesk(prev => prev = false);
        }
    }, [width])

    return (
        windowDesk
            ?
            <AsideDesktop />
            :
            <AsideMobile />
    )
}

export default memo(AsideMenu)   