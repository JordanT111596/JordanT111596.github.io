import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";

const renderAt = (path: string): void => {
  window.history.pushState({}, "", path);
  render(<App />);
};

describe("App", () => {
  it("renders the navbar, the About Me page, and the footer at the root route", () => {
    renderAt("/");

    expect(screen.getByRole("link", { name: "Jordan Triplett" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: "About Me" })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toHaveTextContent("Jordan Triplett");
  });

  it("falls back to the About Me page for unknown routes", () => {
    renderAt("/not-a-real-page");

    expect(screen.getByRole("heading", { level: 1, name: "About Me" })).toBeInTheDocument();
  });

  it("navigates between pages and moves the active nav highlight", async () => {
    const user = userEvent.setup();
    renderAt("/");

    await user.click(screen.getByRole("link", { name: "Portfolio" }));
    expect(screen.getByRole("heading", { level: 1, name: "Portfolio" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Portfolio" })).toHaveClass("active");
    expect(screen.getByRole("link", { name: "About Me" })).not.toHaveClass("active");

    await user.click(screen.getByRole("link", { name: "Contact" }));
    expect(screen.getByRole("heading", { level: 1, name: "Contact" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toHaveClass("active");
  });

  it("keeps a half-written contact message when switching pages", async () => {
    const user = userEvent.setup();
    renderAt("/contact");

    await user.type(screen.getByLabelText("Name"), "Ada");
    await user.click(screen.getByRole("link", { name: "About Me" }));
    await user.click(screen.getByRole("link", { name: "Contact" }));

    expect(screen.getByLabelText("Name")).toHaveValue("Ada");
  });
});
