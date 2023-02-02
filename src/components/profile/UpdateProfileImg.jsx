import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdCloudUpload } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateUser } from '../../api';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { FormUpdateImg, InputImg, LabelUpdateImg } from '../style/profileStyle';

const UpdateProfileImg = () => {
    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()
    const userDataStore = useSelector(state => state.userData.user);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
    } = useForm();

    const [changeImg, setChangeImg] = useState({
        img: userDataStore.img,
    })

    const updateUserImg = async ({
        url
    }) => {
        changeImg.img = url || userDataStore.img

        setChangeImg({
            ...changeImg
        })
        const { data } = await fetchUpdateUser(changeImg, userDataStore._id, token)

        dispatch(UPDATE(data))

    }

    return (
        <FormUpdateImg onSubmit={handleSubmit(data => updateUserImg(data))}>
            <LabelUpdateImg>
                <IoMdCloudUpload />
                <InputImg
                    type='file'
                    {...register('url')}

                />
                </LabelUpdateImg>
            </FormUpdateImg>
    )
}

export default UpdateProfileImg