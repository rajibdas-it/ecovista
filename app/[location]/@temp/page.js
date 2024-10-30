import TempComponent from '@/components/TempComponent';
import React from 'react';

const TemperaturePage = ({ params: { location }, searchParams: { latitude, longitude } }) => {

    return (
        <TempComponent lat={latitude} lon={longitude} />
    );
};

export default TemperaturePage;