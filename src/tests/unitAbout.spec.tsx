import { screen } from "@testing-library/react";
import { About } from "../pages/About";
import { LINKEDIN_URL } from "../data/links";
import { renderWithProviders } from "./testUtils";

describe("About", () => {
    it("introduces Jordan as a Software Development Engineer at Workday", () => {
        renderWithProviders(<About />);
        expect(screen.getByRole("heading", { level: 1, name: "About Me" })).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "Jordan Triplett's headshot" })).toBeInTheDocument();
        expect(screen.getByText(/full-stack Software Development Engineer/)).toBeInTheDocument();
    });

    it("lists the Workday highlights", () => {
        renderWithProviders(<About />);
        const [highlights] = screen.getAllByRole("list");
        expect(highlights.querySelectorAll("li")).toHaveLength(5);
    });

    it("links to the resume, LinkedIn, GitHub, and email", () => {
        renderWithProviders(<About />);
        expect(screen.getByRole("link", { name: "resume!" })).toHaveAttribute(
            "href",
            expect.stringMatching(/\/pdf\/Jordan_Triplett_Resume\.pdf$/)
        );
        expect(screen.getByRole("link", { name: "LinkedIn page!" })).toHaveAttribute("href", LINKEDIN_URL);
        expect(screen.getByRole("link", { name: "GitHub profile!" })).toHaveAttribute(
            "href",
            "https://github.com/JordanT111596"
        );
        expect(screen.getByRole("link", { name: "JordanT111596@gmail.com" })).toHaveAttribute(
            "href",
            "mailto:JordanT111596@gmail.com"
        );
    });

    it("links to the other pages in-app and opens external links in a new tab", () => {
        renderWithProviders(<About />);
        expect(screen.getByRole("link", { name: "projects" })).toHaveAttribute("href", "/portfolio");
        expect(screen.getByRole("link", { name: "page to contact him" })).toHaveAttribute("href", "/contact");

        const external = screen.getAllByRole("link").filter((link) => link.getAttribute("href")?.startsWith("http"));
        expect(external.length).toBeGreaterThan(0);
        for (const link of external) {
            expect(link).toHaveAttribute("target", "_blank");
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
        }
    });
});
