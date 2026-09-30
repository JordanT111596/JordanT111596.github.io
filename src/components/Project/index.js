import React from "react";

// Shows a demo video, an image, or (when neither exists) a titled tile
function ProjectMedia({ name, video, image, alt }) {
    if (video) {
        return (
            <video src={video} className="img-fluid rounded" autoPlay loop muted playsInline
                aria-label={alt || `${name} demo`} />
        );
    }
    if (image) {
        return <img src={image} className="img-fluid rounded" alt={alt || `${name} demo`} loading="lazy" />;
    }
    return <div className="work-highlight p-3">{name}</div>;
}

function Project({ name, link, video, image, alt, desc, tech, repoLink }) {
    const media = <ProjectMedia name={name} video={video} image={image} alt={alt} />;

    return (
        <div className="mb-5">
            <h4>{name}</h4>
            <div className="p-3">
                {link
                    ? <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{media}</a>
                    : media}
            </div>
            {desc && <p className="text-start"><b>Description:</b> {desc}</p>}
            {tech && <p className="text-start"><b>Technologies Used:</b> {tech}</p>}
            {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer">{name} GitHub Repo</a>}
        </div>
    );
}

export default Project;
