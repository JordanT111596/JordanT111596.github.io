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
                        <Project name="StudyMate"
                            deployLink="https://floating-journey-44508.herokuapp.com/"
                            image={studyMateDemo} alt="Demo Gif for StudyMate"
                            repoLink="https://github.com/collinlanie12/StudyMate"
                            desc="StudyMate is a web application that allows students to meet 
                            and study subjects together. Students can signup to our site and 
                            fill out their profile with information such as their major, 
                            current classes, what subject they are most proficient in, what 
                            university they attend, and a brief bio about themselves. Connect 
                            with other students, study together, and learn more today!"
                            tech="React.js, SCSS, react-bootstrap, react-animations, react-animate-on-scroll, JSX, 
                            Pusher Notifications (WebSockets), MySQL Migrations, Node.js, Express.js, 
                            Passport (Authentication), HTML, CSS, Javascript" />
                        {/* Gif and Link to Pandemic Playlist */}
                        <Project name="Pandemic Playlist"
                            deployLink="https://thawing-beyond-59803.herokuapp.com"
                            image={pandemicPlaylistDemo} alt="Demo Gif for Pandemic Playlist"
                            repoLink="https://github.com/oksimone/project2"
                            desc="We're all stuck indoors for the long haul until we take care of the pandemic, 
                            and it gets boring to watch the same old movies over and over. Want to find some new,
                            fresh ideas to pass the time? Try the Pandemic Playlist! Sign up with an email address
                            and password and you can curate your playlist based on age and genre! Add movies to
                            your playlist, your favorites list, or separate by the ones you've seen and the ones
                            you haven't! Want more info about a movie? We've got that for you too!"
                            tech="Bootstrap CSS, Passport (Authentication), MySQL & Sequelize, Express.js, 
                            Node.js, Handlebars, The Movie DB API, HTML, CSS, Javascript, jQuery" />
                        {/* <Gif and Link to the Lunch Randomizer */}
                        <Project name="Lunch Randomizer"
                            deployLink="https://danielgerrald.github.io/Project_1"
                            image={ranGen} alt="Demo Gif for Lunch Randomizer"
                            repoLink="https://github.com/DanielGerrald/Project_1"
                            desc="It’s 1:00pm and you just finished a hard project at work, you stand up and think to yourself,
                            I am starving. You turn to your buddy and say, let’s get lunch. Then you both stare at each other 
                            cause you know it’s hard to decide on a place you both want as well as taking into account what you 
                            ate for lunch yesterday and you’ve eaten at most of the places close to your office.                 
                            Say hello to your new best friend for picking where you will eat for lunch!"
                            tech="Materialize CSS, Zomato's API, Google Maps API, jQuery, HTML, CSS, Javascript" />
                        {/* Gif and Link to Fitness Tracker */}
                        <Project name="Fitness Tracker"
                            deployLink="https://arcane-waters-87658.herokuapp.com"
                            image={fitnessTrackerDemo} alt="Demo Gif for Eat-Da-Burger"
                            repoLink="https://github.com/JordanT111596/Fitness-Tracker"
                            desc="A workout tracker to log multiple exercises in a workout on a given day and to track the name, type, weight, sets, reps, 
                            and duration of exercise. If the exercise is a cardio exercise, one can track distance traveled. One can view, create, and track daily workouts. 
                            One can log multiple exercises in a workout on a given day. One can track the name, type, weight, sets, reps, and duration of exercise. If the 
                            exercise is a cardio exercise, one can track distance traveled. Now get to those workouts!"
                            tech="Node.js, Express.js, NoSQL database (MongoDB), Bootstrap CSS, HTML, CSS, Javascript" />
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
                            tech="Bootstrap CSS, OpenWeatherAPI, Local Storage, HTML, CSS, Javascript" />
                        {/* Gif and Link to the Work Day Scheduler */}
                        <Project name="Work Day Scheduler"
                            deployLink="https://jordant111596.github.io/Work-Day-Scheduler"
                            image={workDaySchedulerDemo} alt="Demo Gif for Work Day Scheduler"
                            repoLink="https://github.com/JordanT111596/Work-Day-Scheduler"
                            desc="A work day scheduler that stores different tasks to complete at between the hours of 9am-5pm to keep your day organized.
                            When the planner is opened, the current day is displayed at the top of the page. When scrolling down, one can view timeblocks 
                            for standard business hours. When viewing the timeblocks, each block is color coded to indicate if the time is in the past, 
                            present, or future. When clicking a timeblock, an event can be entered. When the save button is clicked beside the timeblock, 
                            the text for the event is saved in local storage. Since the text is saved in local storage, upon refresh, the saved events do 
                            persist. Now go get your day organized!"
                            tech="Local Storage, HTML, CSS, Javascript" />
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
