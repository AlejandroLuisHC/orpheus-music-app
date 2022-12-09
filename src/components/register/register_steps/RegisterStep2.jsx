import { ButtonPrimaryStyle, ButtonSecondaryStyle, InputStyle, PErrorStyle } from '../../style/generalStyle'

const RegisterStep2 = ({ register, watch, setFormSteps, errors }) => {
    const passwordsMatch = (password, confirmPassword) => {
        return password === confirmPassword ? true : false;
    };

    return (
        <>
            <legend>Protect your account</legend>

            <div>
                <label>
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
                </label>
                {errors.password?.message && (
                    <PErrorStyle>{errors.password?.message}</PErrorStyle>
                )}
            </div>

            <div>
                <label>
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
                </label>
                {!passwordsMatch(watch('password'), watch('confirmPassword')) && (
                    <PErrorStyle>Passwords not matching</PErrorStyle>
                )}
            </div>
            <ButtonPrimaryStyle
                onClick={() => setFormSteps(prev => prev = { thirdStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => setFormSteps(prev => prev = { firstStep: true })}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep2