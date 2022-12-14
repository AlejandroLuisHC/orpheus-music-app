import React from 'react'
import { ButtonPrimaryStyle, DivInputStyle, InputStyle, LabelStyle, PErrorStyle } from '../style/generalStyle'

const ChangePasswordStep2 = ({register, watch, setFormSteps, errors}) => {
    const passwordsMatch = (password, confirmPassword) => {
        return password === confirmPassword ? true : false;
    };
  return (
    <>
        
        <DivInputStyle>
                      <LabelStyle>
                      <p>New Password:</p>
                      <InputStyle 
                          type="NewPassword"
                          placeholder="New password"
                          required
                          {...register("password", {
                              required: true,
                              pattern: {
                                
                                message: 'This password is not strong enough',
                            },
                          })}
                      />
                      </LabelStyle>
                      {errors.password?.message && (
                    <PErrorStyle>{errors.password?.message}</PErrorStyle>
                )}
                     
        </DivInputStyle>
        <DivInputStyle>
                      <LabelStyle>
                      <p>Repeat password:</p>
                      <InputStyle 
                          type="password"
                          placeholder="Repeat password"
                          required
                          {...register("confirmPassword", {
                              required: {
                                  value: true,
                                  message: "This field is required",
                                  validate: (confirmPassword) =>
                                    passwordsMatch(watch('password'), confirmPassword),
                              }
                          })}
                      />
                      </LabelStyle>
                      {!passwordsMatch(watch('password'), watch('confirmPassword')) && (
                    <PErrorStyle>Passwords not matching</PErrorStyle>
                )}
                     
        </DivInputStyle>
        <ButtonPrimaryStyle type='submit'>
                Submit
        </ButtonPrimaryStyle>
      </>
  )
}

export default ChangePasswordStep2