import React from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { 
    ButtonPrimaryStyle, 
    ButtonSecondaryStyle, 
    InputStyle, 
    LabelStyle, 
    SelectStyle 
} from '../../../style/generalStyle'
import { 
    DivModalClose, 
    DivModalTrack,
    DivTrackBody, 
    DivTrackImg, 
    FormTracks, 
    ImgTrack, 
    InputDescriptionStyle 
} from '../../../style/profileStyle'
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchKey } from '../../../../api'
import fetchCreateTrack from '../../../../api/fetchCreateTrack'

const AddTrack = () => {
    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
    const { user: userAuth } = useAuth0();
    const id = useSelector((state) => state.userData.user._id);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [trackData, setTrackData] = useState({
        name: '',
        description: '',
        img: {},
        file: {},
        genres: [],
        ownership: [id]
    })

    const createTrack = async ({
        ownership,
        file,
        img,
        description,
        name,
        genres
    }) => {
        trackData.name = name || `${userAuth.given_name}-Song`;
        trackData.description = description || 'Orpheus is awesome';
        trackData.img = img || 'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479861/Final-Project-MERN/images-orpheus/default-images/track_okeksf.webp';
        trackData.file = file;
        trackData.genres = [genres] || [];

        setTrackData({
            ...trackData
        });

        const data = await fetchCreateTrack(trackData)

        data.status === 'Created';
        data.status === 'false' && console.log("There was a problem creating the track");
    }

    return (
        <>
            <ButtonSecondaryStyle onClick={open}>Add Track</ButtonSecondaryStyle>
            <Modal>
                <DivModalTrack>
                    <h1>TRACK</h1>
                    <FormTracks onSubmit={
                        handleSubmit(data => createTrack(data))
                    }>
                        <DivTrackBody>
                            <LabelStyle>
                                Insert Track audio
                                <input
                                    type='file'
                                    // required
                                    {...register('file', {
                                        required: true
                                    })}
                                />
                            </LabelStyle>
                            <br />
                            <LabelStyle>
                                Song name
                                <InputStyle
                                    type='text'
                                    placeholder='Song name'
                                    required
                                    {...register('name', {
                                        // required: true
                                    })}
                                />
                            </LabelStyle>
                            <LabelStyle>
                                Description
                                <InputDescriptionStyle
                                    type='text'
                                    placeholder='Description'
                                    {...register('description', {
                                        required: true
                                    })}
                                />
                            </LabelStyle>
                            <LabelStyle>
                                select a genre
                                <SelectStyle
                                    required
                                    {...register('genres', {
                                        required: true
                                    })}>
                                    {genres?.map((option) => {
                                        return <option key={option._id} value={option._id}>{option.name}</option>
                                    })}
                                </SelectStyle>
                            </LabelStyle>
                        </DivTrackBody>
                        <DivTrackImg>
                            <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479861/Final-Project-MERN/images-orpheus/default-images/track_okeksf.webp'} />
                            <LabelStyle>
                                Choose picture for your track!
                                <input
                                    type='file'
                                    // required
                                    {...register('img', {
                                        required: true
                                    })}
                                />
                            </LabelStyle>
                            <ButtonPrimaryStyle type='submit'>Upload track!</ButtonPrimaryStyle>
                        </DivTrackImg>
                    </FormTracks>

                    <DivModalClose>
                        <IoIosCloseCircleOutline onClick={close} />
                    </DivModalClose>
                </DivModalTrack>
            </Modal>
        </>
    )
}

export default AddTrack