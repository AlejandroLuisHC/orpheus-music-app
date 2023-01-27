const fetchCreateTrack = async (track) => {
    try {

        const formData = new FormData()

        formData.append('video', track.file[0])
        formData.append('image', track.img[0])
        formData.append('name', track.name)
        formData.append('description', track.description)
        formData.append('ownership', [track.ownership])
        formData.append('genres', track.genres)

        console.log(formData)
        const options = {
            method: 'POST',
            //headers: { 'Content-type': 'multipart/form-data' },
            body: formData,
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/tracks`, options)
        const data = await res.json()
        console.log('Track successfully created:', data)
        return data
    } catch (error) {
        console.log(error.message)
        console.warn('An error occurred when creating the track');

    }
}

export default fetchCreateTrack