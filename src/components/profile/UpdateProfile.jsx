import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoMdCheckmarkCircle, IoMdCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchUpdateUser from '../../api/fetchUpdateUser';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { FormStyle } from '../style/generalStyle';

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

    const userActualData = useSelector(state => state.userData.user.userData);
    const userId = useSelector(state => state.userData.user.id);
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

   
    const [UpdateUserData, setUpdateUserData] = useState({
        id: userId,
        userData: {
            username: userActualData.username,
            firstName: userActualData.firstName,
            lastName: userActualData.lastName,
            email: userActualData.email,
            country: userActualData.country,
            city: userActualData.city,
            password: userActualData.password,
            secretQuestion: userActualData.secretQuestion,
            secretAnswer: userActualData.secretAnswer,
            avatar: userActualData.avatar,
            banner: userActualData.banner,
            favGenres: userActualData.favGenres,
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

    const data = {  username: username ?? userActualData.username,
                    firstName: firstName ?? userActualData.firstName,
                    lastName: lastName ?? userActualData.lastName,
                    password: password ?? userActualData.password}
        
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
            
            {!openInput.password
            ?
            <DivUserData>
                <PTextEdit>Change password</PTextEdit>
                <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, password: true })}/></SpanIconClick>
            </DivUserData>
            : 
            <ChangePassword 
                register = {register}
                watch = {watch}
                formState = {errors}

            />}
                   
                <HrEditProfile/>
            </DivEditUserContainer>
        </FormStyle>
    )
}

export default UpdateProfile