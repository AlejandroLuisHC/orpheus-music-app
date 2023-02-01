
const fetchOneTrack = async (trackID, token) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}tracks/${trackID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.json();

    } catch (e) {
        console.log("Fail fetching track")
    }
}
export default fetchOneTrack