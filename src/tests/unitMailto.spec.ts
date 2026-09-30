import { buildMailtoLink, openMailClient } from "../utils/mailto";
import { filledForm } from "./testUtils";

describe("buildMailtoLink", () => {
    it("addresses the email to Jordan with the subject and body URL-encoded", () => {
        const link = buildMailtoLink(filledForm);
        const [address, query] = link.split("?");
        const params = new URLSearchParams(query);

        expect(address).toBe("mailto:JordanT111596@gmail.com");
        expect(params.get("subject")).toBe(filledForm.subject);
        expect(params.get("body")).toBe(
            `${filledForm.message}\n\nPlease contact me back via email at ${filledForm.email}` +
                `\n\nThis message was sent from ${filledForm.name} using the portfolio contact page!`
        );
    });
});

describe("openMailClient", () => {
    const mockAssign = vi.fn();

    beforeEach(() => {
        vi.stubGlobal("location", { ...window.location, assign: mockAssign });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it("navigates the browser to the mailto link", () => {
        openMailClient("mailto:someone@example.com");

        expect(mockAssign).toHaveBeenCalledWith("mailto:someone@example.com");
    });
});
