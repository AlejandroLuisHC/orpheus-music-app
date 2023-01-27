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

const UpdateProfile = () => {
    const initialState = {
        username: false,
        firstName: false,
        lastName: false,
        location: false,
        password: false
    }
    const [openInput, setOpenInput] = useState(initialState)

    const userDataStore = useSelector(state => state.userData.user);
    const user = useSelector(state => state.userData.user);
    const [location, setLocation] = useState({ country: '', region: '' });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const [UpdateUserData, setUpdateUserData] = useState({
        id: user.id,
        userData: {
            username: userDataStore.username,
            firstName: userDataStore.firstName,
            lastName: userDataStore.lastName,
            email: userDataStore.email,
            country: userDataStore.country,
            city: userDataStore.city,
            password: userDataStore.password,
            secretQuestion: userDataStore.secretQuestion,
            secretAnswer: userDataStore.secretAnswer,
            avatar: userDataStore.avatar,
            banner: userDataStore.banner,
            favGenres: userDataStore.favGenres,
        },
        work: {
            myAlbums: user.work.myAlbums,
            myTracks: user.work.myTracks,
        },
        myPlaylists: user.myPlaylists,
        favPlaylists: user.favPlaylists,
        favAlbums: user.favAlbums,
        favTracks: user.favTracks,
        followers: user.followers,
        following: user.following,
        isVerified: user.isVerified,
        isAdmin: user.isAdmin,
    });

    const { userData } = UpdateUserData;
    const dispatch = useDispatch();

    const updateUser = ({
        username,
        firstName,
        lastName,
        password

    }) => {

        const data = {
            username: username ?? userDataStore.username,
            firstName: firstName ?? userDataStore.firstName,
            lastName: lastName ?? userDataStore.lastName,
            country: location.country ?? userDataStore.country,
            city: location.city ?? userDataStore.citty,
            password: password ?? userDataStore.password
        }

        setUpdateUserData({
            ...UpdateUserData,
            userData: {
                ...userData,
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                country: data.country,
                city: data.city,
                password: data.password
            }
        });
        setOpenInput(prev => prev = initialState)
    };

    //I use the hook useEfect to fetch the new user data when the state change. using the same logic to store the new data in the redux store for visualice the changes in the moment
    useEffect(() => {
        fetchUpdateUser(UpdateUserData, user.id);
        dispatch(UPDATE(UpdateUserData));
    }, [UpdateUserData])


    return (
        <FormStyle onSubmit={handleSubmit(data => updateUser(data))}>
            <DivEditUserContainer>
                {!openInput.username
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.userData.username}</PTextEdit>
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
                {!openInput.firstName
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.userData.firstName}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, firstName: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('firstName', {
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
                {!openInput.lastName
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.userData.lastName}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, lastName: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('lastName', {
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
                        <PTextEdit>{UpdateUserData.userData.country}</PTextEdit>
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