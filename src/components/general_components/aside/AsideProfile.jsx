import { useSelector } from 'react-redux'
import { LinkAside } from '../../style/generalStyle'
import AvatarImg from '../AvatarImg'

const AsideProfile = () => {
    const userData = useSelector(state => state.userData.user.userData)

    return (
        <>
            <LinkAside to={userData.username}>
                <AvatarImg 
                    size={20}
                    avatarId={userData.avatar}
                />
                {userData?.username ?? 'Not Logged'}
            </LinkAside>
        </>
    )
}

export default AsideProfile