import Avatar from 'boring-avatars'
import { ButtonPrimaryStyle, ButtonSecondaryStyle, DivImgCircleL, DivImgCircleM, DivImgCircleS, DivInputStyle, InputStyle, LabelFilesStyle, LabelStyle, SelectCountry, SelectRegion } from '../../style/generalStyle'
import { DivFlexGenres, PSkip, SpanSkip } from '../../style/registerStyle'

const RegisterStep4 = ({register, setFormSteps, location, setLocation , setAvatar}) => {
    const avatarId = JSON.stringify(new Date())
    
    return (
        <>
            <legend>Protect your account</legend>

            <PSkip>
                <span>or</span><SpanSkip onClick={() => setFormSteps(prev => prev = { fifthStep: true })}>skip</SpanSkip><span>and complete later</span>
            </PSkip>

            <DivInputStyle>
                <LabelStyle>
                    What's your name
                    <InputStyle 
                        type="text"
                        placeholder="First name"
                        required {...register('firstName')} 
                    />
                </LabelStyle>
            </DivInputStyle>

            <DivInputStyle>
                <LabelStyle>
                    Your lastname
                    <InputStyle 
                        type="text"
                        placeholder="Last name"
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

            <DivInputStyle>
                <LabelFilesStyle style={{cursor: "pointer"}} htmlFor='uploadPic'> This is your avatar! </LabelFilesStyle>
                {/* <LabelFilesStyle style={{cursor: "pointer"}} htmlFor='uploadPic'> Upload a photo </LabelFilesStyle> */}
                {/* <input id="uploadPic" style={{visibility: "hidden"}} type="file" {...register('avatar')} /> */}
            </DivInputStyle>
            
            <DivFlexGenres>
                <DivImgCircleL>
                    <Avatar 
                        size={110}
                        name={avatarId}
                        variant="beam"
                        colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
                    />
                </DivImgCircleL>
                <div>
                    <DivImgCircleM>
                        <Avatar 
                            size={70}
                            name={avatarId}
                            variant="beam"
                            colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
                        />
                    </DivImgCircleM>

                    <DivImgCircleS>
                        <Avatar 
                            size={30}
                            name={avatarId}
                            variant="beam"
                            colors={["#EFB810", "#F85858", "#00FFCD", "#0E6BA8", "#3D3D3D"]}
                        />
                    </DivImgCircleS>
                </div>
            </DivFlexGenres>
            <ButtonPrimaryStyle
                // onClick={handleSubmit((x) => console.log(x.avatar))}
                onClick={() => {setFormSteps(prev => prev = { step: '5',  fifthStep: true }); setAvatar(prev=> prev = avatarId)}}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() =>{setFormSteps(prev => prev = { step: '3',  thirdStep: true })} }>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep4