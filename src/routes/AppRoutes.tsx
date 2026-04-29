import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../pages/about/About";
import { RootLayout } from "../components";
import NotFound from "../pages/not-found/NotFound";
import { ROUTES } from "../datas/routes";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.ABOUT} replace />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    );
}
