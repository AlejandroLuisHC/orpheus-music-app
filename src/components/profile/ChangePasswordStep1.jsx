import React from 'react'
import { ButtonPrimaryStyle, DivInputStyle, InputStyle, LabelStyle, PErrorStyle } from '../style/generalStyle'

const ChangePasswordStep1 = ({ register, watch, setFormSteps, passwordValidation }) => {
    return (
        <>
            <legend>For your security write your current password</legend>
            <DivInputStyle>
                <LabelStyle>
                    <p>Your current Password:</p>
                    <InputStyle
                        type="text"
                        placeholder="Password"
                        required
                        {...register("currentPassword", {
                            required: true,
                            validate: passwordValidation(watch('currentPassword'))
                        })}
                    />
                </LabelStyle>
                {!passwordValidation(watch('currentPassword')) && (
                    <PErrorStyle>Wrong password</PErrorStyle>
                )}

            </DivInputStyle>
            <ButtonPrimaryStyle disabled={!passwordValidation(watch('currentPassword'))} onClick={() => passwordValidation(watch('currentPassword')) && setFormSteps(prev => prev = { step: '2', secondStep: true })}>
                Next
            </ButtonPrimaryStyle>
        </>
    )
}

export default ChangePasswordStep1