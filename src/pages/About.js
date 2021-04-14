import React from "react";
import headshot from "../Assets/Images/Headshot.png";

const headshotStyle = {
    height: "20rem",
    width: "20rem",
}

function About() {
    return (
        // Grid Container
        <div className="container w-100 full-page pb-5">
            <div className="row w-100">
                <div className="col-1">
                    {/* Empty Space */}
                </div>
                <div className="col-10 mt-5 card">
                    <div className="card-body">
                        {/* "About Me" titled */}
                        <h1 className="text-primary text-center mb-3">
                            About Me
                    </h1>
                        {/* Image and bio */}
                        <img src={headshot}
                            alt="Jordan Triplett's Headshot" className="float-left mb-2 mr-3 img-fluid" style={headshotStyle}/>
                        <p>
                            Always seeking a new challenge to overcome, Jordan Triplett is a Front End Web Developer at <a href="https://union.co" target="_blank" rel="noopener noreferrer">Union</a>, 
                            but most importantly an impassioned creator dedicated to constructing and implementing fresh and bold ideas to turn weaknesses into strengths. Having completed a 
                            Full Stack Web Development Certificate in 12 weeks after receiving a bachelor’s degree in 4 years from UNCC, Jordan is a tireless worker sharpening his skills in multiple 
                            languages like HTML, CSS/SCSS, Java, Javascript, C#, etc., database technologies such as SQL and MongoDB, and frameworks including React. These skills have translated 
                            into successful projects, such as the <a href="https://thawing-beyond-59803.herokuapp.com" target="_blank" rel="noopener noreferrer">Pandemic Playlist</a>, an 
                            application using SQL, Express, and Node to curate movie choices, and <a href="https://floating-journey-44508.herokuapp.com/" target="_blank" rel="noopener noreferrer">StudyMate</a>, 
                            a SERN stack social media application designed for remote studying.
                        </p>
                        <p>
                            Here you will find his many projects, this wonderful short biography, and a page to contact him, complete with a space
                            for leaving your name, email address, and a quick message! Enjoy your stay on his portfolio
                            page, developed by him from scratch using a little bootstrap CSS, a bit of React to hold it all together,
                            and a lot of care and effort. Want to check it out for yourself? Check out the <a href="https://github.com/JordanT111596/react-portfolio" target="_blank" rel="noopener noreferrer">repository</a> for this website!
                            Stay tuned for more updates featuring more of his work!
                        </p>
                        <p>
                            Besides coding, Jordan also enjoys making art, ranging from music recording, music production,
                            audio engineering, to video editing, directing, production, and acting! He's sure that he can
                            turn all of these talents into creating a wonderful package for any client who would love to
                            work with someone who can help create an artistic vision from the ground up.
                        </p>
                        <p>
                            Check out his <a href="pdf/resume-10.0.pdf" target="_blank">resume!</a>
                        </p>
                        <p>
                            Check out his <a href="https://www.linkedin.com/in/jordantriplett/" target="_blank" rel="noopener noreferrer">LinkedIn Page!</a>
                        </p>
                        <p>
                            Check out his <a href="https://github.com/JordanT111596" target="_blank" rel="noopener noreferrer">GitHub profile!</a>
                        </p>
                        <p>
                            You can contact him via email at <a href="mailto: JordanT111596@gmail.com">JordanT111596@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="col-1">
                    {/* Blank Space */}
                </div>
            </div>
        </div>
    );
}

export default About;
