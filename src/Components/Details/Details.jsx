import { useLoaderData } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const details = useLoaderData();
  console.log(details);
  const { name, brandName, rating, photo, price, description } = details;

  const handeladd = () => {
    fetch(
      "https://assaignment-server-10-mttgxp327-shahisrail134-gmailcom.vercel.app/addtocard",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      }
    );
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row justify-around container mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">name: {name}</h2>
          <h2 className="card-title">brandName: {brandName}</h2>
          <h2 className="card-title">rating:{rating}</h2>
          <h2 className="card-title">price:{price}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button onClick={handeladd} className="btn btn-primary btn-grad">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
