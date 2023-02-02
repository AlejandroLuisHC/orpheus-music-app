import { useSelector } from 'react-redux'
import { ImgCircleS, LinkAside, PMenuStyle } from '../../style/generalStyle'

const AsideProfile = () => {
    const userData = useSelector(state => state.userData.user)
   
    let profileName = userData?.username
    if (profileName.length > 11) {
        profileName = profileName.slice(0, 10) + "..."
    }
    return (
        <LinkAside active='#D9D9D9' to={`/profile/${userData._id}`}>
            <ImgCircleS src={userData.img.url} alt={userData.username} />
            <PMenuStyle>{profileName ?? 'Not Logged'}</PMenuStyle>
        </LinkAside>
    )
}

export default AsideProfile
