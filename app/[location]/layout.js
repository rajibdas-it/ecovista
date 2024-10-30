import Image from "next/image";
import "../globals.css";

export const metadata = {
    title: "EcoVista-Home",
    description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({ children, weather, aqi, wind, temp }) {
    return (
        <div className="wrapper">

            <Image src="/background.png" className="bg-img" width={700} height={1200} alt="bg-img" />
            <div className="overlay"></div>
            <main className="!z-50 w-full">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        {children}
                        {weather}
                        {aqi}
                        {wind}
                        {temp}
                    </div>
                </div>
            </main>


        </div>


    );
}
