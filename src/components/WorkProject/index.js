import React from "react";

// Each block has props passed in for each work project in my portfolio
function WorkProject(props) {
    return (
        <>
            <h4>
                {/* The name of the website is displayed at the top */}
                {props.name}
            </h4>
            {/* The demo gif of the website which is a clickable hyperlink to the website */}
            <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
                <img src={props.image} className="img-fluid p-3" alt={props.name + " Website Gif"} />
            </a>
            {/* Spacing between each work project block */}
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </>
    );
}

export default WorkProject;
