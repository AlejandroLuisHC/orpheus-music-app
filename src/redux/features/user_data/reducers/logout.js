const logout = (state) => {
    sessionStorage.removeItem('user');
    state = { username: '', isLogged: false }
}

export default logout