import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ButtonPrimaryStyle,
  DivImgCircleL,
  DivImgCircleM,
  DivImgCircleS,
  InputStyle,
  PErrorStyle,
} from '../style/generalStyle';
import { fetchUsers } from './../../api/';

const RegisterForm = () => {
  const { data: users, error } = useQuery(['users'], fetchUsers);

  const [registerData, setRegisterData] = useState();
  // console.log('registerData = ', registerData);

  const [formSteps, setformSteps] = useState({
    firstStep: true,
    // secondStep: false,
    // thirdStep: false,
    // fourthStep: false,
    // fifthStep: false,
  });
  // console.log(formSteps)

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
  // passwordsMatch(watch('password'), watch('confirmPassword'));

  const secondRegisterData = (data) => {
    setRegisterData(data);
    setformSteps({ thirdStep: true });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setRegisterData(data);
      })}
    >
      {formSteps.firstStep && (
        <>
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
        </>
      )}

      {formSteps.secondStep && (
        <>
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
        </>
      )}

      {formSteps.thirdStep && (
        <>
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

          <ButtonPrimaryStyle>Next</ButtonPrimaryStyle>
        </>
      )}

      {formSteps.fourthStep && (
        <>
          <div>
            <label>
              <InputStyle type="text" {...register('firstName')} />
            </label>
          </div>

          <div>
            <label>
              <InputStyle type="text" {...register('lastName')} />
            </label>
          </div>

          <div>
            <select {...register('country')}>
              <option value="spain">Spain</option>
              <option value="portugal">Portugal</option>
              <option value="andorra">Andorra</option>
            </select>
          </div>

          <div>
            <label>
              <InputStyle type="text" {...register('city')} />
            </label>
          </div>

          <div>
            <label>
              <InputStyle type="file" {...register('avatar')} />
            </label>
          </div>
          <div>
            <DivImgCircleL />
            <DivImgCircleM />
            <DivImgCircleS />
          </div>
          <ButtonPrimaryStyle>Next</ButtonPrimaryStyle>
        </>
      )}

      {formSteps.fifthStep && (
        <>
          <div>
            <select {...register('genres')} id="genres">
              <option value="pop">pop</option>
              <option value="rock">rock</option>
              <option value="rap">rap</option>
            </select>
          </div>

          <InputStyle type="submit" />
        </>
      )}
    </form>
  );
};

export default RegisterForm;
