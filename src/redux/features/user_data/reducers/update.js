const update = (state, action ) => {
    const updatedUser = {
        ...action.payload,
        isLogged: true
    }
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    state.user = { ...updatedUser}
}

export default update;