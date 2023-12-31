import {  Link } from "react-router-dom";
import './cartdetail.css'
const CartDetails = ({ cart }) => {
  const {_id, name, brandName, rating, photo, price } = cart;
  console.log('this is id',_id);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl  mt-5 ">
        <figure>
          <img className=" lg:h-[400px]   p-5" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">BrandName: {brandName}</h2>
          <h2 className="card-title">Price {price}</h2>
          <h2 className="card-title">Rating {rating}</h2>

          <div className="flex flex-col  lg:flex-row justify-between">
            <Link to={`/detail/${_id}`}>
              <button className="btn btn-primary btn-grad">Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-primary btn-grad">Update </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
