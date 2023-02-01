import { H5StyleAside, LinkAside } from '../../style/generalStyle'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const AsideRecentPlaylist = () => {
    const { playlists } = useSelector(state => state.userData.user);
    const navigate = useNavigate();

    return (
        <>
            <H5StyleAside onClick={() => navigate('/home/playlists')}>Last playlists</H5StyleAside>
            {playlists?.slice(-10).reverse().map(playlist =>
                <LinkAside to={`/playlist/${playlist._id}`} key={playlist._id}>
                    <p>{playlist.name}</p>
                </LinkAside>
            )}
        </>
    )
}

export default AsideRecentPlaylist