export const getLocationData = async (lat, lon) => {
    try {
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)
        const data = res.json()
        return data

    } catch (error) {
        console.log(error.message);
    }
}

export const getLocationLatLongList = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/locations')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const getLocationLatLong = async (locationName) => {

    try {
        const res = await fetch(`http://localhost:3000/api/locations/${locationName}`)
        const data = await res.json()
        return data
    } catch (error) {

    }

}

export const getResolvedLatLong = async (location, lat, lon) => {
    if (lat && lon) {
        return { lat, lon }
    }
    const locationLatLong = await getLocationLatLong(location)

    if (locationLatLong.latitude && locationLatLong.longitude) {
        const lat = locationLatLong.latitude
        const lon = locationLatLong.longitude
        return { lat, lon }
    }
}