import { Link, Navigate } from "react-router-dom"
import logo from '../../assets/img/LOGO.png'
import { DivLogin, ImgLogoLanding, InputsStyleLogin, ButtonStyleLogin } from "../style/loginStyle"
import { PErrorStyle, PTextNormal, DivisorStyle } from '../style/generalStyle'
import { IoMdLogIn } from "react-icons/io"
import { useReducer } from "react"
import Home from "../../pages/Home"

const initialState = {
    username: "",
    password: "",
    loggedIn: false,
    error: false,
}

const loginReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case "SUCCESS":
            return {
                ...state,
                loggedIn: true,
                username: "",
                password: "",
            }
        case "ERROR":
            return {
                ...state,
                error: "invalid",
            }
        case "USERNAME":
            return {
                ...state,
                username: action.value,
            }
        case "PASSWORD":
            return {
                ...state,
                password: action.value
            }

    }
}

const Login = () => {

    const [updatedState, dispatch] = useReducer(loginReducer, initialState)
    console.log(updatedState)
    console.log(updatedState.username, updatedState.password)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = "http://localhost:3000/users";
        const res = await fetch(url);
        const usersJson = await res.json()
        for (const users of usersJson) {
            if (updatedState.username === users.userData.username && updatedState.password === users.userData.password) {

                dispatch({ type: "SUCCESS" })
            } else {

                dispatch({ type: "ERROR" })
            }
            console.log(users)
        }
    }


    return (
        <>

            <DivLogin>
                <div>
                <ImgLogoLanding src={logo} alt="Logo" />
                <DivisorStyle/>
                <PTextNormal>To continue, sign in to Orpheus</PTextNormal>
                </div>
                <form onSubmit={handleSubmit} autoComplete="off">

                    <PErrorStyle></PErrorStyle>

                    <InputsStyleLogin
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={updatedState.username}
                        onChange={(e) => dispatch({ type: "USERNAME", value: e.target.value })} />

                    <InputsStyleLogin
                        type="password"
                        placeholder="Password"
                        name="password "
                        value={updatedState.password}
                        onChange={(e) => dispatch({ type: "PASSWORD", value: e.target.value })} />

                    <ButtonStyleLogin>Login<IoMdLogIn /></ButtonStyleLogin>
                </form>
            </DivLogin>

        </>
    )
}
export default Login
