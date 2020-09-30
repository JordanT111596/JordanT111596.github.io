import React from "react";
import { Link } from "react-router-dom";
import ranGen from "../Assets/Images/ranGen.gif"
import pandemicPlaylistDemo from "../Assets/Images/Pandemic-Playlist-Demo.gif"
import weatherDashboardDemo from "../Assets/Images/Weather-Dashboard-Demo.gif"
import workDaySchedulerDemo from "../Assets/Images/Work-Day-Scheduler-Demo.gif"
import eatDaBurgerDemo from "../Assets/Images/Eat-Da-Burger-Demo.gif"
function Portfolio() {
    return (
        // Grid Container
        <div className="container w-auto full-page pb-5">
            <div className="row w-auto">
                <div className="col-md-1">
                    {/* Empty Space */}
                </div>
                <div className="col-md-9 mt-5 card">
                    <div className="card-body">
                        {/* "Portfolio" titled */}
                        <h1 className="text-primary">
                            Portfolio
                        </h1>
                        <br >
                        </br>
                        {/* Screenshots of Websites */}
                        <h2>
                            Click on the images to try the apps for yourself!
                        </h2>
                        <br>
                        </br>
                        {/* <Gif and Link to the Lunch Randomizer */}
                        <h4>
                            Lunch Randomizer
                        </h4>
                        <a href="https://danielgerrald.github.io/Project_1/" target="_blank">
                            <img src={ranGen} className="img-fluid p-3" alt="Demo Gif for Lunch Randomizer" />
                        </a>
                        <a href="https://github.com/DanielGerrald/Project_1" target="_blank">Github Repo</a>
                        <br>
                        </br>
                        <br>
                        </br>
                        {/* Gif and Link to Pandemic Playlist */}
                        <h4>
                            Pandemic Playlist
                        </h4>
                        <a href="https://thawing-beyond-59803.herokuapp.com/" target="_blank">
                            <img src={pandemicPlaylistDemo} className="img-fluid p-3"
                                alt="Demo gif for Pandemic Playlist" />
                        </a>
                        <a href="https://github.com/oksimone/project2" target="_blank">Github Repo</a>
                        <br>
                        </br>
                        <br>
                        </br>
                        {/* Gif and Link to the Weather Dashboard */}
                        <h4>
                            Weather Dashboard
                        </h4>
                        <a href="https://jordant111596.github.io/Weather-Dashboard/" target="_blank">
                            <img src={weatherDashboardDemo} className="img-fluid p-3"
                                alt="Demo gif for Weather Dashboard" />
                        </a>
                        <a href="https://github.com/JordanT111596/Weather-Dashboard" target="_blank">Github Repo</a>
                        <br>
                        </br>
                        <br>
                        </br>
                        {/* Gif and Link to the Work Day Scheduler */}
                        <h4>
                            Work Day Scheduler
                        </h4>
                        <a href="https://jordant111596.github.io/Work-Day-Scheduler/" target="_blank">
                            <img src={workDaySchedulerDemo} className="img-fluid p-3"
                                alt="Demo gif for Work Day Scheduler" />
                        </a>
                        <a href="https://github.com/JordanT111596/Work-Day-Scheduler" target="_blank">Github Repo</a>
                        <br>
                        </br>
                        <br>
                        </br>
                        {/* Gif and Link to Eat-Da-Burger! */}
                        <h4>
                            Eat-Da-Burger!
                        </h4>
                        <a href="https://warm-bayou-69464.herokuapp.com" target="_blank">
                            <img src={eatDaBurgerDemo} className="img-fluid p-3"
                                alt="Demo gif for Eat-Da-Burger" />
                        </a>
                        <a href="https://github.com/JordanT111596/Node-Express-Handlebars" target="_blank">Github Repo</a>
                    </div>
                </div>
                <div className="col-md-2">
                    {/* Blank Space */}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
