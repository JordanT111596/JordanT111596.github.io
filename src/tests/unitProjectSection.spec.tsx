import { render, screen, within } from "@testing-library/react";
import { ProjectSection } from "../components/ProjectSection";
import type { Project } from "../types";

const projects: readonly Project[] = [{ name: "First" }, { name: "Second" }];

describe("ProjectSection", () => {
  it("renders the title, intro, and every project in three columns by default", () => {
    render(<ProjectSection title="Work" intro="Things I built." projects={projects} />);

    const section = screen.getByRole("region", { name: "Work" });
    expect(within(section).getByRole("heading", { level: 2, name: "Work" })).toBeInTheDocument();
    expect(within(section).getByText("Things I built.")).toBeInTheDocument();
    expect(within(section).getAllByRole("heading", { level: 4 }).map((h) => h.textContent)).toEqual(["First", "Second"]);
    expect(within(section).getByRole("heading", { name: "First" }).closest(".col-12")).toHaveClass("col-md-4");
  });

  it("supports two columns and omits the intro when none is given", () => {
    render(<ProjectSection title="Personal" projects={projects} columns="col-md-6" />);

    expect(screen.getByRole("heading", { name: "First" }).closest(".col-12")).toHaveClass("col-md-6");
    expect(screen.getByRole("region", { name: "Personal" }).querySelector("p")).toBeNull();
  });
});
