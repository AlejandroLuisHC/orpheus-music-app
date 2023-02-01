import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateAlbum, fetchKey, fetchOneUser } from '../../../../api'
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
import { DivGenreCircle, DivSelectedGenreCircle } from '../../../style/registerStyle'
import AlbumStep2 from './AlbumStep2'
import {UPDATE} from './../../../../redux/features/user_data/userSlice'
import AlbumStep1 from './AlbumStep1'

const AddAlbum = () => {
    const dispatch = useDispatch();
   
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
    const user =useSelector(state =>state.userData.user)
    console.log(user)
    useEffect(() => {
        console.log("entrando")
      close
    }, [user])
    
    const { user: userAuth, getAccessTokenSilently } = useAuth0();

    const id = useSelector((state) => state.userData.user._id);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userTracksData, setUserTracksData] = useState([])
    const [bolleanStep, setBolleanStep] = useState(true)
    const [albumData, setAlbumData] = useState({
        name: '',
        description: '',
        img: {},
        tracks: [],
        followers: 0,
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
        albumData.tracks = userTracksData

        setAlbumData({
            ...albumData
        })
        console.log(albumData)
        const token = await getAccessTokenSilently()
        const data = await fetchCreateAlbum(albumData, token)
        console.log(data)
        const updateUser = await fetchOneUser(id,token)
        
        dispatch(UPDATE(updateUser))

        changeModal(true)
        
    }
    const changeModal = (boolean) => {
        setBolleanStep(prev => prev = boolean)
        boolean === true && close

    }

    return (
        <>
            <ButtonSecondaryStyle onClick={open}>Add albums</ButtonSecondaryStyle>
            <Modal>
                <DivModalTrack>
                    <h1>ALBUMS</h1>
                    <FormTracks onSubmit={
                        handleSubmit(data => createAlbum(data))
                    }>
                        {bolleanStep ?
                          <AlbumStep1 changeModal={changeModal} register={register} close={close}/>
                            :
                            <AlbumStep2 tracks={userTracksData} setTracks={setUserTracksData} />}
                    </FormTracks>
                </DivModalTrack>
            </Modal>
        </>
    )
}

export default AddAlbum