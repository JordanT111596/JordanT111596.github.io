import React from "react";

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
                        <h1 className="text-primary">
                            About Me
                    </h1>
                        {/* Image and bio */}
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEZfP2hGFI2Cg/profile-displayphoto-shrink_400_400/0/1603929789922?e=1615420800&v=beta&t=ubHOPPzUsQEc4TgrkrlsNkw7IemJy0mqUGDWFewhAr8"
                            alt="Jordan Triplett's Headshot" className="float-left mb-2 mr-3 img-fluid" />
                        <p>
                            Always seeking a new challenge to overcome, Jordan Triplett is a web developer, but most importantly an impassioned creator 
                            dedicated to constructing and implementing fresh and bold ideas to turn weaknesses into strengths. Having completed a 
                            Full Stack Web Development Certificate in 12 weeks after receiving a bachelor’s degree in 4 years from UNCC while holding other jobs, 
                            Jordan is a tireless worker sharpening his skills in multiple languages (HTML, Java, Javascript, CSS), technologies (MySQL & Sequelize, MongoDB & Mongoose),
                            and frameworks (React, Express, Node) to pair with his “can-do” attitude, comfortability and prosperity with leadership,
                            and versatility between both front and back-end coding so he can begin a new and exciting path into the realm of web development.
                        </p>
                        <p>
                            Here you will find his many projects, this wonderful short biography, and a page to contact him, complete with a space
                            for leaving your name, email address, and a quick message! Enjoy your stay on his portfolio
                            page, developed by him from scratch using a little bootstrap CSS, a bit of React to hold it all together,
                            and a lot of care and effort. Stay tuned for more updates featuring more of his work!
                        </p>
                        <p>
                            Besides coding, Jordan also enjoys making art, ranging from music recording, music production,
                            audio engineering, to video editing, directing, production, and acting! He's sure that he can
                            turn all of these talents into creating a wonderful package for any client who would love to
                            work with someone who can help create an artistic vision from the ground up.
                        </p>
                        <p>
                            Check out his <a href="pdf/resume-8.0.pdf" target="_blank">resume!</a>
                        </p>
                        <p>
                            Check out his <a href="https://www.linkedin.com/in/jordantriplett/" target="_blank" rel="noopener noreferrer">LinkedIn Page!</a>
                        </p>
                        <p>
                            Check out his <a href="https://github.com/JordanT111596" target="_blank" rel="noopener noreferrer">GitHub profile!</a>
                        </p>
                        <p>
                            You can contact him via phone at (336) 303-6462, or via email at <a href="mailto: JordanT111596@gmail.com">JordanT111596@gmail.com</a>
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
