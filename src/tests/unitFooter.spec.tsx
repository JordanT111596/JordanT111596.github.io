import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("Footer", () => {
    afterEach(() => {
        vi.useRealTimers();
    });

    it("shows a copyright notice for the current year", () => {
        vi.useFakeTimers({ toFake: ["Date"] });
        vi.setSystemTime(new Date("2030-06-15T12:00:00Z"));
        render(<Footer />);

        expect(screen.getByRole("contentinfo")).toHaveTextContent("© 2030 Jordan Triplett");
    });
});
