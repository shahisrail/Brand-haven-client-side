import React from "react";
import { NavLink } from "react-router-dom";

const BrandCard = ({ brand }) => {
  console.log(brand);
  const {id, image, brandName } = brand;
  return (
    <NavLink to={`/details/${id}`}>
      <div className="card  bg-base-100 shadow-xl p-5">
        <figure>
          <img className="w-full lg:h-[250px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {brandName} </h2>
        </div>
      </div>
    </NavLink>
  );
};

export default BrandCard;
