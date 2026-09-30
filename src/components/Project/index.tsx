import type { ReactElement } from "react";
import type { Project as ProjectProps, ProjectMedia } from "../../types";

interface ProjectMediaViewProps {
    readonly name: string;
    readonly media?: ProjectMedia;
}

// Shows a demo video, an image, or (when there's no media) a titled tile
const ProjectMediaView = ({ name, media }: ProjectMediaViewProps): ReactElement => {
    if (media?.type === "video") {
        return (
            <video
                src={media.src}
                className="img-fluid rounded"
                autoPlay
                loop
                muted
                playsInline
                aria-label={`${name} demo`}
            />
        );
    }
    if (media?.type === "image") {
        return <img src={media.src} className="img-fluid rounded" alt={media.alt ?? `${name} demo`} loading="lazy" />;
    }
    return (
        <div className="work-highlight p-3" role="img" aria-label={name}>
            {name}
        </div>
    );
};

export const Project = ({ name, link, media, desc, tech, repoLink }: ProjectProps): ReactElement => {
    const mediaView = <ProjectMediaView name={name} media={media} />;

    return (
        <div className="mb-5">
            <h4>{name}</h4>
            <div className="p-3">
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        {mediaView}
                    </a>
                ) : (
                    mediaView
                )}
            </div>
            {desc && (
                <p className="text-start">
                    <b>Description:</b> {desc}
                </p>
            )}
            {tech && (
                <p className="text-start">
                    <b>Technologies Used:</b> {tech}
                </p>
            )}
            {repoLink && (
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    {name} GitHub Repo
                </a>
            )}
        </div>
    );
};
