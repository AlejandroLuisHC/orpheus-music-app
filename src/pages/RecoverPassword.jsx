import { useQuery } from '@tanstack/react-query'; import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchUsers } from '../api';
import { ButtonPrimaryStyle, DivInputStyle, FieldsetStyle, H2Style, H3Style, InputStyle, LabelStyle, PErrorStyle } from '../components/style/generalStyle';
import { DivLanding, ImgLogoClick, PSlogan } from '../components/style/landingStyle';
import logo from '../assets/img/Logotipo.png'
import ChangePasswordStep2 from '../components/profile/ChangePasswordStep2';
import { useEffect } from 'react';
import fetchUpdateUser from '../api/fetchUpdateUser';
import { useNavigate } from 'react-router-dom';

const RecoverPassword = () => {
    const [question, setQuestion] = useState({
        state: false,
        question: ''
    });
    const [invalidAnswer, setInvalidAnswer] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [navigateState, setNavigateState] = useState(false);
    const { data: users, status: usersStatus } = useQuery(['users'], fetchUsers)
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [UpdateUserData, setUpdateUserData] = useState({
        id: '',
        userData: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            city: '',
            password: '',
            secretQuestionstion: '',
            secretAnswer: '',
            avatar: '',
            banner: '',
            favGenres: '',
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

    // FIND USER
    const emailValidation = inputValue => {
        const findUser = users?.find(
            user => user.userData.email === inputValue);
        setQuestion({
            state: true,
            question: findUser.userData.secretQuestion
        });
        setUpdateUserData({
            id: findUser.id,
            userData: {
                username: findUser.userData.username,
                firstName: findUser.userData.firstName,
                lastName: findUser.userData.lastName,
                email: findUser.userData.email,
                country: findUser.userData.country,
                city: findUser.userData.city,
                password: findUser.userData.password,
                secretQuestion: findUser.userData.secretQuestion,
                secretAnswer: findUser.userData.secretAnswer,
                avatar: findUser.userData.avatar,
                banner: findUser.userData.banner,
                favGenres: findUser.userData.favGenres,
            },
            work: {
                myAlbums: findUser.work.myAlbums,
                myTracks: findUser.work.myTracks,
            },
            myPlaylists: findUser.myPlaylists,
            favPlaylists: findUser.favPlaylists,
            favAlbums: findUser.favAlbums,
            favTracks: findUser.favTracks,
            followers: findUser.followers,
            following: findUser.following,
            isVerified: findUser.isVerified,
            isAdmin: findUser.isAdmin,
        })
    }
    const questionValidation = inputValue => {
        if (users[0].userData.secretAnswer === inputValue) {
            setInvalidAnswer(prev => prev = true)
        }
    }

    // UPDATE USER

    const navigate = useNavigate();
    const { userData } = UpdateUserData;
    const checkUser = inputValue => {
        const checkAnswer = users?.find(
            user => user.userData.secretAnswer === inputValue.answer);
        setChangePassword(true)
    }

    const updatePassword = ({ password }) => {
        setUpdateUserData({
            ...UpdateUserData,
            userData: {
                ...userData,
                password: password
            }
        });
        setNavigateState(true);
    };

    useEffect(() => {
        fetchUpdateUser(UpdateUserData, UpdateUserData.id);
        if (navigateState) { navigate('/') }
    }, [UpdateUserData])

    return (
        <>
            <DivLanding>
                <ImgLogoClick onClick={() => navigate('/')} src={logo} alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                <FieldsetStyle>
                    {!changePassword
                        ?
                        <form onClick={handleSubmit(checkUser)}>
                            <DivInputStyle>
                                <LabelStyle>
                                    <p>Email:</p>
                                </LabelStyle>
                                <InputStyle
                                    type="text"
                                    placeholder="Email"
                                    required
                                    {...register("email", {
                                        required: true,
                                        validate: (email) => emailValidation(email)
                                    })}
                                />
                            </DivInputStyle>

                            {question.state
                                ?
                                <>
                                    <H3Style>{question.question}</H3Style>
                                    <DivInputStyle>
                                        <InputStyle
                                            type="text"
                                            placeholder="Answer"
                                            required
                                            {...register("answer", {
                                                required: true,
                                                validate: answer => questionValidation(answer)
                                            })}
                                        />
                                    </DivInputStyle>
                                    {!invalidAnswer && <PErrorStyle>Incorrect answer</PErrorStyle>}
                                    <ButtonPrimaryStyle type='submit'>Verify answer</ButtonPrimaryStyle>
                                </>
                                :
                                <H3Style>Enter your email to see your secret question</H3Style>}
                        </form>
                        :

                        <form onClick={handleSubmit(updatePassword)}>
                            <H3Style>Create a new password</H3Style>
                            <ChangePasswordStep2
                                register={register}
                                watch={watch}
                                errors={errors}
                            />
                        </form>
                    }
                </FieldsetStyle>
            </DivLanding>
        </>
    )
}

export default RecoverPassword