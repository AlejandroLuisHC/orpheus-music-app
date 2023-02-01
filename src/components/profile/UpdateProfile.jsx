import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IoMdCheckmarkCircle, IoMdCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { FormStyle, SelectCountry, SelectRegion } from '../style/generalStyle';
import { fetchUpdateUser } from '../../api'
import { DivEditUserData, DivUserData, InputEditStyle, DivEditUserContainer, PTextEdit, ButtonSubmitEdit, SpanIconClick, HrEditProfile } from '../style/profileStyle';
import ChangePassword from './ChangePassword';
import { useAuth0 } from '@auth0/auth0-react';
const UpdateProfile = () => {
    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()
    const initialState = {
        username: false,
        firstName: false,
        lastName: false,
        location: false,
        password: false
    }
    const [openInput, setOpenInput] = useState(initialState)
    const { user: userAuth } = useAuth0();
    const userDataStore = useSelector(state => state.userData.user);
    const user = useSelector(state => state.userData.user);
    const [location, setLocation] = useState({ country: '', region: '' });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    console.log(userDataStore.country)
    console.log(userDataStore.region)
    const [UpdateUserData, setUpdateUserData] = useState({
        username: userDataStore.username || userAuth?.nickname,
        country: userDataStore.country,
        region: userDataStore.region,
        favGenres: user.favGenres,
    });

    const dispatch = useDispatch();

    const updateUser = async ({
        username,
    }) => {
        UpdateUserData.username = username ?? userDataStore.username,
        UpdateUserData.country = location.country ?? userDataStore.country,
        UpdateUserData.region = location.region ?? userDataStore.region,
        

        setUpdateUserData({
            ...UpdateUserData,
        });
        setOpenInput(prev => prev = initialState)
        const {data} = await fetchUpdateUser(UpdateUserData, userDataStore._id, token);
        dispatch(UPDATE(data));
        
    };

    return (
        <FormStyle onSubmit={handleSubmit(data => updateUser(data))}>
            <DivEditUserContainer>
                {!openInput.username
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.username}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, username: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('username', {
                                required: true
                            })}
                        />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
                <HrEditProfile />
            </DivEditUserContainer>
            <DivEditUserContainer>
                {!openInput.location
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.country}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, location: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
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
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
                <HrEditProfile />
            </DivEditUserContainer>
            <DivEditUserContainer>

                {!openInput.password
                    ?
                    <DivUserData>
                        <PTextEdit>Change password</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, password: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <ChangePassword
                        register={register}
                        watch={watch}
                        formState={errors}

                    />}

                <HrEditProfile />
            </DivEditUserContainer>
        </FormStyle>
    )
}

export default UpdateProfile
