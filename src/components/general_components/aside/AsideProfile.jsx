import { useSelector } from 'react-redux'
import { ImgCircleS, LinkAside } from '../../style/generalStyle'
import AvatarImg from '../AvatarImg'

const AsideProfile = () => {
    const userData = useSelector(state => state.userData.user)

    return (
        <>
            <LinkAside to={userData.username}>
                <ImgCircleS src={userData.img.url} alt={userData.username} width="30px" height="30px" />
    
                {userData?.username ?? 'Not Logged'}
            </LinkAside>
        </>
    )
}

export default AsideProfile