import { useAuth0 } from '@auth0/auth0-react'
import {
    ButtonPrimaryStyle,
    ButtonSecondaryStyle,
    DivInputStyle,
    InputStyle,
    LabelStyle,
    PErrorStyle,
    SelectCountry,
    SelectRegion
} from '../../style/generalStyle'
import {
    PSkip,
    SpanSkip
} from '../../style/registerStyle'

const RegisterStep2 = ({ register, watch, errors, setFormSteps, location, setLocation, setAvatar }) => {
    const { user } = useAuth0();
    const avatarId = user?.picture ?? ""

    return (
        <>
            <legend>About you</legend>

            <PSkip>
                <span>or</span><SpanSkip onClick={() => setFormSteps(prev => prev = { step: '3', thirdStep: true })}>skip</SpanSkip><span>and complete later</span>
            </PSkip>

            <DivInputStyle>
                <LabelStyle>
                    What's your name
                    <InputStyle
                        type="text"
                        defaultValue={user?.given_name || ""}
                        required
                        {...register('firstName', {
                            validate: value => value.length >= 2 && value.length <= 20
                        })}
                    />
                </LabelStyle>
                {(watch("firstName")?.length > 20 || watch("firstName")?.length < 2) && <PErrorStyle>Please enter a valid name</PErrorStyle>}
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Your family name
                    <InputStyle
                        type="text"
                        defaultValue={user?.family_name || ""}
                        required
                        {...register('lastName', {
                            validate: value => value.length >= 2 && value.length <= 40
                        })}
                    />
                </LabelStyle>
                {(watch("lastName")?.length > 40 || watch("lastName")?.length < 2) && <PErrorStyle>Please enter a valid family name</PErrorStyle>}
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Where are you from?
                    <div style={{ display: "flex" }}>
                        <SelectCountry
                            value={location.country}
                            onChange={(country) =>
                                setLocation(prev => prev = { ...prev, country })
                            }
                        />
                        <SelectRegion
                            country={location.country}
                            value={location.region}
                            onChange={(region) =>
                                setLocation(prev => prev = { ...prev, region })
                            }
                        />
                    </div>
                </LabelStyle>
            </DivInputStyle>

            <ButtonPrimaryStyle type="button"
                disabled={!location.country || !location.region || watch('firstName')?.length < 2 || watch('lastName')?.length < 2 || watch('lastName')?.length > 40 || watch('firstName')?.length > 20}
                onClick={() => { setFormSteps(prev => prev = { step: '3', thirdStep: true }); setAvatar(prev => prev = avatarId) }}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle type="button" onClick={() => { setFormSteps(prev => prev = { step: '1', firstStep: true }) }}>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep2