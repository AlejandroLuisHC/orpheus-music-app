import React from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
    ButtonPrimaryStyle,
    ButtonSecondaryStyle,
    DivInputStyle,
    InputStyle,
    LabelFileStyle,
    LabelStyle,
    PErrorStyle,
    SelectStyle
} from '../../../style/generalStyle'
import {
    DivBlockForm,
    DivColumns,
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
import { fetchCreateTrack, fetchKey, fetchOneUser } from '../../../../api'
import { UPDATE } from './../../../../redux/features/user_data/userSlice'
import { useNavigate } from 'react-router-dom'


const AddTrack = () => {
    const navigate = useNavigate()
    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
    const { user: userAuth, getAccessTokenSilently } = useAuth0();
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
        ownership: id
    })

    const createTrack = async ({
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
        const token = await getAccessTokenSilently()
        const data = await fetchCreateTrack(trackData, token)

        const updatedUser = await fetchOneUser(id, token)
        !updatedUser.islogged && dispatch(UPDATE(updatedUser))
        navigate(`/track/${data.data.newTrack._id}`)
        data.status === 'Created';
        data.status === 'false' && console.log("There was a problem creating the track"); // aqui no hay condicional ni na , para que es esto
    }

    return (
        <>
            <ButtonSecondaryStyle onClick={open}>Add Track</ButtonSecondaryStyle>
            <Modal>
                <DivModalTrack>
                    <DivModalClose>
                        <h1>Tracks</h1>
                        <IoIosCloseCircleOutline onClick={close} size={25} />
                    </DivModalClose>

                    <FormTracks onSubmit={
                        handleSubmit(data => createTrack(data))
                    }>
                        {/* CHOOSE TRACK// TRACK NAME// GENRE */}
                        <DivColumns>
                            <div>
                                {/* track name */}
                                <DivBlockForm>
                                    <LabelStyle>
                                        Track name
                                        <InputStyle
                                            type='text'
                                            placeholder='Song name'
                                            required
                                            {...register('name', {
                                                // required: true
                                                validate: value => value.length >= 2 && value.length <= 20,
                                            })}
                                        />
                                        {(watch("name")?.length > 20 || watch("name")?.length < 2) && <PErrorStyle>Please enter a valid name</PErrorStyle>}
                                    </LabelStyle>
                                </DivBlockForm>

                                {/* select genre */}
                                <DivBlockForm>
                                    <LabelStyle>
                                        Select a genre
                                        <SelectStyle
                                            required
                                            {...register('genres', {
                                                required: true,
                                            })}>
                                            {genres?.map((option) => {
                                                return <option key={option._id} value={option._id}>{option.name}</option>
                                            })}
                                        </SelectStyle>
                                    </LabelStyle>
                                </DivBlockForm>

                                {/* description */}
                                <DivBlockForm>
                                    <LabelStyle>
                                        Description
                                        <InputDescriptionStyle
                                            type='text'
                                            placeholder='Description'
                                            {...register('description', {
                                                required: true,
                                                validate: value => value.length >= 2 && value.length <= 200,
                                            })}
                                        />
                                        {(watch("description")?.length > 200 || watch("description")?.length < 2) && <PErrorStyle>Please enter a valid description</PErrorStyle>}
                                    </LabelStyle>
                                </DivBlockForm>
                            </div>

                            <div>
                                {/* choose track */}
                                <DivBlockForm>
                                    <LabelFileStyle for={"audioFile"}>
                                        Insert audio track (.mp3)
                                        <input id={"audioFile"}
                                            type='file'
                                            style={{ visibility: "hidden" }}
                                            {...register('file', {
                                                required: true
                                            })}
                                        />
                                        {(watch("file") === undefined) || (watch("file").length === 0) && <PErrorStyle>Please enter a valid file</PErrorStyle>}
                                    </LabelFileStyle>
                                </DivBlockForm>

                                {/* Image */}
                                <DivBlockForm>
                                    <figure>
                                        <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479861/Final-Project-MERN/images-orpheus/default-images/track_okeksf.webp'} alt="Default image" title="Default Image" size={60} />
                                        <figcaption>Default Image</figcaption>
                                    </figure>
                                </DivBlockForm>

                                {/* choose picture */}
                                <DivBlockForm>
                                    <LabelFileStyle for={"imgFile"}>
                                        Choose a picture for your track! <br />(.jpg, .png, .webp)
                                        <input id={"imgFile"}
                                            type='file'
                                            style={{ visibility: "hidden" }}
                                            {...register('img', {
                                                required: true
                                            })}
                                        />
                                        {(watch("img") === undefined) || (watch("img").length === 0) && <PErrorStyle>Your track will use the default image</PErrorStyle>}
                                    </LabelFileStyle>
                                </DivBlockForm>
                            </div>
                        </DivColumns>

                        {/* Button */}
                        <DivBlockForm>
                            <ButtonSecondaryStyle
                                type='submit'
                                disabled={watch('name')?.length < 2 || watch('description')?.length < 2 || (watch("file") === undefined) || (watch("file").length === 0)}
                            >Upload track!</ButtonSecondaryStyle>
                        </DivBlockForm>
                    </FormTracks>
                </DivModalTrack>

            </Modal>
        </>
    )
}

export default AddTrack