
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;