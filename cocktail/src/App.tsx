import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export const App = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header />
            <Outlet />
        </div>
    );
};
