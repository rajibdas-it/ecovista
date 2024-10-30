"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const LocationDetector = () => {
  const searchParams = useSearchParams(); //query perametter gula pawar jonno eita dorkar.
  const pathName = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams); //URLSearchParams er moddhe parameter hisabe searchParams ta dite hobe. tahole amra get method diye query params gula pabo.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, router, searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loading..."
            width={500}
            height={500}
            className="border rounded-md my-4"
          />
          <p>Detecting Location....</p>
          <p>Please wait for a while</p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
