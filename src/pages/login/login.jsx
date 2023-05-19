import React from "react";
import LoginForm from "../../components/molecules/loginForm/loginForm";
import Menu from "../../components/molecules/menu/menu";

function Login() {
  return (
    <div className="login-page">
      <div className="login">Login</div>
      <Menu />
      <LoginForm />
    </div>
  );
}

export default Login;
