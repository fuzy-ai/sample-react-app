import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Page2Route from "./Page2Route";
import getUser from "./get-user";
import { sendEvent } from "fuzy-js";

const AppRoutes = () => {
    const location = useLocation();
    const userId = getUser();
    useEffect(() => {
        sendEvent(location.pathname, { userId })
    }, [location])
    return (
        <Routes>
            <Route path="/home" element={<HomeRoute />} />
            <Route path="/page2" element={<Page2Route />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
    )
}

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));