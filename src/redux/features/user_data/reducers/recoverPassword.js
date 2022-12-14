const recoverPassword = (state, action) => {
    const userData = {
        ...action.payload,
        isLogged: false
    }
    state.user = { ...userData };
}

export default recoverPassword