import { MemoryRouter } from "react-router-dom";

interface RouterProviderProps {
    children: React.ReactNode;
    route: string;
}

export function RouterProvider({ children, route = "/" }: RouterProviderProps) {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
}
