import React from 'react'
import { useForm } from 'react-hook-form';
import { IoMdLogIn } from 'react-icons/io';
import { ButtonPrimaryStyle, DivInputStyle, FieldsetStyle, InputStyle, LabelStyle } from '../components/style/generalStyle'

const Password = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
        <FieldsetStyle>
            <form >
                <DivInputStyle>
                    <LabelStyle>
                    <p>Username or email:</p>
                    </LabelStyle>
                    <InputStyle 
                        type="text"
                        placeholder="Username"
                        required
                        {...register("username", {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                </DivInputStyle>
                <DivInputStyle>
                    <LabelStyle>
                    <p>Your current Password:</p>
                    </LabelStyle>
                    <InputStyle 
                        type="password"
                        placeholder="Password"
                        required
                        {...register("password", {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                </DivInputStyle>
                <DivInputStyle>
                    <LabelStyle>
                    <p>New Password:</p>
                    </LabelStyle>
                    <InputStyle 
                        type="password"
                        placeholder="Password"
                        required
                        {...register("NewPassword", {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                </DivInputStyle>
                <DivInputStyle>
                    <LabelStyle>
                    <p>Confirm new Password:</p>
                    </LabelStyle>
                    <InputStyle 
                        type="password"
                        placeholder="Password"
                        required
                        {...register("ConfirmNewPassword", {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                    />
                </DivInputStyle>
                <ButtonPrimaryStyle type="submit">Change password</ButtonPrimaryStyle>
                                
            </form>
        </FieldsetStyle>
    </>
  )
}

export default Password