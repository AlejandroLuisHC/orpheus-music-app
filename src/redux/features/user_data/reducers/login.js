const login = (state, action) => {
    const loggedUser = {
        ...action.payload,
        isLogged: true
    }
    console.log(loggedUser)
    sessionStorage.setItem('user', JSON.stringify(loggedUser));
    state = loggedUser;
}

export default login