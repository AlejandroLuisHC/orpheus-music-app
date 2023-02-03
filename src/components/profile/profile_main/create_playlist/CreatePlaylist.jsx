import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import React, { useState, memo } from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCreatePlaylist, fetchKey, fetchOneUser } from '../../../../api'
import { UPDATE } from '../../../../redux/features/user_data/userSlice'
import LogoSpinnerRegister from '../../../general_components/loaders/spinner/LogoSpinnerRegister'
import { 
    ButtonSecondaryStyle,
    InputStyle, 
    LabelFileStyle, 
    LabelStyle, 
    PErrorStyle, 
    SelectStyle 
} from '../../../style/generalStyle'
import { 
    ButtonProfileStyle, 
    DivBlockForm, 
    DivColumns, 
    DivModalClose, 
    DivModalTrack, 
    FormTracks, 
    ImgTrack, 
    InputDescriptionStyle 
} from '../../../style/profileStyle'

const CreatePlaylist = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
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
        followers: 0
    })
    const createTrack = async ({
        mood,
        img,
        description,
        name,
        genres
    }) => {
        setLoading(true)

        playlistData.name = name || `${userAuth.given_name}-Song`;
        playlistData.description = description || 'Orpheus is awesome';
        playlistData.img = img || 'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479864/Final-Project-MERN/images-orpheus/default-images/playlist_mcyltf.webp';
        playlistData.genres = [genres] || [];
        playlistData.moods = [mood] || [];

        setPlaylistData({
            ...playlistData
        });
        const token = await getAccessTokenSilently()
        const data = await fetchCreatePlaylist(playlistData, token)

        const updatedUser = await fetchOneUser(id, token)
        !updatedUser.islogged && dispatch(UPDATE(updatedUser)) && navigate(`/playlist/${data.data.playlist._id}`)
        setLoading(false)
        data.status === 'Created';
        data.status === 'false' && console.log("There was a problem creating the playlist");
    }

    return (
        <>
            <ButtonProfileStyle onClick={open}>Create Playlist</ButtonProfileStyle>
            <Modal>
                <DivModalTrack>
                    <DivModalClose>
                        <h1>Playlist</h1>
                        <IoIosCloseCircleOutline onClick={close} size={25} />
                    </DivModalClose>

                    <FormTracks onSubmit={
                        handleSubmit(data => createTrack(data))
                    }>
                        {
                            loading
                                ? <LogoSpinnerRegister />
                                :
                                <>
                                    <DivColumns>
                                        {/* image & name & mood */}
                                        <div>
                                            {/* Image */}
                                            <DivBlockForm>
                                                <figure>
                                                    <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479864/Final-Project-MERN/images-orpheus/default-images/playlist_mcyltf.webp'} alt="Default image" title="Default Image" size={60} />
                                                    <figcaption>Default Image</figcaption>
                                                </figure>
                                            </DivBlockForm>

                                            {/* Name Playlist */}
                                            <DivBlockForm>
                                                <LabelStyle>
                                                    Playlist name
                                                    <InputStyle
                                                        type='text'
                                                        placeholder='Playlist name'
                                                        required
                                                        {...register('name', {
                                                            validate: value => value.length >= 2 && value.length <= 20,
                                                        })}
                                                    />
                                                    {(watch("name")?.length > 20 || watch("name")?.length < 2) && <PErrorStyle>Please enter a valid playlist name</PErrorStyle>}
                                                </LabelStyle>
                                            </DivBlockForm>

                                            {/* Mood */}
                                            <DivBlockForm>
                                                <LabelStyle>
                                                    Insert mood
                                                    <InputStyle
                                                        type='text'
                                                        placeholder='mood'
                                                        required
                                                        {...register('mood', {
                                                            validate: value => value.length >= 2 && value.length <= 20,
                                                        })}
                                                    />
                                                    {(watch("mood")?.length > 20 || watch("mood")?.length < 2) && <PErrorStyle>Please enter a valid mood</PErrorStyle>}
                                                </LabelStyle>
                                            </DivBlockForm>
                                        </div>

                                        {/* description & genre & choose picture */}
                                        <div>
                                            {/* Description */}
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
                                                    {(watch("name")?.length > 20 || watch("name")?.length < 2) && <PErrorStyle>Please enter a valid description</PErrorStyle>}
                                                </LabelStyle>
                                            </DivBlockForm>

                                            {/* Genres */}
                                            <DivBlockForm>
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
                                            </DivBlockForm>

                                            {/* choose picture */}
                                            <DivBlockForm>
                                                <LabelFileStyle htmlFor={"file"}>
                                                    Choose a picture for your playlist!
                                                    <input id="file"
                                                        type='file'
                                                        style={{ visibility: 'hidden' }}
                                                        {...register('img', {
                                                            required: false
                                                        })}
                                                    />
                                                    {(watch("img") === undefined) || (watch("img").length === 0) && <PErrorStyle>Your playlist will use the default image</PErrorStyle>}
                                                </LabelFileStyle>
                                            </DivBlockForm>
                                        </div>
                                    </DivColumns>

                                    {/* Button */}
                                    <DivBlockForm>
                                        <ButtonSecondaryStyle
                                            type='submit'
                                            disabled={watch('name')?.length < 2 || watch('description')?.length < 2}
                                        >Upload playlist!
                                        </ButtonSecondaryStyle>
                                    </DivBlockForm>
                                </>
                        }
                    </FormTracks>
                </DivModalTrack>
            </Modal>
        </>
    )
}

export default memo(CreatePlaylist)