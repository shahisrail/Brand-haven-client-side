import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import Fotter from "../Components/Fotter/Fotter";
import { useState } from "react";

const Rout = () => {
  const [isDarkmode, setDarkmode] = useState(false)
  const handelDarkMode = () => {
    setDarkmode(!isDarkmode)
  }
  return (
    <div>
      <Nav isDarkmode={isDarkmode} handelDarkMode={handelDarkMode}></Nav>
      <Outlet isDarkmode={isDarkmode}></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Rout;