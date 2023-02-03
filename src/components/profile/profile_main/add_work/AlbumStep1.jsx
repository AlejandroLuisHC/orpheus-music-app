import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchKey } from '../../../../api';
import { ButtonSecondaryStyle, InputStyle, LabelFileStyle, LabelStyle, PErrorStyle, SelectStyle } from '../../../style/generalStyle';
import { DivBlockForm, DivColumns, DivTrackBody, ImgTrack, InputDescriptionStyle } from '../../../style/profileStyle';

const AlbumStep1 = ({ register, changeModal, close, watch }) => {

    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );

    return (
        <DivTrackBody>
            <DivColumns>
                {/* image & album name */}
                <div>
                    {/* Image */}
                    <DivBlockForm>
                        <figure>
                            <ImgTrack src={'https://res.cloudinary.com/drghk9p6q/image/upload/v1674479869/Final-Project-MERN/images-orpheus/default-images/album_zskqhh.webp'} alt="Default image" title="Default Image" size={60} />
                            <figcaption>Default Image</figcaption>
                        </figure>
                    </DivBlockForm>

                    {/* Album name */}
                    <DivBlockForm>
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
                            {(watch("name")?.length > 20 || watch("name")?.length < 2) && <PErrorStyle>Please enter a valid name</PErrorStyle>}
                        </LabelStyle>

                    </DivBlockForm>
                </div>

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
                            {(watch("description")?.length > 200 || watch("description")?.length < 2) && <PErrorStyle>Please enter a valid description</PErrorStyle>}
                        </LabelStyle>
                    </DivBlockForm>

                    {/* Genre */}
                    <DivBlockForm>
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
                    </DivBlockForm>

                    {/* Choose picture */}
                    <DivBlockForm>
                        <LabelFileStyle htmlFor={"file"}>
                            Choose a picture for your track!
                            <input id={"file"}
                                type='file'
                                style={{ visibility: "hidden" }}
                                {...register('img', {
                                    required: false
                                })}
                            />
                            {(watch("img") === undefined) || (watch("img").length === 0) && <PErrorStyle>Your album will use the default image</PErrorStyle>}
                        </LabelFileStyle>
                    </DivBlockForm>
                </div>
            </DivColumns>

            {/* Button */}
            <DivBlockForm>
                <ButtonSecondaryStyle
                    onClick={() => changeModal(false)}
                    disabled={watch('name')?.length < 2 || watch('description')?.length < 2}
                >
                    Add songs
                </ButtonSecondaryStyle>
            </DivBlockForm>
        </DivTrackBody>
    )
}

export default AlbumStep1