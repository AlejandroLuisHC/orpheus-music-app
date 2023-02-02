const fetchCreatePlaylist = async (playlist,token) => {
    try {
       
        const formData = new FormData()
            
        formData.append('image', playlist.img[0])
        formData.append('name', playlist.name)
        formData.append('description', playlist.description)
        formData.append('ownership', playlist.ownership)
        formData.append('genres', playlist.genres)
        formData.append('followers', playlist.followers)
        formData.append('moods', playlist.moods)


        
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}playlists`, options)
        const data = await res.json()
        console.log('Album successfully created:', data)
        return data
    } catch (error) {
        console.log(error.message)
        console.warn('An error occurred when creating the track');
    }
}

export default fetchCreatePlaylist