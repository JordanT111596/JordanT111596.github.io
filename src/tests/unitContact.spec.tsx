import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "../pages/Contact";
import { buildMailtoLink, openMailClient } from "../utils/mailto";
import type * as MailtoModule from "../utils/mailto";
import { filledForm, renderWithProviders } from "./testUtils";

vi.mock("../utils/mailto", async (importOriginal) => ({
    ...(await importOriginal<typeof MailtoModule>()),
    openMailClient: vi.fn(),
}));

const mockOpenMailClient = vi.mocked(openMailClient);

describe("Contact", () => {
    it("labels every field so it can be found by its label", () => {
        renderWithProviders(<Contact />);

        for (const label of ["Name", "Subject", "Email address", "Message"]) {
            expect(screen.getByLabelText(label)).toBeRequired();
        }
        expect(screen.getByLabelText("Email address")).toHaveAttribute("type", "email");
    });

    it("opens the visitor's email client with a prefilled message on submit", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Contact />);

        await user.type(screen.getByLabelText("Name"), filledForm.name);
        await user.type(screen.getByLabelText("Subject"), filledForm.subject);
        await user.type(screen.getByLabelText("Email address"), filledForm.email);
        await user.type(screen.getByLabelText("Message"), filledForm.message);
        await user.click(screen.getByRole("button", { name: "Submit" }));

        expect(mockOpenMailClient).toHaveBeenCalledTimes(1);
        expect(mockOpenMailClient).toHaveBeenCalledWith(buildMailtoLink(filledForm));
    });

    it("empties every field when Clear is clicked", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Contact />, { initialForm: filledForm });

        expect(screen.getByLabelText("Name")).toHaveValue(filledForm.name);
        await user.click(screen.getByRole("button", { name: "Clear" }));

        for (const label of ["Name", "Subject", "Email address", "Message"]) {
            expect(screen.getByLabelText(label)).toHaveValue("");
        }
        expect(mockOpenMailClient).not.toHaveBeenCalled();
    });

    it("still renders safely without a form provider", async () => {
        const user = userEvent.setup();
        render(<Contact />);

        await user.type(screen.getByLabelText("Name"), "A");
        await user.click(screen.getByRole("button", { name: "Clear" }));

        expect(screen.getByLabelText("Name")).toHaveValue("");
    });
});
