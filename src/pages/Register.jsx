import { memo, useEffect, useState } from 'react'
import RegisterForm from '../components/register/RegisterForm'
import FooterInfo from '../components/general_components/FooterInfo'
import { DivLanding, FooterLanding, ImgLogoClick, ImgLogoLanding, PSlogan } from '../components/style/landingStyle'
import useWidth from '../helper/hooks/useWidth'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api'
import { LOG_IN } from '../redux/features/user_data/userSlice'
import { useDispatch } from 'react-redux'
import LogoSpinner from '../components/general_components/loaders/spinner/LogoSpinner'
import Error from './Error'

const Register = () => {
    const width = useWidth();
    const [windowDesk, setWindowDesk] = useState(width > 768 ? true : false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading: authLoading } = useAuth0()

    const { data: users, status } = useQuery(['users'], fetchUsers);

    function checkUserExists(email, users) {
        const foundUser = users.find((user) =>
            user.email === email
        )
        if (foundUser) {
            dispatch(LOG_IN(foundUser))
            navigate("/home")
        } else {
            return (
                !windowDesk
                    ?
                    <DivLanding>
                        <ImgLogoClick onClick={() => navigate('/')} src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" />
                        <PSlogan>The music that unites us</PSlogan>
                        <div style={{ gridRow: 3 }}>
                            <RegisterForm />
                        </div>
                        <FooterLanding><FooterInfo /></FooterLanding>
                    </DivLanding>
                    :
                    <DivLanding>
                        <ImgLogoLanding onClick={() => navigate('/')} src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" />
                        <PSlogan>The music that unites us</PSlogan>
                        <div style={{ gridRow: 3 }}>
                            <RegisterForm />
                        </div>
                        <FooterLanding><FooterInfo /></FooterLanding>
                    </DivLanding>
            )
        }
    }

    useEffect(() => {
        if (width > 768) {
            setWindowDesk(prev => prev = true);
        } else if (width < 768) {
            setWindowDesk(prev => prev = false);
        }
    }, [width])

    return (
        status === "loading" || authLoading
            ? <LogoSpinner />
            : status === "error"
                ? <Error />
                : checkUserExists(user?.email, users)
    )
}

export default memo(Register)