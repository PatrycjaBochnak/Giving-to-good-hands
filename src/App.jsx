import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Logout from "./pages/logout/logout";
import GivingThingsBack from "./pages/givingThingsBack/givingThingsBack";

function App() {
  return (
    <div className="app">
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="givingThingsBack" element={<GivingThingsBack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
