import { H5StyleAside, LinkAside } from '../../style/generalStyle'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const AsideRecentPlaylist = () => {
    const { favPlaylists } = useSelector(state => state.userData.user);
    const navigate = useNavigate();
    
    return (
        <>
            <H5StyleAside onClick={() => navigate('/home/playlists')}>Fav. playlists</H5StyleAside>
            {favPlaylists?.map(playlist => 
                    <LinkAside key={playlist.id}>
                        <p>{playlist.name}</p>
                    </LinkAside>
            )}
        </>
    )
}

export default AsideRecentPlaylist