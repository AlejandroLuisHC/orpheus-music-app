import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreatePlaylist, fetchKey, fetchOneUser } from '../../../../api'
import { UPDATE } from '../../../../redux/features/user_data/userSlice'
import { ButtonPrimaryStyle, InputStyle, LabelStyle, SelectStyle } from '../../../style/generalStyle'
import { ButtonProfileStyle, DivModalClose, DivModalTrack, DivTrackBody, DivTrackImg, FormTracks, ImgTrack, InputDescriptionStyle } from '../../../style/profileStyle'

const CreatePlaylist = () => {

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { user: userAuth, getAccessTokenSilently } = useAuth0();
    const id = useSelector((state) => state.userData.user._id);
    const dispatch = useDispatch();

    const [playlistData, setPlaylistData] = useState({
        name: '',
        description: '',
        img: '',
        tracks: [],
        genres: [],
        moods: [],
        ownership: id,
        followers:0
    })
    const createTrack = async ({
        moods,
        img,
        description,
        name,
        genres
    }) => {
        playlistData.name = name || `${userAuth.given_name}-Song`;
        playlistData.description = description || 'Orpheus is awesome';
        playlistData.img = img || 'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479864/Final-Project-MERN/images-orpheus/default-images/playlist_mcyltf.webp';
        playlistData.genres = [genres] || [];
        playlistData.moods = [moods] || [];

        setPlaylistData({
            ...playlistData
        });
        const token = await getAccessTokenSilently()
        const data = await fetchCreatePlaylist(playlistData,token)
        
        const updateUser = await fetchOneUser(id,token)
        dispatch(UPDATE(updateUser))
        data.status === 'Created';
        data.status === 'false' && console.log("There was a problem creating the playlist"); 
    }

    return (
        <>


            <ButtonProfileStyle onClick={open}>Create Playlist</ButtonProfileStyle>
            <Modal>
                <DivModalTrack>
                    <h1>Playlist</h1>
                    <FormTracks onSubmit={
                        handleSubmit(data => createTrack(data))
                    }>
                        <DivTrackBody>
                            <LabelStyle>
                                Insert mood
                                <InputStyle
                                    type='text'
                                    placeholder='mood'
                                    required
                                    {...register('mood', {
                                        // required: true
                                    })}
                                />
                            </LabelStyle>
                            <br />
                            <LabelStyle>
                                Playlist name
                                <InputStyle
                                    type='text'
                                    placeholder='Playlist name'
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
                                Select a genre
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
                            <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479864/Final-Project-MERN/images-orpheus/default-images/playlist_mcyltf.webp'} />
                            <LabelStyle>
                                Choose picture for your playlist!
                                <input
                                    type='file'
                                    // required
                                    {...register('img', {
                                        required: true
                                    })}
                                />
                            </LabelStyle>
                            <ButtonPrimaryStyle type='submit'>Upload playlist!</ButtonPrimaryStyle>
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

export default CreatePlaylist