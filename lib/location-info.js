export const getLocationData = async (lat, lon) => {
    try {
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)
        const data = res.json()
        return data

    } catch (error) {
        console.log(error.message);
    }
}