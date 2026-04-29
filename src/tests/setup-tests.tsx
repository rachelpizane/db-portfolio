import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { RouterProvider } from "./providers/router-provider";

export const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");

    return {
        ...actual,
        useNavigate: () => mockNavigate,
        Outlet: () => <div data-testid="mock-outlet" />,
    };
});

export function renderWithProvider(ui: React.ReactElement, { route = "/" } = {}) {
    return render(<RouterProvider route={route}>{ui}</RouterProvider>);
}

export { screen, fireEvent, waitFor } from "@testing-library/react";
export { renderWithProvider as render };
