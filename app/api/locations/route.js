import { getLocations } from "./location-utils";

export async function GET() {
    const locations = getLocations()
    return Response.json(locations)

}