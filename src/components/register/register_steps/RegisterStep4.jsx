import { useAuth0 } from '@auth0/auth0-react'
import Avatar from 'boring-avatars'
import { 
    ButtonPrimaryStyle, 
    ButtonSecondaryStyle, 
    DivImgCircleL, 
    DivImgCircleM, 
    DivImgCircleS, 
    DivInputStyle, 
    ImgLogoL, 
    InputStyle,  
    LabelStyle, 
    SelectCountry, 
    SelectRegion 
} from '../../style/generalStyle'
import { 
    DivFlexGenres, 
    PSkip, 
    SpanSkip 
} from '../../style/registerStyle'

const RegisterStep4 = ({register, setFormSteps, location, setLocation , setAvatar}) => {
    const { user } = useAuth0();
    const avatarId = user?.picture ?? JSON.stringify(new Date())

    return (
        <>
            <legend>About you</legend>

            <PSkip>
                <span>or</span><SpanSkip onClick={() => setFormSteps(prev => prev = { fifthStep: true })}>skip</SpanSkip><span>and complete later</span>
            </PSkip>

            <DivInputStyle>
                <LabelStyle>
                    What's your name
                    <InputStyle 
                        type="text"
                        defaultValue={user?.given_name || "First name"}
                        required 
                        {...register('firstName')} 
                    />
                </LabelStyle>
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Your lastname
                    <InputStyle 
                        type="text"
                        defaultValue={user?.family_name || "First name"}
                        required 
                        {...register('lastName')} 
                    />
                </LabelStyle>
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Where are you from?
                    <div style={{display: "flex"}}>
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
            
            {/* <DivFlexGenres>
                <DivImgCircleL>
                    {user?.picture
                        ? <ImgLogoL src={user?.picture} alt="User's avatar" width="120px" />
                        :   <Avatar 
                            size={120}
                            name={avatarId}
                            variant="beam"
                            colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
                        />
                    }
                </DivImgCircleL>
                <div>
                    <DivImgCircleM>
                    {user?.picture
                        ? <ImgLogoL src={user?.picture} alt="User's avatar" width="70px" />
                        :   <Avatar 
                            size={70}
                            name={avatarId}
                            variant="beam"
                            colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
                        />
                    }
                    </DivImgCircleM>

                    <DivImgCircleS>
                    {user?.picture
                        ? <ImgLogoL src={user?.picture} alt="User's avatar" width="30px" />
                        :   <Avatar 
                            size={30}
                            name={avatarId}
                            variant="beam"
                            colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
                        />
                    }
                    </DivImgCircleS>
                </div>
            </DivFlexGenres> */}
            <ButtonPrimaryStyle type="button" 
                // onClick={handleSubmit((x) => console.log(x.avatar))}
                onClick={() => {setFormSteps(prev => prev = { step: '5',  fifthStep: true }); setAvatar(prev=> prev = avatarId)}}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle type="button" onClick={() =>{setFormSteps(prev => prev = { step: '1',  firstStep: true })} }>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep4