import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project(props) {
    return (
        <>
            <h4>
                {props.name}
            </h4>
            <a href={props.deployLink} target="_blank" rel="noopener noreferrer">
                <img src={props.image} className="img-fluid p-3" alt={props.alt} />
            </a>
            <p>
                <b>Project Description:</b> {props.desc}
            </p>
            <p>
                <b>Technologies Used:</b> {props.tech}
            </p>
            <a href={props.repoLink} target="_blank" rel="noopener noreferrer">{props.name} Github Repo</a>
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
