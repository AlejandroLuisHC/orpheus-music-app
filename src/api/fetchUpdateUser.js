
const fetchUpdateUser = async (newData, id, token) => {
    const formData = new FormData()
    console.log('newData', newData)
    if (newData.username) {
        formData.append('username', newData.username)
        formData.append('country', newData.country)
        formData.append('region', newData.region)
        formData.append('favGenres[]', newData.favGenres)
    } else if (newData.img) {
        formData.append('image', newData.img[0])
    }
    try {
        const options = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}users/${id}`, options)
        return await res.json();
    } catch (err) {
        console.log(err.message)
        console.warn('An error occurred while updating the user');
    }
}

export default fetchUpdateUser;
