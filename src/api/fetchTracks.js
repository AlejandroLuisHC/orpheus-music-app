const fetchTracks = async() => {
    try{
        const res = await fetch ("http://localhost:4000/tracks")
        return res.json();
       
    } catch(e) {
        console.log("Fail fetching tracks")
    }
    
}
export default fetchTracks