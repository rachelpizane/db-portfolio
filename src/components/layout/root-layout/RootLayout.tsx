import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function RootLayout() {
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="flex justify-center px-3 py-8 md:px-6">
                <div className="w-full md:max-w-7xl">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
