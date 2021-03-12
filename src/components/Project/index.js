import React from "react";

// Each block has props passed in for each project in my portfolio
function Project(props) {
    return (
        <>
            <h4>
                {/* The name of the project is displayed at the top */}
                {props.name}
            </h4>
            {/* The demo gif of the project which is a clickable hyperlink to the deployed project */}
            <a href={props.deployLink} target="_blank" rel="noopener noreferrer">
                <img src={props.image} className="img-fluid p-3" alt={props.alt} />
            </a>
            <p>
                {/* The description of each project is passed in as a prop */}
                <b>Project Description:</b> {props.desc}
            </p>
            <p>
                {/* The technology used in each project is passed in as a prop */}
                <b>Technologies Used:</b> {props.tech}
            </p>
            {/* The link to the github repository is passed in to be a hyperlink */}
            <a href={props.repoLink} target="_blank" rel="noopener noreferrer">{props.name} Github Repo</a>
            {/* Spacing between each project block */}
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </>
    );
}

export default Project;
