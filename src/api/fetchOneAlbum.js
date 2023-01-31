
const fetchOneAlbum = async (albumID, token) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}albums/${albumID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.json();

    } catch (e) {
        console.log("Fail fetching album")
    }
}
export default fetchOneAlbum