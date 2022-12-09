import { useSelector } from 'react-redux'
import { LinkAside } from '../../style/generalStyle'

const AsideProfile = () => {
    const { username } = useSelector(state => state.userData.user.userData)

    return (
        <>
            <LinkAside>
                {username}
            </LinkAside>
        </>
    )
}

export default AsideProfile