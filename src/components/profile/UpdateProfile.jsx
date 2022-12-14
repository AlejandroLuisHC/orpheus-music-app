import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IoMdCheckmarkCircle, IoMdCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { FormStyle } from '../style/generalStyle';
import { fetchUpdateUser } from '../../api'
import { DivEditUserData, DivUserData, InputEditStyle, DivEditUserContainer, PTextEdit, ButtonSubmitEdit, SpanIconClick, HrEditProfile } from '../style/profileStyle';

const UpdateProfile = () => {
    const initialState = {
        username: false,
        firstName: false,
        lastName: false,
        location: false,
        password: false
    }
    const [openInput, setOpenInput] = useState(initialState)

    const userDataStore = useSelector(state => state.userData.user.userData);
    const userId = useSelector(state => state.userData.user.id);
    console.log(userId)
    const {
        register,
        handleSubmit,
    } = useForm();

   
    const [UpdateUserData, setUpdateUserData] = useState({
        id: userId,
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
            myAlbums: [],
            myTracks: [],
        },
        myPlaylists: [],
        favPlaylists: [],
        favAlbums: [],
        favTracks: [],
        followers: [],
        following: [],
        isVerified: false,
        isAdmin: false,
        isLoggedIn: false,
    });
    
    const { userData } = UpdateUserData;
    const dispatch = useDispatch();
    const updateUser = ({
        username,
        firstName,
        lastName,
        password

    }) => {

    const data = {  username: username ?? userDataStore.username,
                    firstName: firstName ?? userDataStore.firstName,
                    lastName: lastName ?? userDataStore.lastName,
                    password: password ?? userDataStore.password}
        
        setUpdateUserData({
            ...UpdateUserData,
            userData: { ...userData,
                        username: data.username,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        password: data.password}
        });


        console.log('New data', UpdateUserData);
        console.log('userData', userData);
        setOpenInput(prev => prev = initialState)
    };

    //I use the hook useEfect to fetch the new user data when the state change. using the same logic to store the new data in the redux store for visualice the changes in the moment
    useEffect(() => {
        fetchUpdateUser(UpdateUserData, userId);
        dispatch(UPDATE(UpdateUserData));
    }, [UpdateUserData])

    const goPassword = useNavigate();

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
                <HrEditProfile/>
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
                <HrEditProfile/>
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
                <HrEditProfile/>
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
                        <InputEditStyle />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
                <HrEditProfile/>
            </DivEditUserContainer>
            <DivEditUserContainer>
            
                <DivUserData>
                        <PTextEdit>Change password</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => goPassword('./password')} /></SpanIconClick>
                </DivUserData>
                   
                <HrEditProfile/>
            </DivEditUserContainer>
        </FormStyle>
    )
}

export default UpdateProfile