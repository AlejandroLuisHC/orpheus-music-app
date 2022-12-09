import { useSelector } from 'react-redux'
import { LinkAside } from '../../style/generalStyle'

const AsideProfile = () => {
    const userData = useSelector(state => state.userData.user.userData)

    return (
        <>
            <LinkAside>
                {userData?.username ?? 'Not Logged'}
            </LinkAside>
        </>
    )
}

export default AsideProfile