const fetchCreateTrack = async ( track ) => {
    try {
        const trackBody = {
            name: track.name,
            description: track.description,
            ownership: track.ownership,
            genres: track.genres
        }
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(trackBody),
            files: {
                images: JSON.stringify(track.img[0]), 
                video: JSON.stringify(track.track[0])
            }
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