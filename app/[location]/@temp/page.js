import NoLocationInfo from '@/components/NoLocationInfo';
import TempComponent from '@/components/TempComponent';
import { getResolvedLatLong } from '@/lib/location-info';
import React from 'react';

const TemperaturePage = async ({ params: { location }, searchParams: { latitude, longitude } }) => {

    const resolved = await getResolvedLatLong(location, latitude, longitude)

    if (resolved?.lat && resolved?.lon) {
        return <TempComponent lat={resolved?.lat} lon={resolved?.lon} />
    } else {
        return <NoLocationInfo />
    }
};

export default TemperaturePage;