import './mycar.css'
const Mycartdetails = ({ cart }) => {
  const { name, brandName, rating, photo, price, description } = cart
  // const hnadelDelete = _id => {
  //   console.log(_id);
  // }
  return (
    <div>
      <div className=" h-[400px] w-full flex justify-around container mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">name: {name}</h2>
          <h2 className="card-title">brandName: {brandName}</h2>
          <h2 className="card-title">rating:{rating}</h2>
          <h2 className="card-title">price:{price}</h2>
          <p>{description}</p>

          <button
           
            className="btn-grad">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Mycartdetails;