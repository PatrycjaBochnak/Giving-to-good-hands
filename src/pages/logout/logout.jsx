import React from "react";
import Menu from "../../components/molecules/menu/menu";

function Logout() {
  return (
    <>
      <div className="logout">Logout</div>
      <Menu />
      <LogoutForm />
    </>
  );
}

export default Logout;
