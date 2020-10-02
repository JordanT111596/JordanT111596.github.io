import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project(props) {
    return (
        <>
            <h4>
                {props.name}
                        </h4>
            <a href={props.deployLink} target="_blank">
                <img src={props.image} className="img-fluid p-3" alt={props.alt} />
            </a>
            <a href={props.repoLink} target="_blank">Github Repo</a>
            <br>
            </br>
            <br>
            </br>
        </>
    );
}

export default Project;
