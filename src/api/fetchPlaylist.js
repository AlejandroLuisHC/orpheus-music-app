const fetchPlaylist = async() => {
    try{
        const res = await fetch ("http://localhost:4000/playlists")
        return res.json()

    } catch(e) {
        console.log("Fail fetching playlist")
    }
}
export default fetchPlaylist