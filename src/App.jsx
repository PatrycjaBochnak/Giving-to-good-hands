import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<LogOut />} />
            <Route path="givingThingsBack" element={<GivingThingsBack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
