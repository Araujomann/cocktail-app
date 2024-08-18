import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Home, Favorites, Category, Error, Results } from "./pages";


import "./index.css";
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from "react-router-dom";

const routes: RouteObject[] = [
    {
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/results",
                element: <Results />,
            },
            {
                path: "/category",
                element: <Category />,
            }
        ],
    },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
