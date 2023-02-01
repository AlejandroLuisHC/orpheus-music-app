import { useSelector } from 'react-redux'
import { ImgCircleS, LinkAside, PMenuStyle } from '../../style/generalStyle'

const AsideProfile = () => {
    const userData = useSelector(state => state.userData.user)
    console.log(userData)
    let profileName = userData?.username
    if (profileName.length > 12) {
        profileName = profileName.slice(0, 11) + "..."
    }
    return (
        <LinkAside to={`/profile/${userData._id}`}>
            <ImgCircleS src={userData.img.url} alt={userData.username} />
            <PMenuStyle>{profileName ?? 'Not Logged'}</PMenuStyle>
        </LinkAside>
    )
}

export default AsideProfile