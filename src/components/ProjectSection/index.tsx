import type { ReactElement } from "react";
import type { ProjectSectionProps } from "../../types";
import { Project } from "../Project";

export const ProjectSection = ({ title, intro, projects, columns = "col-md-4" }: ProjectSectionProps): ReactElement => (
    <section className="mb-4" aria-label={title}>
        <h2 className="text-center mb-3">{title}</h2>
        {intro && (
            <p className="text-center mx-auto mb-4" style={{ maxWidth: "48rem" }}>
                {intro}
            </p>
        )}
        <div className="row text-center">
            {projects.map((project) => (
                <div className={`col-12 ${columns}`} key={project.name}>
                    <Project {...project} />
                </div>
            ))}
        </div>
    </section>
);
