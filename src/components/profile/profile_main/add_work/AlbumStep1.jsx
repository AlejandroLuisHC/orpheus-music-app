import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { fetchKey } from '../../../../api';
import { ButtonSecondaryStyle, InputStyle, LabelStyle, SelectStyle } from '../../../style/generalStyle';
import { DivModalClose, DivTrackBody, DivTrackImg, ImgTrack, InputDescriptionStyle } from '../../../style/profileStyle';

const AlbumStep1 = ({register,changeModal,close}) => {

    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );
  return (
    <>

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
            />s
        </LabelStyle>
        <ButtonSecondaryStyle onClick={() => changeModal(false)}>Add songs</ButtonSecondaryStyle>
    </DivTrackImg>
    <DivModalClose>
        <IoIosCloseCircleOutline onClick={close} />
    </DivModalClose>
</>
  )
}

export default AlbumStep1