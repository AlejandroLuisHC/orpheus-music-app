import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { fetchCreateAlbum, fetchKey } from '../../../../api'
import { ButtonPrimaryStyle, ButtonSecondaryStyle, InputStyle, LabelStyle, SelectStyle } from '../../../style/generalStyle'
import { 
    DivModalAlbum, 
    DivModalClose,  
    DivModalTrack,  
    DivTrackBody,  
    DivTrackImg,  
    FormTracks,
    ImgTrack,
    InputDescriptionStyle
} from '../../../style/profileStyle'
import AddTrackToAlbum from './AddTrackToAlbum'

const AddAlbum = () => {

    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    const { user: userAuth ,getAccessTokenSilently} = useAuth0();

    const id = useSelector((state) => state.userData.user._id);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [albumData,setAlbumData] = useState({
        name: '',
        description: '',
        img: {},
        tracks: [],
        followers:0,
        genres: [],
        ownership: id
    })

    const createAlbum = async ({
        name,
        description,
        img,
        genres,
    }) => {
        albumData.name = name || `${userAuth.given_name}-Album`;
        albumData.description = description || 'Orpheus is awesome';
        albumData.img = img || 'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479869/Final-Project-MERN/images-orpheus/default-images/album_zskqhh.webp';
        albumData.genres = [genres] || [];

        setAlbumData({
            ...albumData
        })
            
            const token = await getAccessTokenSilently()
            await fetchCreateAlbum(albumData,token)
        
    }

    

    return (
        <>
             <ButtonSecondaryStyle onClick={open}>Add albums</ButtonSecondaryStyle>
            <Modal>
                <DivModalTrack>
                    <h1>ALBUMS</h1>
                    <FormTracks onSubmit={
                        handleSubmit(data =>createAlbum(data))
                    }>
                        <DivTrackBody>
                          
                            <LabelStyle>
                                Album name
                                <InputStyle
                                    type='text'
                                    placeholder='Album name'
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
                            <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479869/Final-Project-MERN/images-orpheus/default-images/album_zskqhh.webp'} />
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
                            <AddTrackToAlbum />
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

export default AddAlbum