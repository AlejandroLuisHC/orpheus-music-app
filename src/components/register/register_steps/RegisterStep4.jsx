import Avatar from 'boring-avatars'
import { ButtonPrimaryStyle, ButtonSecondaryStyle, DivImgCircleL, DivImgCircleM, DivImgCircleS, InputStyle, LabelFilesStyle, SelectCountry, SelectRegion } from '../../style/generalStyle'

const RegisterStep4 = ({register, setFormSteps, location, setLocation , setAvatar}) => {
    const avatarId = JSON.stringify(new Date())
    
    return (
        <>
            <legend>Protect your account</legend>

            <p onClick={() => setFormSteps(prev => prev = { fifthStep: true })}>
                Skip and complete later
            </p>

            <div>
                <label>
                    What's your name
                    <InputStyle 
                        type="text"
                        placeholder="First name"
                        required {...register('firstName')} 
                    />
                </label>
            </div>

            <div>
                <label>
                    Your lastname
                    <InputStyle 
                        type="text"
                        placeholder="Last name"
                        required 
                        {...register('lastName')} 
                    />
                </label>
            </div>

            <div>
                <label>
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
                </label>
            </div>

            <div>
                <LabelFilesStyle style={{cursor: "pointer"}} htmlFor='uploadPic'> Upload a photo </LabelFilesStyle>
                <input id="uploadPic" style={{visibility: "hidden"}} type="file" {...register('avatar')} />
            </div>
            
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <DivImgCircleL>
                    <Avatar 
                        size={110}
                        name={avatarId}
                        variant="beam"
                        colors={["#EFB810", "#151515", "#F3C332", "#D9D9D9", "#3D3D3D"]}
                    />
                </DivImgCircleL>

                <DivImgCircleM>
                    <Avatar 
                        size={70}
                        name={avatarId}
                        variant="beam"
                        colors={["#EFB810", "#151515", "#F3C332", "#D9D9D9", "#3D3D3D"]}
                    />
                </DivImgCircleM>

                <DivImgCircleS>
                    <Avatar 
                        size={30}
                        name={avatarId}
                        variant="beam"
                        colors={["#EFB810", "#151515", "#F3C332", "#D9D9D9", "#3D3D3D"]}
                    />
                </DivImgCircleS>
            </div>
            <ButtonPrimaryStyle
                // onClick={handleSubmit((x) => console.log(x.avatar))}
                onClick={() => {setFormSteps(prev => prev = { fifthStep: true }); setAvatar(prev=> prev = avatarId)}}
            >
                Next
            </ButtonPrimaryStyle>
            <ButtonSecondaryStyle onClick={() =>{setFormSteps(prev => prev = { thirdStep: true })} }>Back</ButtonSecondaryStyle>
        </>
    )
}

export default RegisterStep4