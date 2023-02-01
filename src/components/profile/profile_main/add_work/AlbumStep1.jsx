import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { fetchKey } from '../../../../api';
import { ButtonSecondaryStyle, DivInputStyle, InputStyle, LabelStyle, PErrorStyle, SelectStyle } from '../../../style/generalStyle';
import { DivModalClose, DivTrackBody, DivTrackImg, ImgTrack, InputDescriptionStyle } from '../../../style/profileStyle';

const AlbumStep1 = ({ register, changeModal, close, watch }) => {

    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );

    return (
        <>

            <DivTrackBody>
                <DivInputStyle>
                    <LabelStyle>
                        Album name
                        <InputStyle
                            type='text'
                            placeholder='Album name'

                            {...register('name', {
                                required: true,
                                validate: value => value.length >= 2 && value.length <= 20,
                            })}
                        />
                    </LabelStyle>
                    {(watch("name")?.length > 20 || watch("name")?.length < 2) && <PErrorStyle>Please enter a valid name</PErrorStyle>}
                </DivInputStyle>
                <DivInputStyle>
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
                    </LabelStyle>
                    {(watch("description")?.length > 200 || watch("description")?.length < 2) && <PErrorStyle>Please enter a valid description</PErrorStyle>}
                </DivInputStyle>
                <DivInputStyle>
                    <LabelStyle>
                        Select a genre
                        <SelectStyle

                            {...register('genres', {
                                required: true
                            })}>
                            {genres?.map((option) => {
                                return <option key={option._id} value={option._id}>{option.name}</option>
                            })}
                        </SelectStyle>
                    </LabelStyle>
                </DivInputStyle>
            </DivTrackBody>
            <DivTrackImg>
                <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479869/Final-Project-MERN/images-orpheus/default-images/album_zskqhh.webp'} />
                <DivInputStyle>
                    <LabelStyle>
                        Choose picture for your track!
                        <input
                            type='file'

                            {...register('img', {
                                required: true
                            })}
                        />
                    </LabelStyle>
                    {(watch("img") === undefined) || (watch("img").length === 0) && <PErrorStyle>Please enter a valid file</PErrorStyle>}
                </DivInputStyle>
                <ButtonSecondaryStyle
                    onClick={() => changeModal(false)}
                    disabled={watch('name')?.length < 2 || watch('description')?.length < 2 || (watch("img") === undefined) || (watch("img").length === 0)}
                >
                    Add songs
                </ButtonSecondaryStyle>
            </DivTrackImg>
            <DivModalClose>
                <IoIosCloseCircleOutline onClick={close} />
            </DivModalClose>
        </>
    )
}

export default AlbumStep1