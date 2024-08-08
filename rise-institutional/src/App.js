import React from "react";
import Rotas from "./routes";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>    
      </>
  );
}
export default App;
