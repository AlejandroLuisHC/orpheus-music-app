import React from 'react'
import { ButtonPrimaryStyle, ButtonSecondaryStyle, DivInputStyle, InputStyle, LabelStyle, SelectStyle } from '../../style/generalStyle'

const RegisterStep3 = ({register, setFormSteps }) => {
    return (
        <>
            <legend>Protect your account</legend>

            <DivInputStyle>
                <LabelStyle>
                    Choose you secret question
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
                </LabelStyle>
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Create your secret answer
                    <InputStyle
                        type="text"
                        placeholder="Your answer..."
                        required
                        secretAnswer
                        {...register('secretAnswer')}
                    />
                </LabelStyle>
            </DivInputStyle>

            <ButtonPrimaryStyle
                onClick={() => setFormSteps(prev => prev = { step: '4', fourthStep: true })}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() => setFormSteps(prev => prev = { step: '2',  secondStep: true })}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep3