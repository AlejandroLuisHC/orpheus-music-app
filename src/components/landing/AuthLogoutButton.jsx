import { ButtonPrimaryStyle } from "../style/generalStyle"
import { useAuth0 } from "@auth0/auth0-react"

const AuthLogoutButton = () => {
    const { logout } = useAuth0()
    
    return (
        <ButtonPrimaryStyle onClick={() => logout()}>Log out</ButtonPrimaryStyle>
    )
}

export default AuthLogoutButton