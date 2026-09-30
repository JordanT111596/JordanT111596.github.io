import { render, screen, within } from "@testing-library/react";
import { Portfolio } from "../pages/Portfolio";
import { fluidTruckProjects, personalProjects, unionProjects, workdayProjects } from "../data/projects";
import { WORKDAY_EVERYWHERE_URL } from "../data/links";

describe("Portfolio", () => {
  it("lists Workday first, then Fluid Truck, Union, and personal projects", () => {
    render(<Portfolio />);

    expect(screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent))
      .toEqual(["Workday", "Fluid Truck", "Sites by @Union", "Personal Projects"]);
  });

  it.each([
    ["Workday", workdayProjects],
    ["Fluid Truck", fluidTruckProjects],
    ["Sites by @Union", unionProjects],
    ["Personal Projects", personalProjects],
  ])("renders every %s project", (sectionName, projects) => {
    render(<Portfolio />);

    const section = screen.getByRole("region", { name: sectionName });
    const names = within(section).getAllByRole("heading", { level: 4 }).map((h) => h.textContent);
    expect(names).toEqual(projects.map((project) => project.name));
  });

  it("introduces the Workday section with a link to Workday Everywhere", () => {
    render(<Portfolio />);

    const section = screen.getByRole("region", { name: "Workday" });
    expect(within(section).getByRole("link", { name: "Workday Everywhere" })).toHaveAttribute("href", WORKDAY_EVERYWHERE_URL);
  });
});
