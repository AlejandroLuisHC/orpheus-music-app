import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useForm } from 'react-hook-form';
import fetchKey from '../../api/fetchKey';
import {
  ButtonPrimaryStyle,
  DivImgCircleL,
  DivImgCircleM,
  DivImgCircleS,
  FormStyle,
  H2Style,
  InputStyle,
  PErrorStyle,
} from '../style/generalStyle';
import { DivFlexGenres, DivGenreCircle } from '../style/registerStyle';
import { fetchUsers } from './../../api/';

const RegisterForm = () => {
  const { data: users, error: usersError } = useQuery(['users'], fetchUsers);
  const { data: genres, error: genresError } = useQuery(
    ['genres', 'genres'],
    () => fetchKey('genres')
  );

  const [registerData, setRegisterData] = useState();
  console.log('registerData = ', registerData);

  const [formSteps, setformSteps] = useState({
    // firstStep: true,
    // secondStep: false,
    // thirdStep: false,
    // fourthStep: false,
    fifthStep: true,
  });
  // console.log(formSteps);

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

  const firstRegisterData = (data) => {
    setRegisterData(data);
    setformSteps({ secondStep: true });
  };

  const passwordsMatch = (password, confirmPassword) => {
    return password === confirmPassword ? true : false;
  };

  const secondRegisterData = (data) => {
    setRegisterData(data);
    setformSteps({ thirdStep: true });
  };

  const thirdRegisterData = (data) => {
    setRegisterData(data);
    setformSteps({ fourthStep: true });
  };

  //TODO: añadir el array de selectedGenres en una key llamada favGenres dentro del objeto registerData.
  const [selectedGenres, setSelectedGenres] = useState([]);
  console.log('selectedGenres', selectedGenres);

  const selectGenre = (id) => {
    setSelectedGenres([...selectedGenres, id]);
  }

  return (
    // logo
    // process bar

    <FormStyle
      onSubmit={handleSubmit((data) => {
        setRegisterData(data);
      })}
    >
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
                    validate: (username) => userDataAvailable(username),
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
              onClick={handleSubmit((data) => firstRegisterData(data))}
            >
              Next
            </ButtonPrimaryStyle>
            <button>Back</button>
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
                    /* pattern: {
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      message: 'This password is not strong enough',
                    }, */
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
              onClick={handleSubmit((data) => secondRegisterData(data))}
            >
              Next
            </ButtonPrimaryStyle>
            <button>Back</button>
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
              onClick={handleSubmit((data) => thirdRegisterData(data))}
            >
              Next
            </ButtonPrimaryStyle>
            <button>Back</button>
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
                What 's your Name
                <InputStyle type="text" {...register('firstName')} />
              </label>
            </div>

            <div>
              <label>
                Your Lastname
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
              onClick={handleSubmit((x) => console.log(x.avatar))}
            >
              Next
            </ButtonPrimaryStyle>
            <button>Back</button>
          </>
        )}

        {formSteps.fifthStep && (
          <>
            <legend>Almost there...</legend>
            <p>Select at least one genre</p>

            <DivFlexGenres>
              {genres?.map((genre) => (
                <DivGenreCircle key={genre.id} onClick={() => selectGenre(genre.id)}>
                  <p>{genre.name}</p>
                </DivGenreCircle>
              ))}
            </DivFlexGenres>

            <ButtonPrimaryStyle type="submit">I'm ready!</ButtonPrimaryStyle>
            <button>Back</button>
          </>
        )}
      </fieldset>
    </FormStyle>
  );
};

export default RegisterForm;
