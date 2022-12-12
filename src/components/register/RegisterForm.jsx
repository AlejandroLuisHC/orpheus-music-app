import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetchCreateUser from '../../api/fetchCreateUser';
import { RegisterStep1, RegisterStep2, RegisterStep3, RegisterStep4, RegisterStep5 } from './register_steps'
import { DivStepsContainer, DivStepsCounter, FormStyle } from '../style/generalStyle';
import { fetchUsers } from './../../api/';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner'

const RegisterForm = () => {
    const { data: users, status } = useQuery(['users'], fetchUsers);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

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

    const { userData } = registerData;

    const [formSteps, setFormSteps] = useState({ step: '1', firstStep: true });
    const [selectedGenres, setSelectedGenres] = useState([]);

    const [location, setLocation] = useState({ country: '', region: '' });
    const { country, region } = location;

    const [avatar ,setAvatar] = useState('')
    const userDataAvailable = inputValue => {
        const findUser = users?.find(
            user =>
                user.userData.username === inputValue ||
                user.userData.email === inputValue
        );
        return !findUser ? true : false;
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
        userData.username       = username || '';
        userData.email          = email || '';
        userData.password       = password || '';
        userData.secretQuestion = secretQuestion || '';
        userData.secretAnswer   = secretAnswer || '';
        userData.firstName      = firstName || '';
        userData.lastName       = lastName || '';
        userData.country        = country || '';
        userData.city           = region || '';
        userData.avatar         = avatar || '' ;
        userData.favGenres      = selectedGenres || [];

        setRegisterData({
            ...registerData,
        });

        console.log(registerData);
        fetchCreateUser(registerData);
    };

    return (
        //TODO: logo
        //TODO: process bar
        status === "loading" 
            ? <LogoSpinner />
            : status === "error"
                ? <p>Error</p>
                : 
                <FormStyle onSubmit={handleSubmit(data => createUser(data))}>
                    <DivStepsContainer>
                        <DivStepsCounter step={formSteps.step}></DivStepsCounter>
                    </DivStepsContainer>
                    <fieldset>
                        {formSteps.firstStep && 
                            <RegisterStep1
                                register = {register}
                                watch = {watch}
                                errors = {errors}
                                userDataAvailable = {userDataAvailable}
                                setFormSteps = {setFormSteps}
                            />
                        }
                        {formSteps.secondStep && 
                            <RegisterStep2 
                                register = {register}
                                watch = {watch}
                                errors = {errors}
                                setFormSteps = {setFormSteps}
                            />
                        }
                        {formSteps.thirdStep && 
                            <RegisterStep3 
                                register = {register}
                                setFormSteps = {setFormSteps}
                            />
                        }
                        {formSteps.fourthStep && 
                            <RegisterStep4 
                                register = {register}
                                setFormSteps = {setFormSteps}
                                location = {location}
                                setLocation = {setLocation}
                                setAvatar = {setAvatar}
                            />
                        }
                        {formSteps.fifthStep && 
                            <RegisterStep5
                                setFormSteps = {setFormSteps}
                                selectedGenres = {selectedGenres}
                                setSelectedGenres = {setSelectedGenres}
                                setAvatar = {setAvatar}
                            />
                        }
                    </fieldset>
                </FormStyle>
    );
};

export default RegisterForm;

