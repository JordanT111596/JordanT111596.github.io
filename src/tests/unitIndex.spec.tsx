const { mockCreateRoot, mockRender } = vi.hoisted(() => {
    const render = vi.fn();
    return { mockRender: render, mockCreateRoot: vi.fn(() => ({ render })) };
});

vi.mock("react-dom/client", () => ({ createRoot: mockCreateRoot }));

const loadEntrypoint = async (): Promise<void> => {
    vi.resetModules();
    await import("../index");
};

describe("index entrypoint", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("mounts the app into the #root element", async () => {
        document.body.innerHTML = '<div id="root"></div>';

        await loadEntrypoint();

        expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById("root"));
        expect(mockRender).toHaveBeenCalledTimes(1);
    });

    it("does nothing when the #root element is missing", async () => {
        await loadEntrypoint();

        expect(mockCreateRoot).not.toHaveBeenCalled();
    });
});
