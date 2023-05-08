import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdCheckmarkCircle, IoMdCloudUpload } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneUser, fetchUpdateUser } from '../../api';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { ButtonSubmitEdit, FormUpdateImg, InputImg, LabelUpdateImg } from '../style/profileStyle';

const UpdateProfileImg = () => {
    const { getAccessTokenSilently } = useAuth0()

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
        const token = await getAccessTokenSilently()
        await fetchUpdateUser(changeImg, userDataStore._id, token)
        const updatedUser = await fetchOneUser(userDataStore._id, token)
        console.log(updatedUser);
        dispatch(UPDATE(updatedUser))

    }

    return (
        <FormUpdateImg onChange={handleSubmit(data => updateUserImg(data))}>
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