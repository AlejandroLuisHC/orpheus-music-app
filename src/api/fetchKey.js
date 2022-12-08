const fetchKey = async (key) => {
    try{
        const res = await fetch (`http://localhost:4000/${key}`)
        return res.json();

    } catch(e) {
        console.log(`Fail fetching ${key}`)
    }
}

export default fetchKey