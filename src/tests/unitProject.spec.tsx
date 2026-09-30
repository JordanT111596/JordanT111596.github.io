import { render, screen } from "@testing-library/react";
import { Project } from "../components/Project";

describe("Project", () => {
  it("renders a looping, muted demo video wrapped in a link to the project", () => {
    render(<Project name="Demo App" link="https://example.com" media={{ type: "video", src: "demo.mp4" }} />);

    const video = screen.getByLabelText("Demo App demo");
    expect(video.tagName).toBe("VIDEO");
    expect(video).toHaveAttribute("src", "demo.mp4");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("autoplay");
    const link = screen.getByRole("link");
    expect(link).toContainElement(video);
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a lazy-loaded image with its own alt text", () => {
    render(<Project name="Logo" media={{ type: "image", src: "logo.png", alt: "Company logo" }} />);

    const image = screen.getByRole("img", { name: "Company logo" });
    expect(image).toHaveAttribute("src", "logo.png");
    expect(image).toHaveAttribute("loading", "lazy");
  });

  it("falls back to generated alt text when an image has none", () => {
    render(<Project name="Logo" media={{ type: "image", src: "logo.png" }} />);

    expect(screen.getByRole("img", { name: "Logo demo" })).toBeInTheDocument();
  });

  it("renders a titled tile without a link when there is no media or link", () => {
    render(<Project name="Secret Project" />);

    expect(screen.getByRole("img", { name: "Secret Project" })).toHaveClass("work-highlight");
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByText("Description:")).not.toBeInTheDocument();
    expect(screen.queryByText("Technologies Used:")).not.toBeInTheDocument();
  });

  it("shows the description, technologies, and repo link when provided", () => {
    render(
      <Project
        name="Weather Dashboard"
        desc="Shows the weather."
        tech="JavaScript"
        repoLink="https://github.com/example/weather"
      />,
    );

    expect(screen.getByText("Shows the weather.")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Weather Dashboard GitHub Repo" }))
      .toHaveAttribute("href", "https://github.com/example/weather");
  });
});
