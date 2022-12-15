import { IoMdHome, IoMdMusicalNotes, IoMdSearch } from 'react-icons/io'
import { AsideMobileStyle, LinkAside } from '../../style/generalStyle'

const AsideMobile = () => {
    return (
        <AsideMobileStyle>
            <LinkAside to={'/home'}>
                <IoMdHome />
            </LinkAside>
            <LinkAside to={'/search'}>
                <IoMdSearch />
            </LinkAside>
            <LinkAside to={'/home/playlists'}>
                <IoMdMusicalNotes />
            </LinkAside>
        </AsideMobileStyle>
    )
}

export default AsideMobile