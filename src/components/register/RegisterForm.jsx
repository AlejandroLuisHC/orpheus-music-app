import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import fetchCreateUser from '../../api/fetchCreateUser';
import fetchKey from '../../api/fetchKey';
import {
    ButtonPrimaryStyle,
    DivImgCircleL,
    DivImgCircleM,
    DivImgCircleS,
    FormStyle,
    InputStyle,
    PErrorStyle,
} from '../style/generalStyle';
import {
    DivFlexGenres,
    DivGenreCircle,
    DivSelectedGenreCircle,
} from '../style/registerStyle';
import { fetchUsers } from './../../api/';

const RegisterForm = () => {
    const { data: users, error: usersError } = useQuery(['users'], fetchUsers);

    const { data: genres, error: genresError } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );

    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        userData: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            city: '',
            password: '',
            secretQuestion: '',
            secretAnswer: '',
            avatar: '',
            banner: '',
            favGenres: [],
        },
        work: {
            myAlbums: [],
            myTracks: [],
        },
        myPlaylists: [],
        favPlaylists: [],
        favAlbums: [],
        favTracks: [],
        followers: [],
        following: [],
        isVerified: false,
        isAdmin: false,
        isLoggedIn: false,
    });
    console.log('registerData = ', registerData);

    const { userData } = registerData;

    const [formSteps, setformSteps] = useState({ firstStep: true });
    const [selectedGenres, setSelectedGenres] = useState([]);

    const [location, setLocation] = useState({ country: '', region: '' });
    const { country, region } = location;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const userDataAvailable = (inputValue) => {
        const findUser = users?.find(
            (user) =>
                user.userData.username === inputValue ||
                user.userData.email === inputValue
        );
        return !findUser ? true : false;
    };

    const passwordsMatch = (password, confirmPassword) => {
        return password === confirmPassword ? true : false;
    };

    const isGenreSelected = (id) => (
        selectedGenres?.find((genreId) => genreId === id)
    );

    const addToSelectedGenres = (id) => {
        !isGenreSelected(id) && setSelectedGenres([...selectedGenres, id]);
    };

    const removeFromSelectedGenres = (id) => {
        console.log('remove', id)
        //TODO: fix this function
        // setSelectedGenres([...selectedGenres].filter((genre) => genre === id))
    };

    const createUser = ({
        username,
        email,
        password,
        secretQuestion,
        secretAnswer,
        firstName,
        lastName,
    }) => {
        userData.username = username || '';
        userData.email = email || '';
        userData.password = password || '';
        userData.secretQuestion = secretQuestion || '';
        userData.secretAnswer = secretAnswer || '';
        userData.firstName = firstName || '';
        userData.lastName = lastName || '';
        userData.country = country || '';
        userData.city = region || '';
        userData.favGenres = selectedGenres || [];

        setRegisterData({
            ...registerData,
        });

        console.log(registerData);
        fetchCreateUser(registerData);
    };

    return (
        //TODO: logo
        //TODO: process bar

        <FormStyle onSubmit={handleSubmit((data) => createUser(data))}>
            <fieldset>
                {formSteps.firstStep && (
                    <>
                        <legend>Basic info</legend>

                        <div>
                            <label>
                                Let's start with your username
                                <InputStyle
                                    type="text"
                                    {...register('username', {
                                        required: true,
                                        validate: (username) => userDataAvailable(username)
                                    })}
                                />
                            </label>
                            {!userDataAvailable(watch('username')) && (
                                <PErrorStyle>Sorry! This username is already taken</PErrorStyle>
                            )}
                        </div>

                        <div>
                            <label>
                                We need an email
                                <InputStyle
                                    type="email"
                                    {...register('email', {
                                        required: true,
                                        validate: (email) => userDataAvailable(email),
                                    })}
                                />
                            </label>
                            {!userDataAvailable(watch('email')) && (
                                <PErrorStyle>Sorry! This email is already taken</PErrorStyle>
                            )}
                        </div>

                        <ButtonPrimaryStyle
                            onClick={() => setformSteps({ secondStep: true })}
                        >
                            Next
                        </ButtonPrimaryStyle>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </>
                )}

                {formSteps.secondStep && (
                    <>
                        <legend>Protect your account</legend>

                        <div>
                            <label>
                                Create your password
                                <InputStyle
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                        pattern: {
                                            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                            message: 'This password is not strong enough',
                                        },
                                    })}
                                />
                            </label>
                            {errors.password?.message && (
                                <PErrorStyle>{errors.password?.message}</PErrorStyle>
                            )}
                        </div>

                        <div>
                            <label>
                                Confirm your password
                                <InputStyle
                                    type="password"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (confirmPassword) =>
                                            passwordsMatch(watch('password'), confirmPassword),
                                    })}
                                />
                            </label>
                            {!passwordsMatch(watch('password'), watch('confirmPassword')) && (
                                <PErrorStyle>Passwords not matching</PErrorStyle>
                            )}
                        </div>
                        <ButtonPrimaryStyle
                            onClick={() => setformSteps({ thirdStep: true })}
                        >
                            Next
                        </ButtonPrimaryStyle>
                        <button onClick={() => setformSteps({ firstStep: true })}>Back</button>
                    </>
                )}

                {formSteps.thirdStep && (
                    <>
                        <legend>Protect your account</legend>

                        <div>
                            <select {...register('secretQuestion')}>
                                <option value="What is your favourite song?">
                                    What is your favourite song?
                                </option>
                                <option value="What is your favourite pizza?">
                                    What is your favourite pizza?
                                </option>
                                <option value="What is your favourite city?">
                                    What is your favourite city?
                                </option>
                            </select>
                        </div>

                        <div>
                            <label>
                                Create your secret answer
                                <InputStyle
                                    type="text"
                                    secretAnswer
                                    {...register('secretAnswer')}
                                />
                            </label>
                        </div>

                        <ButtonPrimaryStyle
                            onClick={() => setformSteps({ fourthStep: true })}
                        >
                            Next
                        </ButtonPrimaryStyle>
                        <button onClick={() => setformSteps({ secondStep: true })}>Back</button>
                    </>
                )}

                {formSteps.fourthStep && (
                    <>
                        <legend>Protect your account</legend>

                        <p onClick={() => setformSteps({ fifthStep: true })}>
                            Skip and complete later
                        </p>

                        <div>
                            <label>
                                What's your name
                                <InputStyle type="text" {...register('firstName')} />
                            </label>
                        </div>

                        <div>
                            <label>
                                Your lastname
                                <InputStyle type="text" {...register('lastName')} />
                            </label>
                        </div>

                        <div>
                            <label>
                                Where are you from?
                                <div>
                                    <CountryDropdown
                                        value={location.country}
                                        onChange={(country) =>
                                            setLocation((prev) => (prev = { ...prev, country }))
                                        }
                                    />
                                    <RegionDropdown
                                        country={location.country}
                                        value={location.region}
                                        onChange={(region) =>
                                            setLocation((prev) => (prev = { ...prev, region }))
                                        }
                                    />
                                </div>
                            </label>
                        </div>

                        <div>
                            <label>
                                <InputStyle type="file" {...register('avatar')} />
                            </label>
                        </div>
                        <div>
                            <DivImgCircleL>
                                <img></img>
                            </DivImgCircleL>

                            <DivImgCircleM>
                                <img></img>
                            </DivImgCircleM>

                            <DivImgCircleS>
                                <img></img>
                            </DivImgCircleS>
                        </div>
                        <ButtonPrimaryStyle
                            // onClick={handleSubmit((x) => console.log(x.avatar))}
                            onClick={() => setformSteps({ fifthStep: true })}
                        >
                            Next
                        </ButtonPrimaryStyle>
                        <button onClick={() => setformSteps({ thirdStep: true })}>Back</button>
                    </>
                )}

                {formSteps.fifthStep && (
                    <>
                        <legend>Almost there...</legend>
                        <p>Select at least one genre</p>
                        <DivFlexGenres>
                            {genres?.map((genre) => {
                                return !isGenreSelected(genre.id) ? (
                                    <DivGenreCircle
                                        key={genre.id}
                                        onClick={() => addToSelectedGenres(genre.id)}
                                    >
                                        <p>{genre.name}</p>
                                    </DivGenreCircle>
                                ) : (
                                    <DivSelectedGenreCircle
                                        key={genre.id}
                                        onClick={() => removeFromSelectedGenres(genre.id)}
                                    >
                                        <p>{genre.name}</p>
                                    </DivSelectedGenreCircle>
                                );
                            })}
                        </DivFlexGenres>

                        <ButtonPrimaryStyle type="submit" disabled={selectedGenres.length < 1}>I'm ready!</ButtonPrimaryStyle>
                        <button onClick={() => setformSteps({ fourthStep: true })}>Back</button>
                    </>
                )}
            </fieldset>
        </FormStyle>
    );
};

export default RegisterForm;
