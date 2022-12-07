
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/img/Logotipo.png'
import { DivLogin, ImgLogoLanding, InputsStyleLogin, ButtonStyleLogin } from "../style/loginStyle"
import { PErrorStyle, DivisorStyle } from '../style/generalStyle'
import { IoMdLogIn } from "react-icons/io"
import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../../api";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";

import { LOG_IN } from "../../redux/features/user_data/userSlice"
import { useState } from "react"

const Login = () => {
    const dispatch = useDispatch;
    const goHome = useNavigate();
    const [invalidLogin, setInvalidLogin] = useState(false)
    // Fetch existing users from DB
    const { data: users, status: usersStatus } = useQuery(['users'], fetchUsers)

    // Manage form with useForm()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const checkUser = userInput => {
        let foundUser = false;
        users?.map((user) => {
            if ((user.userData.username === userInput.username || user.userData.email === userInput.username)
                && user.userData.password === userInput.password) {
                foundUser = true;
                console.log('LOGIN')
                dispatch(LOG_IN(user));
                goHome("/home");
            }
        })
        foundUser === false && setInvalidLogin(prev => prev = true)
        setTimeout(() => {
            setInvalidLogin(prev => prev = false)
        }, 5000);
    }

    return (
        <DivLogin>
            <div>
                <ImgLogoLanding src={logo} alt="Logo" />
                <p>To continue, sign in to Orpheus</p>
                <DivisorStyle />
            </div>

            {usersStatus === "loading"
                ? <p>Loading</p>
                : usersStatus === "error"
                    ? <p>An error has occurred</p>
                    :
                    <>
                        <fieldset style={{ border: "none", }}>
                            <form onSubmit={handleSubmit(checkUser)} autoComplete="off">
                                <div style={{ marginBottom: "20px" }}>
                                    <label> Username or email:
                                        <InputsStyleLogin
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
                                    </label>
                                    {errors.username && <PErrorStyle>{errors.username.message}</PErrorStyle>}
                                </div>

                                <div style={{ marginBottom: "20px" }}>
                                    <label> Password:
                                        <InputsStyleLogin
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
                                    </label>
                                    {errors.password && <PErrorStyle>{errors.password.message}</PErrorStyle>}
                                </div>
                                <ButtonStyleLogin type="submit">Login<IoMdLogIn /></ButtonStyleLogin>
                                {invalidLogin && <PErrorStyle>Login failed</PErrorStyle>}
                            </form>
                            <DivisorStyle />
                        </fieldset>
                        <br />
                        <p>Don't have an Orpheus account? <br />
                            <Link to="/register">Register free</Link></p>
                    </>
            }
        </DivLogin>
    )
}
export default Login
