const fetchAlbums = async() => {
    try{
        const res = await fetch ("http://localhost:4000/albums")
        return res.json();
       
    } catch(e) {
        console.log("Fail fetching albums")
    }
    
}
export default fetchAlbums