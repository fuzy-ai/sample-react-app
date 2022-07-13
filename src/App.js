import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import Page2Route from "./Page2Route";

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomeRoute />}/>
            <Route path="/page2" element={<Page2Route />}/>
            <Route path="*" element={<Navigate to={"/home"}/>}/>
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));