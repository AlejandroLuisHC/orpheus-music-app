import { useSelector } from 'react-redux'
import { DivImgCircleS, LinkAside } from '../../style/generalStyle'
import AvatarImg from '../AvatarImg'

const AsideProfile = () => {
    const userData = useSelector(state => state.userData.user)

    return (
        <>
            <LinkAside to={userData.username}>
                <DivImgCircleS>
                    <img src={userData.avatar} alt={userData.username} width="30px" height="30px" />
                </DivImgCircleS>
                {userData?.username ?? 'Not Logged'}
            </LinkAside>
        </>
    )
}

export default AsideProfile