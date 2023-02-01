import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdCloudUpload } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateUser } from '../../api';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { LabelStyle } from '../style/generalStyle';
import { FormUpdateImg, InputImg, LabelUpdateImg } from '../style/profileStyle';

const UpdateProfileImg = () => {
    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()
    const userDataStore = useSelector(state => state.userData.user);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [changeImg, setChangeImg] = useState({
        img: userDataStore.img,
    })

    const updateUserImg = async ({
        url
    }) => {
        changeImg.img = url || userDataStore.img
        console.log('url', url)
        setChangeImg({
            ...changeImg
        })
        const {data} = await fetchUpdateUser(changeImg, userDataStore._id, token)
        console.log('DATA', data)
        dispatch(UPDATE(data))

    }

    return (
        <>
            <FormUpdateImg onSubmit={handleSubmit(data => updateUserImg(data))}>
                <LabelUpdateImg>
                <IoMdCloudUpload/>
                <InputImg
                    type='file'
                    {...register('url')}
                    
                />
                </LabelUpdateImg>
            </FormUpdateImg>
        </>
    )
}

export default UpdateProfileImg