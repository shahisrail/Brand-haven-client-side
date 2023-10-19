

const CartDetails = ({ cart }) => {
  const { name, brandName, rating, photo, price } = cart;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl  mt-5 ">
        <figure>
          <img className="h-[400px] w-full  p-5" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{brandName}</h2>
          <h2 className="card-title">{price}</h2>
          <h2 className="card-title">{rating}</h2>

          <div className="flex justify-between">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary">Update </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;