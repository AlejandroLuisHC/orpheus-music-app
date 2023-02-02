import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetchCreateUser from '../../api/fetchCreateUser';
import { RegisterStep1, RegisterStep2, RegisterStep3 } from './register_steps'
import { DivStepsContainer, DivStepsCounter, FormStyle } from '../style/generalStyle';
import { fetchKey, fetchUsers } from './../../api/';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner'
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { LOG_IN } from '../../redux/features/user_data/userSlice';
import { useNavigate } from 'react-router-dom';
import LogoSpinnerRegister from '../general_components/loaders/spinner/LogoSpinnerRegister';

const RegisterForm = () => {

    const { data: users, status } = useQuery(['users'], fetchUsers);
    const { user: userAuth } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [registerData, setRegisterData] = useState({
        username: userAuth?.nickname || '',
        firstName: userAuth?.given_name || '',
        lastName: userAuth?.family_name || '',
        email: userAuth?.email,
        country: '',
        region: '',
        img: { url: userAuth?.picture || '' },
        banner: '',
        tracks: [],
        albums: [],
        playlists: [],
        favGenres: [],
        favPlaylists: [],
        favAlbums: [],
        favTracks: [],
        followers: [],
        following: [],
        isVerified: false,
        isAdmin: false,
    });

    const [formSteps, setFormSteps] = useState({ step: '1', firstStep: true });
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [loadingUser, setLoadingUser] = useState(false);

    const [location, setLocation] = useState({ country: '', region: '' });

    const [avatar, setAvatar] = useState('')
    const userDataAvailable = inputValue => {
        const findUser = users?.find(
            user =>
                user.username === inputValue
        );
        return !findUser ? true : false;
    };

    const { data: genres } = useQuery(
        ['genres', 'genres'],
        () => fetchKey('genres')
    );

    const createUser = async ({
        username,
        firstName,
        lastName,
    }) => {

        const newRegisterData = { ...registerData }
        newRegisterData.username = username || userAuth?.nickname || '';
        newRegisterData.firstName = firstName || userAuth?.given_name || '';
        newRegisterData.lastName = lastName || userAuth?.family_name || '';
        newRegisterData.country = location.country || '';
        newRegisterData.region = location.region || '';
        newRegisterData.favGenres = selectedGenres || [];

        setRegisterData({
            ...newRegisterData,
        });

        console.log("Registering user...");
        const { data } = await fetchCreateUser(registerData)

        data.status === 'Created' && dispatch(LOG_IN(data)) && navigate('/home') && setLoadingUser(false);
        (data.status === 'false' || !data) && console.log("There was a problem creating the user") && setLoadingUser(false) // MANAGE INCORRECT REGISTER 
    };

    return (
        status === "loading"
            ? <LogoSpinner />
            : loadingUser
                ? <LogoSpinnerRegister />
                : status === "error"
                    ? <Error />
                    :
                    <FormStyle onSubmit={
                        handleSubmit(data => {
                            setLoadingUser(true)
                            createUser(data)
                        })
                    }>
                        <DivStepsContainer>
                            <DivStepsCounter step={formSteps.step}></DivStepsCounter>
                        </DivStepsContainer>
                        <fieldset>
                            {formSteps.firstStep &&
                                <RegisterStep1
                                    register={register}
                                    watch={watch}
                                    errors={errors}
                                    userDataAvailable={userDataAvailable}
                                    setFormSteps={setFormSteps}
                                />
                            }
                            {formSteps.secondStep &&
                                <RegisterStep2
                                    register={register}
                                    watch={watch}
                                    setFormSteps={setFormSteps}
                                    location={location}
                                    setLocation={setLocation}
                                    setAvatar={setAvatar}
                                />
                            }
                            {formSteps.thirdStep &&
                                <RegisterStep3
                                    setFormSteps={setFormSteps}
                                    selectedGenres={selectedGenres}
                                    setSelectedGenres={setSelectedGenres}
                                    setAvatar={setAvatar}
                                    setLoadingUser={setLoadingUser}
                                    genres={genres}
                                />
                            }
                        </fieldset>
                    </FormStyle>
    );
};

export default RegisterForm;

