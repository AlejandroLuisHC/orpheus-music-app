const logout = (state) => {
    sessionStorage.removeItem('user');
    state = { user: {isLogged: false, isAdmin: false} }
}

export default logout