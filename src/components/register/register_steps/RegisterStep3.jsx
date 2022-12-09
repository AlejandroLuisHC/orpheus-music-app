import React from 'react'
import { ButtonPrimaryStyle, ButtonSecondaryStyle, InputStyle, SelectStyle } from '../../style/generalStyle'

const RegisterStep3 = ({register, setFormSteps }) => {
    return (
        <>
            <legend>Protect your account</legend>

            <div>
                <SelectStyle {...register('secretQuestion')}>
                    <option value="What is your favourite song?">
                        What is your favourite song?
                    </option>
                    <option value="What is your favourite pizza?">
                        What is your favourite pizza?
                    </option>
                    <option value="What is your favourite city?">
                        What is your favourite city?
                    </option>
                </SelectStyle>
            </div>

            <div>
                <label>
                    Create your secret answer
                    <InputStyle
                        type="text"
                        placeholder="Your answer..."
                        required
                        secretAnswer
                        {...register('secretAnswer')}
                    />
                </label>
            </div>

            <ButtonPrimaryStyle
                onClick={() => setFormSteps(prev => prev = { fourthStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => setFormSteps(prev => prev = { secondStep: true })}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep3