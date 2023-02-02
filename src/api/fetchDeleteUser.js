
const fetchDeleteUser = async (userID, token) => {
    
    try {
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}users/${userID}`, options)
        return res.json();

    } catch (e) {
        console.log("Fail deleting user")
        console.log(e.message)
    }
}
export default fetchDeleteUser