const mockRender = jest.fn();
const mockCreateRoot = jest.fn();

jest.mock("react-dom/client", () => ({
  createRoot: (container: Element) => mockCreateRoot(container),
}));

const loadEntrypoint = (): void => {
  jest.isolateModules(() => {
    require("../index");
  });
};

describe("index entrypoint", () => {
  beforeEach(() => {
    mockCreateRoot.mockImplementation(() => ({ render: mockRender }));
    document.body.innerHTML = "";
  });

  it("mounts the app into the #root element", () => {
    document.body.innerHTML = '<div id="root"></div>';

    loadEntrypoint();

    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById("root"));
    expect(mockRender).toHaveBeenCalledTimes(1);
  });

  it("does nothing when the #root element is missing", () => {
    loadEntrypoint();

    expect(mockCreateRoot).not.toHaveBeenCalled();
  });
});

export {};
