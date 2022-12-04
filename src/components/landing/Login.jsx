
import { Link, Navigate } from "react-router-dom"
import logo from '../../assets/img/LOGO.png'
import { DivLogin, ImgLogoLanding, InputsStyleLogin, ButtonStyleLogin } from "../style/loginStyle"
import { PErrorStyle, PTextNormal, DivisorStyle } from '../style/generalStyle'
import { IoMdLogIn } from "react-icons/io"
import { useReducer } from "react"
import Home from "../../pages/Home"

const initialState={
    username:"",
    password:"",
    loggedIn:false,
    error:false,
}

const reducer = (state,action)=>{
    console.log(state,action)
    switch(action.type){
        case "SUCCESS":
            return{
                ...state,
                loggedIn:true,
                error:false,
            }
        case "ERROR":
            return{
                ...state,
                loggedIn:false,
                error:"Incorrect username or password!",
            }
        case "USERNAME":
             return{
                ...state,
                username:action.value,
             }
        case "PASSWORD":
             return{
                ...state,
                password:action.value
            }
        default: 
            return state
        
    }
}




const Login = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    const { username, password, error, isLoggedIn } = state;
    console.log(state)


   const handleSubmit =async (e) => {
    e.preventDefault()

    const url = "http://localhost:3000/users";
    const res = await fetch(url);
    const usersJson = await res.json()
    for ( const users of usersJson){
        if( state.username === users.userData.username && state.password === users.userData.password){

            dispatch({type:"SUCCESS"})
            alert("inicio sesion ok")
        } else { 

            /* dispatch({type:"ERROR"}) */
            alert("error")
        }
        console.log(users)
       }
    }
    

    
    
    return (
        <>
            {isLoggedIn ? (
                <>
                <h1>Welcome {username}!</h1>
                <button >Log Out</button>
                </>
            ) : (
                <DivLogin>
                    <div>
                        <ImgLogoLanding src={logo} alt="Logo" />
                        <DivisorStyle/>
                        <PTextNormal>To continue, sign in to Orpheus</PTextNormal>
                    </div>

                    <form onSubmit={handleSubmit} autoComplete="off">

                    {error && <PErrorStyle>{error}</PErrorStyle>}

                        <InputsStyleLogin                 
                            type="text" 
                            placeholder="Username" 
                            name="username"
                            value={state.username}
                            onChange={(e)=> dispatch({type:"USERNAME", value:e.target.value})} />

                        <InputsStyleLogin 
                            type="password" 
                            placeholder="Password" 
                            name="password " 
                            value={state.password}
                            onChange={(e)=> dispatch({type:"PASSWORD", value:e.target.value})} />

                        <ButtonStyleLogin>Login<IoMdLogIn/></ButtonStyleLogin>
                    </form>
                
                </DivLogin>
            )}
        </>
    )
}
export default Login
