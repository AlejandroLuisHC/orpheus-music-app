import { useNavigate, useOutletContext } from "react-router-dom"
import { PErrorStyle, HrStyle, InputStyle, ButtonPrimaryStyle, FieldsetStyle, LabelStyle, DivInputStyle, LinkPrimaryStyle } from '../style/generalStyle'
import { IoMdLogIn } from "react-icons/io"
import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../../api";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { LOG_IN } from "../../redux/features/user_data/userSlice"
import { useState, memo } from "react"

const Login = () => {
    const dispatch = useDispatch();
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
                dispatch(LOG_IN(user));
                goHome('/home');
            }
        })
        foundUser === false && setInvalidLogin(prev => prev = true)
        setTimeout(() => {
            setInvalidLogin(prev => prev = false)
        }, 5000);
    }

    return (
        <>
            <div> 
                <p>To continue, sign in to Orpheus</p>
            </div>

            {usersStatus === "loading"
                ? <p>Loading</p>
                : usersStatus === "error"
                    ? <p>An error has occurred</p>
                    :
                    <>
                    <div>
                        <FieldsetStyle>
                            <form onSubmit={handleSubmit(checkUser)} autoComplete="off">
                                <HrStyle style={{margin: "30px auto", width: "25vw"}} />
                                <DivInputStyle>
                                    <LabelStyle htmlFor="username"> 
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
                                    <LabelStyle htmlFor="password"> 
                                        <p>Password:</p>
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

                                <ButtonPrimaryStyle type="submit">Login<IoMdLogIn /></ButtonPrimaryStyle>
                                {invalidLogin && <PErrorStyle>Incorrect Username or Password</PErrorStyle>}
                            </form>
                            <HrStyle style={{margin: "30px auto", width: "25vw"}}/>
                        </FieldsetStyle>
                    </div>

                    <div>
                        <p>Don't have an Orpheus account? <br />
                        <LinkPrimaryStyle to="/register">Register free</LinkPrimaryStyle></p>
                    </div>
                    </>
            }
        </>
    )
}
export default memo(Login)
