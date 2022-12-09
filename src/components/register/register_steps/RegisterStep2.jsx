import { ButtonPrimaryStyle, ButtonSecondaryStyle, DivInputStyle, InputStyle, LabelStyle, PErrorStyle } from '../../style/generalStyle'

const RegisterStep2 = ({ register, watch, setFormSteps, errors }) => {
    const passwordsMatch = (password, confirmPassword) => {
        return password === confirmPassword ? true : false;
    };

    return (
        <>
            <legend>Protect your account</legend>

            <DivInputStyle>
                <LabelStyle>
                    Create your password
                    <InputStyle
                        type="password"
                        placeholder="Password"
                        required
                        {...register('password', {
                            required: true,
                            pattern: {
                                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                message: 'This password is not strong enough',
                            },
                        })}
                    />
                </LabelStyle>
                {errors.password?.message && (
                    <PErrorStyle>{errors.password?.message}</PErrorStyle>
                )}
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Confirm your password
                    <InputStyle
                        type="password"
                        placeholder="Repeat password"
                        required
                        {...register('confirmPassword', {
                            required: true,
                            validate: (confirmPassword) =>
                                passwordsMatch(watch('password'), confirmPassword),
                        })}
                    />
                </LabelStyle>
                {!passwordsMatch(watch('password'), watch('confirmPassword')) && (
                    <PErrorStyle>Passwords not matching</PErrorStyle>
                )}
            </DivInputStyle>
            <ButtonPrimaryStyle
                onClick={() => setFormSteps(prev => prev = { step: '3',  thirdStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => setFormSteps(prev => prev = { step: '1', firstStep: true })}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep2