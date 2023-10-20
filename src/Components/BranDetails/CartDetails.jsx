import {  NavLink } from "react-router-dom";
import './cartdetail.css'
const CartDetails = ({ cart }) => {
  const {_id, name, brandName, rating, photo, price } = cart;
  console.log('this is id',_id);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl  mt-5 ">
        <figure>
          <img className="h-[400px] w-full  p-5" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">BrandName: {brandName}</h2>
          <h2 className="card-title">Price {price}</h2>
          <h2 className="card-title">Rating {rating}</h2>

          <div className="flex justify-between">
            <NavLink to={`/detail/${_id}`}>
              <button className="btn btn-primary btn-grad">Details</button>
            </NavLink>
            <button className="btn btn-primary btn-grad">Update </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
