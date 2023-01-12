const fetchKey = async (key) => {
    try{
        const res = await fetch (`http://localhost:4001/api/v1/${key}`)
        return res.json();

    } catch(e) {
        console.log(`Fail fetching ${key}`)
    }
}

export default fetchKey