import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/organisms/navbar";
import "./App.css";

const Layout = () => {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<LogOutView />} />
            <Route path="givingThingsBack" element={<GivingThingsBack />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
