import React from "react";
import Project from "../components/Project";
import ranGen from "../Assets/Images/ranGen.gif"
import pandemicPlaylistDemo from "../Assets/Images/Pandemic-Playlist-Demo.gif"
import weatherDashboardDemo from "../Assets/Images/Weather-Dashboard-Demo.gif"
import workDaySchedulerDemo from "../Assets/Images/Work-Day-Scheduler-Demo.gif"
import studyMateDemo from "../Assets/Images/StudyMate-Demo.gif"
import fitnessTrackerDemo from "../Assets/Images/Fitness-Tracker-Demo.gif";
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
                        {/* Gif and Link to StudyMate */}
                        <Project name="StudyMate" deployLink="https://floating-journey-44508.herokuapp.com/" image={studyMateDemo} alt="Demo Gif for StudyMate" repoLink="https://github.com/collinlanie12/StudyMate" />
                        {/* Gif and Link to Pandemic Playlist */}
                        <Project name="Pandemic Playlist" deployLink="https://thawing-beyond-59803.herokuapp.com" image={pandemicPlaylistDemo} alt="Demo Gif for Pandemic Playlist" repoLink="https://github.com/oksimone/project2" />
                        {/* <Gif and Link to the Lunch Randomizer */}
                        <Project name="Lunch Randomizer" deployLink="https://danielgerrald.github.io/Project_1" image={ranGen} alt="Demo Gif for Lunch Randomizer" repoLink="https://github.com/DanielGerrald/Project_1" />
                        {/* Gif and Link to the Weather Dashboard */}
                        <Project name="Weather Dashboard" deployLink="https://jordant111596.github.io/Weather-Dashboard" image={weatherDashboardDemo} alt="Demo Gif for Weather Dashboard" repoLink="https://github.com/JordanT111596/Weather-Dashboard" />
                        {/* Gif and Link to the Work Day Scheduler */}
                        <Project name="Work Day Scheduler" deployLink="https://jordant111596.github.io/Work-Day-Scheduler" image={workDaySchedulerDemo} alt="Demo Gif for Work Day Scheduler" repoLink="https://github.com/JordanT111596/Work-Day-Scheduler" />
                        {/* Gif and Link to Fitness Tracker */}
                        <Project name="Fitness Tracker" deployLink="https://arcane-waters-87658.herokuapp.com" image={fitnessTrackerDemo} alt="Demo Gif for Eat-Da-Burger" repoLink="https://github.com/JordanT111596/Fitness-Tracker" />
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
