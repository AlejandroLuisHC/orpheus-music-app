const fetchUpdateUser = async (newData, id) => {
    try {
        const options = {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newData)
        }
        const res = await fetch(`http://localhost:4000/users/${id}`, options)
        console.log('User successfully Updated:', await res.json())
    } catch (err) {
        console.warn('An error occurred while updateing the user');
    }
}

export default fetchUpdateUser;
