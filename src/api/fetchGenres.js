const fetchGenres = async() => {
    try{
        const res = await fetch ("http://localhost:4000/genres")
        return res.json()
    } catch(e) {
        console.log("Fail fetching users")
    }
}
export default fetchGenres