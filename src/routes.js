import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import Main from "./pages/Main";
import Contato from "./pages/contato";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<h1>Not Found: error 404</h1>} />
        </Routes>
    )
}