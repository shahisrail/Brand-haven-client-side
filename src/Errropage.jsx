import { NavLink } from "react-router-dom";

const Errropage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src="/public/393782456_339712561883091_8094384297289914185_n.gif" alt="" />
        </div>
        <NavLink className="flex justify-center" to={"/"}>
          <button className="btn">Go Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Errropage;