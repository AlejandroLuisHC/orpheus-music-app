
const fetchOneUser = async (userID, token) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}users/${userID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.json();

    } catch (e) {
        console.log("Fail fetching user")
    }
}
export default fetchOneUser