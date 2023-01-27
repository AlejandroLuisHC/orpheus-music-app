
const fetchOnePlaylist = async(playlistID, token) => {
    console.log(import.meta.env.VITE_API_URL)
    try{
        const res = await fetch (`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}playlists/${playlistID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.json();

    } catch(e) {
        console.log("Fail fetching playlist")
    }
}
export default fetchOnePlaylist