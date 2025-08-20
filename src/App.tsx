import MainLayout from "@/layouts/main-layout";
import { routes } from "@/routes";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../sentry.client.config";

export default function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
                    <Routes>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Suspense>
            </MainLayout>
        </BrowserRouter>
    );
}
