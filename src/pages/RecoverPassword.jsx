import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchUsers } from '../api';
import { ButtonPrimaryStyle, DivInputStyle, FieldsetStyle, H2Style, H3Style, InputStyle, LabelStyle, PErrorStyle } from '../components/style/generalStyle';
import { DivHeroTitles } from '../components/style/homeStyle';
import { DivLanding, ImgLogoClick, PSlogan } from '../components/style/landingStyle';
import logo from '../assets/img/Logotipo.png'
import { useDispatch, useSelector } from 'react-redux';
import ChangePasswordStep2 from '../components/profile/ChangePasswordStep2';
import { LOG_IN, RECOVER, UPDATE } from '../redux/features/user_data/userSlice';
import { useEffect } from 'react';
import fetchUpdateUser from '../api/fetchUpdateUser';
import { Navigate, useNavigate } from 'react-router-dom';

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

  const dispatch = useDispatch();
  // FIND USER
  const emailValidation = inputValue => {
    const findUser = users?.find(
      user => user.userData.email === inputValue);
    setQuestion({
      state: true,
      question: findUser.userData.secretQuestion
    })
    dispatch(RECOVER(findUser))


  }

  // UPDATE USER
  const userActualData = useSelector(state => state.userData.user.userData);
  const userId = useSelector(state => state.userData.user.id);
  const navigate = useNavigate();
  useEffect(() => {
    setUpdateUserData({
      id: userId,
      userData: {
        username: userActualData ? userActualData.username : '',
        firstName: userActualData ? userActualData.firstName : '',
        lastName: userActualData ? userActualData.lastName : '',
        email: userActualData ? userActualData.email : '',
        country: userActualData ? userActualData.country : '',
        city: userActualData ? userActualData.city : '',
        password: userActualData ? userActualData.password : '',
        secretQuestion: userActualData ? userActualData.secretQuestion : '',
        secretAnswer: userActualData ? userActualData.secretAnswer : '',
        avatar: userActualData ? userActualData.avatar : '',
        banner: userActualData ? userActualData.banner : '',
        favGenres: userActualData ? userActualData.favGenres : '',
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
    })
  }, [userActualData])

  const [UpdateUserData, setUpdateUserData] = useState({
    id: userId,
    userData: {
      username: userActualData ? userActualData.username : '',
      firstName: userActualData ? userActualData.firstName : '',
      lastName: userActualData ? userActualData.lastName : '',
      email: userActualData ? userActualData.email : '',
      country: userActualData ? userActualData.country : '',
      city: userActualData ? userActualData.city : '',
      password: userActualData ? userActualData.password : '',
      secretQuestion: userActualData ? userActualData.secretQuestion : '',
      secretAnswer: userActualData ? userActualData.secretAnswer : '',
      avatar: userActualData ? userActualData.avatar : '',
      banner: userActualData ? userActualData.banner : '',
      favGenres: userActualData ? userActualData.favGenres : '',
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
  console.log(UpdateUserData)
  const { userData } = UpdateUserData;
  const checkUser = inputValue => {
    const checkAnswer = users?.find(
      user => user.userData.secretAnswer === inputValue.answer);
    setChangePassword(true)


  }

  const updatePassword = ({ password }) => {
    const data = {
      password: password ?? userActualData.password
    }
    setUpdateUserData({
      ...UpdateUserData,
      userData: {
        ...userData,
        password: data.password
      }
    });
    setNavigateState(true);
  };

  useEffect(() => {
    fetchUpdateUser(UpdateUserData, userId);
    if (navigateState) { navigate('/') }
  }, [UpdateUserData])



  return (
    <>
      <DivLanding>
        <ImgLogoClick onClick={() => setLoginView(prev => prev = false)} src={logo} alt="Logo" />
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

                      })}
                    />
                  </DivInputStyle>
                  {invalidAnswer && <PErrorStyle>Incorrect answer</PErrorStyle>}
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