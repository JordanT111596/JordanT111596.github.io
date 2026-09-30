import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "../components/Navbar";
import { renderWithProviders } from "./testUtils";

const getToggle = (): HTMLElement => screen.getByRole("button", { name: "Toggle navigation" });
const getMenu = (): HTMLElement => screen.getByRole("list").parentElement as HTMLElement;

describe("Navbar", () => {
    it("renders a link for every page", () => {
        renderWithProviders(<Navbar />);

        expect(screen.getByRole("link", { name: "About Me" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "Portfolio" })).toHaveAttribute("href", "/portfolio");
        expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
    });

    it("highlights only the link for the current page", () => {
        renderWithProviders(<Navbar />, { route: "/portfolio" });

        expect(screen.getByRole("link", { name: "Portfolio" })).toHaveClass("active");
        expect(screen.getByRole("link", { name: "About Me" })).not.toHaveClass("active");
    });

    it("opens and closes the collapsed menu with the toggle button", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Navbar />);

        expect(getToggle()).toHaveAttribute("aria-expanded", "false");
        expect(getMenu()).not.toHaveClass("show");

        await user.click(getToggle());
        expect(getToggle()).toHaveAttribute("aria-expanded", "true");
        expect(getMenu()).toHaveClass("show");

        await user.click(getToggle());
        expect(getMenu()).not.toHaveClass("show");
    });

    it.each(["Contact", "Jordan Triplett"])("closes the menu after clicking %s", async (linkName) => {
        const user = userEvent.setup();
        renderWithProviders(<Navbar />);

        await user.click(getToggle());
        await user.click(screen.getByRole("link", { name: linkName }));

        expect(getMenu()).not.toHaveClass("show");
    });
});
