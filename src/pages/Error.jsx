import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    DivErrorContainer,
    DivErrorMsg,
    H1ErrorTitle,
    ImgError
} from '../components/style/errorStyle'
import { ButtonPrimaryStyle } from '../components/style/generalStyle'

const Error = () => {
    const goHome = useNavigate();

    return (
        <DivErrorContainer>
            <H1ErrorTitle>Error</H1ErrorTitle>
            <DivErrorMsg>
                <p>Darn it! It looks like we hit a sour note and an error has occurred. But don't fret, our team of music virtuosos are working on fixing it as fast as a drum solo.</p>
                <ImgError src="https://res.cloudinary.com/drghk9p6q/image/upload/v1674206005/Final-Project-MERN/gifs/ba-dum-tsss-drum_nz9hod.gif" alt="ba dum tss.gif" />
                <br />
                <br />
                <p>In the meantime, head on back to the home page and explore our vast selection of music and discover new artists. Happy listening!</p>
                <br />
                <ButtonPrimaryStyle onClick={() => goHome("/home")}>Home</ButtonPrimaryStyle>
            </DivErrorMsg>
        </DivErrorContainer>
    )
}

export default Error