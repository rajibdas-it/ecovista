import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getTempData } from "@/lib/weather-info";

const TempComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTempData(lat, lon);
  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icon_tempareture.png"
          alt="rain icon"
          width={50}
          height={50}
        />
        <h3 className="feature-title">{temp}°C</h3>

        <span className="feature-name">Feels Like {feels_like}°C</span>
      </div>
    </Card>
  );
};

export default TempComponent;
