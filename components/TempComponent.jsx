import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWeatherData } from "@/lib/weather-info";

const TempComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getWeatherData(lat, lon);
  return (
    <Card>
      <div className="card">
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src="/icon_tempareture.png"
            alt="rain icon"
            width={20}
            height={20}
          />
          <h3 className="feature-title">{temp}°C</h3>

          <span className="feature-name">Feels Like {feels_like}°C</span>
        </div>
      </div>
    </Card>
  );
};

export default TempComponent;
