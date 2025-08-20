import { lazy } from "react";

const HomePage = lazy(() => import("@/pages/home"));

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "*", element: <div className="text-white p-6">Not Found</div> },
];
