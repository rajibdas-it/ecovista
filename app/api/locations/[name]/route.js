import { getLocationByName } from "../location-utils";

// export async function GET(request, { params: { name } }) {
//     console.log(name);
// }

export async function GET(request, { params }) {
    const name = await params.name
    const location = getLocationByName(name)
    return Response.json(location)
    // return Response.json({ status: 200, data: location })
}