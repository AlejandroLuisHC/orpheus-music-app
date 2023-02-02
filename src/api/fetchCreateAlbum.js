const fetchCreateAlbum = async (album, token) => {
    try {

        const formData = new FormData()

        formData.append('image', album.img[0])
        formData.append('name', album.name)
        formData.append('description', album.description)
        formData.append('ownership', album.ownership)
        formData.append('genres', album.genres)
        formData.append('followers', album.followers)
        formData.append('tracks', album.tracks)


        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/albums`, options)
        const data = await res.json()
        console.log('Album successfully created:', data)
        return data
    } catch (error) {
        console.log(error.message)
        console.warn('An error occurred when creating the track');

    }
}

export default fetchCreateAlbum