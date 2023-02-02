import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    DivErrorContainer,
    DivErrorMsg,
    H1ErrorTitle,
    ImgMaintaining
} from '../components/style/errorStyle'
import { ButtonPrimaryStyle } from '../components/style/generalStyle'

const WorkInProgress = () => {
    const goHome = useNavigate();

    return (
        <DivErrorContainer>
            <H1ErrorTitle>Tune in Later: This Section is Still in the Mix</H1ErrorTitle>
            <DivErrorMsg>
                <p>Hang Tight! This section is still under construction. In the meantime, feel free to check out other parts of the site. It'll be music to your ears soon!</p>
                <ImgMaintaining src="https://res.cloudinary.com/drghk9p6q/image/upload/v1675248058/Final-Project-MERN/gifs/metal-construction_xqenvn.gif" alt="under construction.gif" />
                <p>If you're ready to explore other parts of the website, just click the button below to return to the home page. Thanks for visiting and stay tuned for updates on this section!</p>
                <br />
                <ButtonPrimaryStyle onClick={() => goHome("/home")}>Home</ButtonPrimaryStyle>
            </DivErrorMsg>
        </DivErrorContainer>
    )
}

export default WorkInProgress