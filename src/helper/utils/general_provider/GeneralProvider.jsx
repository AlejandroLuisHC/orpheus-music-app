import QueryProvider from "../../../helper/utils/reactQuery/QueryProvider"
import StoreProvider from "../../../redux/provider/StoreProvider"
import { Auth0Provider } from '@auth0/auth0-react'

const GeneralProvider = ({ children }) => {
    return (
        <Auth0Provider
            domain      = "dev-8ubas8e7b3y88k8n.eu.auth0.com"
            clientId    = "orKIwyRmuY2sn9UDpcIIOzDfxtrilS0r"
            redirectUri = {window.location.origin}
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