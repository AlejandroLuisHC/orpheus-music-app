const createUser = async (user = {}) => {
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=utf-8' },
            body: JSON.stringify(user)
        }
        const res = await fetch('http://localhost:4000/users', options)
    } catch (err) {
        console.warn('An error occurred when creating the user');
    }
}

export default createUser
