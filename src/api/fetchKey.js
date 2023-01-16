
const fetchKey = async (key, token) => {

    try{
        const res = await fetch (`http://localhost:4001/api/v1/${key}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.json();

    } catch(e) {
        console.log(`Fail fetching ${key}`)
    }
}

export default fetchKey