import React from "react";
import Project from "../components/Project";
import WorkProject from "../components/WorkProject";
import ranGen from "../Assets/Images/ranGen.gif"
import weatherDashboardDemo from "../Assets/Images/Weather-Dashboard-Demo.gif"
import webRentalDemo from "../Assets/Images/Fluid-Truck-Web.gif"
import webFVIPDemo from "../Assets/Images/FVIP-Demo.gif"
import mobileAppDemo from "../Assets/Images/Fluid-Truck-App.gif"
import unionDemo from "../Assets/Images/Union-Demo.gif"
import crvaDemo from "../Assets/Images/CRVA-Demo.gif"
import pepsiDemo from "../Assets/Images/Pepsi-Demo.gif"
function Portfolio() {
    return (
        // Grid Container
        <div className="container w-auto full-page pb-5">
            <div className="row w-auto">
                <div className="col-12 mt-5 card">
                    <div className="card-body">
                        {/* "Portfolio" titled */}
                        <h1 className="text-primary text-center mb-4">
                            Portfolio
                        </h1>
                        {/* Screenshots of Work Websites */}
                        <h2 className="text-center mb-3">
                            {/* Click on the images to try the apps for yourself! */}
                            Fluid Truck
                        </h2>
                        <div className="row">
                            <div className="row text-center">
                                <div className="col-12 col-md-4">          
                                    {/* Gif and Link to the FT Website */}
                                    <WorkProject name="Rental Platform (Web App)"
                                        siteLink="https://www.fluidtruck.com"
                                        image={webRentalDemo} />
                                </div>
                                <div className="col-12 col-md-4">          
                                    {/* Gif and Link to the FVIP Website */}
                                    <WorkProject name="FVIP Platform"
                                        siteLink="https://fvip.fluidtruck.com/"
                                        image={webFVIPDemo} />
                                </div>
                                <div className="col-12 col-md-4">          
                                    {/* Gif and Link to the Mobile App */}
                                    <WorkProject name="Rental Platform (Mobile App)"
                                        siteLink="https://apps.apple.com/us/app/fluid-truck/id1114189236"
                                        image={mobileAppDemo} />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center mb-3">
                            Sites by @Union
                        </h2>
                        <div className="row">
                            <div className="row text-center">
                                <div className="col-12 col-md-4">          
                                    {/* Gif and Link to the Union Website */}
                                    <WorkProject name="Union.co"
                                        siteLink="https://www.union.co"
                                        image={unionDemo} />
                                </div>
                                <div className="col-12 col-md-4">          
                                    {/* Gif and Link to the CRVA Website */}
                                    <WorkProject name="CRVA"
                                        siteLink="https://www.charlottesgotalot.com/"
                                        image={crvaDemo} />
                                </div>
                                <div className="col-12 col-md-4">          
                                    {/* Gif and Link to the Pepsi Website */}
                                    <WorkProject name="Pepsi Born in the Carolinas"
                                        siteLink="https://www.pepsiborninthecarolinas.com/"
                                        image={pepsiDemo} />
                                </div>
                            </div>
                        </div>
                        {/* Screenshots of Personal Websites */}
                        <h2 className="text-center mb-3">
                            {/* Click on the images to try the apps for yourself! */}
                            Personal Projects
                        </h2>
                        <div className="row text-center">
                            <div className="col-12 col-md-6">
                                {/* <Gif and Link to the Lunch Randomizer */}
                                <Project name="Lunch Randomizer"
                                    deployLink="https://danielgerrald.github.io/Lunch-Randomizer/"
                                    image={ranGen} alt="Demo Gif for Lunch Randomizer"
                                    repoLink="https://github.com/DanielGerrald/Lunch-Randomizer"
                                    desc="It's 1:00pm and you just finished a hard project at work, you stand up and think to yourself,
                                    I am starving. You turn to your buddy and say, let's get lunch. Then you both stare at each other 
                                    cause you know it's hard to decide on a place you both want as well as taking into account what you 
                                    ate for lunch yesterday and you've eaten at most of the places close to your office.                 
                                    Say hello to your new best friend for picking where you will eat for lunch!"
                                    tech="Materialize CSS, Zomato's API, Google Maps API, jQuery, HTML, CSS, JavaScript" />
                            </div>
                            <div className="col-12 col-md-6">
                            {/* Gif and Link to the Weather Dashboard */}
                                <Project name="Weather Dashboard"
                                    deployLink="https://jordant111596.github.io/Weather-Dashboard"
                                    image={weatherDashboardDemo} alt="Demo Gif for Weather Dashboard"
                                    repoLink="https://github.com/JordanT111596/Weather-Dashboard"
                                    desc="A weather dashboard that grabs information from the OpenWeatherAPI and displays it on the screen based on a user city search.
                                    When searching for a city, one is presented with current and future conditions for that city and that city is also added to the search 
                                    history. When viewing current weather conditions for that city, one is presented with the city name, the date, an icon representation of 
                                    weather conditions, the temperature, the humidity, the wind speed, and the UV index. The UV Index is color coded based on favorable, 
                                    moderate, or severe conditions. When viewing future weather conditions, one is presented with a 5-day forecast that displays the date, 
                                    an icon representation of weather conditions, the temperature, and the humidity. When clicking on a city from the search history, 
                                    that is locally stored in the browser, one is again presented with current and future conditions for that city. When opening the 
                                    weather dashboard again, one is presented with the last searched city forecast. Now go see what the weather is where you live!"
                                    tech="Bootstrap CSS, OpenWeatherAPI, Local Storage, HTML, CSS, JavaScript" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
