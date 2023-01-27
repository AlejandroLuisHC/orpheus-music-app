
const fetchUsers = async() => {
    console.log(import.meta.env.VITE_API_URL)
    try{
        const res = await fetch (`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_VERSION}users`)
        return res.json();

    } catch(e) {
        console.log("Fail fetching users")
    }
}
export default fetchUsers