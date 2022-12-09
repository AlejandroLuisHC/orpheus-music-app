import { useNavigate } from 'react-router-dom';
import { ButtonPrimaryStyle, ButtonSecondaryStyle, InputStyle, PErrorStyle } from '../../style/generalStyle'

const RegisterStep1 = ({ register, watch, userDataAvailable, setFormSteps }) => {
    const navigate = useNavigate();

    return (
        <>
            <legend>Basic info</legend>

            <div>
                <label>
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
                </label>
                {!userDataAvailable(watch('username')) && (
                    <PErrorStyle>Sorry! This username is already taken</PErrorStyle>
                )}
            </div>

            <div>
                <label>
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
                </label>
                {!userDataAvailable(watch('email')) && (
                    <PErrorStyle>Sorry! This email is already taken</PErrorStyle>
                )}
            </div>

            <ButtonPrimaryStyle
                onClick={() => setFormSteps(prev => prev = { secondStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => navigate(-1)}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep1