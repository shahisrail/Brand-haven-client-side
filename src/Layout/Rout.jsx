import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import Fotter from "../Components/Fotter/Fotter";

const Rout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Rout;