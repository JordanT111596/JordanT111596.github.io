import React from "react";

function About() {
    return (
        // Grid Container
        <div className="container w-100 full-page pb-5">
            <div className="row w-100">
                <div className="col-md-1">
                    {/* Empty Space */}
                </div>
                <div className="col-md-8 mt-5 card">
                    <div className="card-body">
                        {/* "About Me" titled */}
                        <h1 className="text-primary">
                            About Me
                    </h1>
                        {/* Image and bio */}
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE5pFSS9yze8Q/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=I9kR3zE8KxueNjzPfcY4FI2HDcI6X9iqp4jzVISudVU"
                            alt="Jordan Triplett's Graduation Pic" className="float-left mr-3 img-fluid" />
                        <p>
                            Jordan Triplett is a web developer seeking new challenges in new environments as he completes
                            the rigorous yet rewarding full-time full stack coding bootcamp at UNC-Charlotte. Jordan has
                            already received an undergraduate Bachelor of Science degree in Psychology from the University,
                            however, he has decided to go back as he braves a new career frontier. Here you will find his
                            many projects, this wonderful short biography, and a page to contact him, complete with a space
                            for leaving your name, email address, and a quick message! Enjoy your stay on his portfolio
                            page, developed by him from scratch using a little bootstrap CSS and a lot of care and effort.
                            Stay tuned for more updates featuring more of his work!
                    </p>
                        <p>
                            Besides coding, Jordan also enjoys making art, ranging from music recording, music production,
                            audio engineering, to video editing, directing, production, and acting! He's sure that he can
                            turn all of these talents into creating a wonderful package for any client who would love to
                            work with someone who can help create an artistic vision from the ground up.
                    </p>
                        <p>
                                Check out his <a href="../Assets/pdf/resume 7.0.pdf" target="_blank">resume!</a>
                            </p>
                            <p>
                                Check out his <a href="https://www.linkedin.com/in/jordantriplett/" target="_blank">LinkedIn Page!</a>
                            </p>
                            <p>
                                Check out his <a href="https://github.com/JordanT111596" target="_blank">GitHub profile</a>
                            </p>
                            <p>
                                You can contact him via phone at (336) 303-6462, or via email at <a href="mailto: JordanT111596@gmail.com">JordanT111596@gmail.com</a>
                            </p>
                    </div>
                </div>
                <div className="col-md-3">
                    {/* Blank Space */}
                </div>
            </div>
        </div>
    );
}

export default About;
