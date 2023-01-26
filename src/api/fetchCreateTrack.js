const fetchCreateTrack = async ( track = {} ) => {
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(track)
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/track`, options)
        const data = await res.json() 
        console.log('Track successfully created:', data)
        return data
    } catch (error) {
        console.warn('An error occurred when creating the track');
        
    }
} 

export default fetchCreateTrack