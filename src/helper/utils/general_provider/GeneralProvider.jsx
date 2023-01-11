import QueryProvider from "../../../helper/utils/reactQuery/QueryProvider"
import StoreProvider from "../../../redux/provider/StoreProvider"
import { Auth0Provider } from '@auth0/auth0-react'

const GeneralProvider = ({ children }) => {
    return (
        <Auth0Provider
            domain      = {import.meta.env.VITE_API_AUTH0_DOMAIN}
            clientId    = {import.meta.env.VITE_API_AUTH0_CLIENT_ID}
            redirectUri = {window.location.origin + '/register'}
        >
        <QueryProvider>
        <StoreProvider>
            { children }
        </StoreProvider>
        </QueryProvider>
        </Auth0Provider>
    )
}

export default GeneralProvider