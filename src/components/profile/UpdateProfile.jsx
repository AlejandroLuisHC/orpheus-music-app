import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoMdCheckmarkCircle, IoMdCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import {
    ButtonPrimaryStyle,
    FormStyle,
    PErrorStyle,
    SelectCountry,
    SelectRegion
} from '../style/generalStyle';
import {
    fetchKey,
    fetchUpdateUser,
    fetchUsers
} from '../../api'
import {
    DivEditUserData,
    DivUserData,
    InputEditStyle,
    DivEditUserContainer,
    PTextEdit,
    ButtonSubmitEdit,
    SpanIconClick,
    HrEditProfile,
    DivDangerZone,
    DivModalOptions
} from '../style/profileStyle';
import ChangePassword from './ChangePassword';
import { useAuth0 } from '@auth0/auth0-react';
import { DivFlexGenres, DivGenreCircle, DivSelectedGenreCircle } from '../style/registerStyle';
import { useQuery } from '@tanstack/react-query';
import DeleteUser from './DeleteUser';

const UpdateProfile = () => {
    const { getAccessTokenSilently } = useAuth0()
    const token = getAccessTokenSilently()
    const { data: users, status } = useQuery(['users'], fetchUsers);

    const initialState = {
        username: false,
        location: false,
        favGenres: false,
        deleted: false,
        passwordUpdate: false
    }
    const [openInput, setOpenInput] = useState(initialState)
    const { user: userAuth } = useAuth0();
    const userDataStore = useSelector(state => state.userData.user);
    const [location, setLocation] = useState({ country: '', region: '' });
    const {
        register,
        handleSubmit,
        watch,
    } = useForm();
    const navigate = useNavigate()
    const [UpdateUserData, setUpdateUserData] = useState({
        username: userDataStore.username || userAuth?.nickname,
        country: userDataStore.country,
        region: userDataStore.region,
        favGenres: userDataStore.favGenres,
    });
    const dispatch = useDispatch();
    const updateUser = async ({
        username,
    }) => {
        UpdateUserData.username = username ?? userDataStore.username,
        UpdateUserData.country = location.country ?? userDataStore.country,
        UpdateUserData.region = location.region ?? userDataStore.region,
        UpdateUserData.favGenres = selectedGenres ?? userDataStore.favGenres

        setUpdateUserData({
            ...UpdateUserData,
        });

        setOpenInput(prev => prev = initialState)
        const { data } = await fetchUpdateUser(UpdateUserData, userDataStore._id, token);
        dispatch(UPDATE(data));
    };

    //GENRES
    const [selectedGenres, setSelectedGenres] = useState(userDataStore.favGenres)
    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );

    const isGenreSelected = (id) => (
        selectedGenres?.find((genreId) => genreId === id)
    );

    const addToSelectedGenres = (id) => {
        !isGenreSelected(id) && setSelectedGenres([...selectedGenres, id]);
    };

    const removeFromSelectedGenres = (id) => {
        setSelectedGenres([...selectedGenres].filter((genre) => genre !== id))
    };

    function getRandomSize() {
        return Math.random() * (100 - 85) + 85;
    }
    function getRandomSizeSelected() {
        return Math.random() * (125 - 110) + 110;
    }

    // VALIDATES

    const userDataAvailable = inputValue => {
        const findUser = users?.find(
            user =>
                user.username === inputValue
        );
        return !findUser ? true : false;
    };

    return (
        <FormStyle onSubmit={handleSubmit(data => updateUser(data))}>
            <DivEditUserContainer>
                {!openInput.username
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.username}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, username: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('username', {
                                required: true,
                                validate: username => userDataAvailable(username)
                            })}
                        />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
                {!userDataAvailable(watch('username')) && watch("username").legth >= 4 && watch("username").length <= 20 &&
                    <PErrorStyle>Sorry! This username is already taken</PErrorStyle>
                }
                <HrEditProfile />
            </DivEditUserContainer>

            <DivEditUserContainer>
                {!openInput.location
                    ?
                    <DivUserData>
                        <PTextEdit>{UpdateUserData.country}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, location: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <SelectCountry
                            value={location.country}
                            onChange={(country) =>
                                setLocation(prev => prev = { ...prev, country })
                            }
                        />
                        <SelectRegion
                            country={location.country}
                            value={location.region}
                            onChange={(region) =>
                                setLocation(prev => prev = { ...prev, region })
                            }
                        />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
                <HrEditProfile />
            </DivEditUserContainer>

            <DivEditUserContainer>
                {!openInput.favGenres
                    ?
                    <DivUserData>
                        <PTextEdit>Genres</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, favGenres: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <>
                        <DivFlexGenres>
                            {genres?.map((genre) => {
                                return !isGenreSelected(genre._id) ? (
                                    <DivGenreCircle
                                        key={genre._id}
                                        size={`${getRandomSize()}px`}
                                        onClick={() => addToSelectedGenres(genre._id)}
                                    >
                                        <p>{genre.name}</p>
                                    </DivGenreCircle>
                                ) : (
                                    <DivSelectedGenreCircle
                                        key={genre._id}
                                        size={`${getRandomSizeSelected()}px`}
                                        onClick={() => removeFromSelectedGenres(genre._id)}
                                    >
                                        <p>{genre.name}</p>
                                    </DivSelectedGenreCircle>
                                );
                            })}
                        </DivFlexGenres>
                        <ButtonPrimaryStyle>Submit Genres</ButtonPrimaryStyle>
                    </>}
                <HrEditProfile />
                <DivEditUserContainer>
                    <DivDangerZone>
                        <h1>DANGER ZONE !</h1>
                        <DivModalOptions>
                            <ChangePassword />
                            <DeleteUser />
                        </DivModalOptions>
                    </DivDangerZone>
                </DivEditUserContainer>
                <HrEditProfile />
            </DivEditUserContainer>
        </FormStyle>
    )
}

export default UpdateProfile
