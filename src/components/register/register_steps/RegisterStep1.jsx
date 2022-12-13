import { useNavigate } from 'react-router-dom';
import { ButtonPrimaryStyle, ButtonSecondaryStyle, DivInputStyle, InputStyle, LabelStyle, PErrorStyle } from '../../style/generalStyle'

const RegisterStep1 = ({ register, watch, userDataAvailable, setFormSteps }) => {
    const navigate = useNavigate();

    return (
        <>
            <legend>Basic info</legend>

            <DivInputStyle>
                <LabelStyle>
                    Let's start with your username
                    <InputStyle
                        type="text"
                        placeholder="Username"
                        required
                        {...register('username', {
                            required: true,
                            validate: (username) => userDataAvailable(username)
                        })}
                    />
                </LabelStyle>
                {!userDataAvailable(watch('username')) && (
                    <PErrorStyle>Sorry! This username is already taken</PErrorStyle>
                )}
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    We need an email
                    <InputStyle
                        type="email"
                        placeholder="Email"
                        required
                        {...register('email', {
                            required: true,
                            validate: (email) => userDataAvailable(email),
                        })}
                    />
                </LabelStyle>
                {!userDataAvailable(watch('email')) && (
                    <PErrorStyle>Sorry! This email is already taken</PErrorStyle>
                )}
            </DivInputStyle>

            <ButtonPrimaryStyle
                onClick={() => setFormSteps(prev => prev = { step: '2', secondStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => navigate('/')}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep1