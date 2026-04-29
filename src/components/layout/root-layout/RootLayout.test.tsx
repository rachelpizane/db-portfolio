import { render, screen } from "../../../tests/setup-tests";
import { RootLayout } from "./RootLayout";

vi.mock("../header/Header", () => ({
    Header: () => <div data-testid="mock-header" />,
}));
vi.mock("../footer/Footer", () => ({
    Footer: () => <div data-testid="mock-footer" />,
}));

describe(RootLayout.name, () => {
    it("should render Header, Footer, and Outlet", () => {
        render(<RootLayout />);
        expect(screen.getByTestId("mock-header")).toBeInTheDocument();
        expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
        expect(screen.getByTestId("mock-outlet")).toBeInTheDocument();
    });
});
