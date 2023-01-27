
const fetchUsers = async() => {
    try{
        const res = await fetch (`${import.meta.env.VITE_API_URL}/api/v1/users`)
        return res.json();

    } catch(e) {
        console.log("Fail fetching users")
    }
}
export default fetchUsers