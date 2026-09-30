import type { ReactElement } from "react";
import { ProjectSection } from "../components/ProjectSection";
import { EXTERNAL_LINK_PROPS, WORKDAY_EVERYWHERE_URL } from "../data/links";
import { fluidTruckProjects, personalProjects, unionProjects, workdayProjects } from "../data/projects";

const workdayIntro = (
    <>
        I build{" "}
        <a href={WORKDAY_EVERYWHERE_URL} {...EXTERNAL_LINK_PROPS}>
            Workday Everywhere
        </a>
        , which brings Workday into Slack, Microsoft Teams, Microsoft 365 Copilot, Gemini Enterprise, and more.
    </>
);

export const Portfolio = (): ReactElement => (
    <div className="container pb-5">
        <div className="card mt-5">
            <div className="card-body">
                <h1 className="text-primary text-center mb-4">Portfolio</h1>
                <ProjectSection title="Workday" intro={workdayIntro} projects={workdayProjects} />
                <ProjectSection title="Fluid Truck" projects={fluidTruckProjects} />
                <ProjectSection title="Sites by @Union" projects={unionProjects} />
                <ProjectSection title="Personal Projects" projects={personalProjects} columns="col-md-6" />
            </div>
        </div>
    </div>
);
