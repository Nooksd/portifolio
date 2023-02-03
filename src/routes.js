import React from "react";
import { Route, Routes} from 'react-router-dom';

import Main from "./pages/Main";
import Login from "./pages/Login";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<h1>Not Found: error 404</h1>} />
        </Routes>
    )
}