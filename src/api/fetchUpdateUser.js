const fetchUpdateUser = async (newData, id) => {
    try {
        const options = {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newData)
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users/${id}`, options)
        console.log('User successfully updated:', await res.json())
    } catch (err) {
        console.warn('An error occurred while updating the user');
    }
}

export default fetchUpdateUser;
