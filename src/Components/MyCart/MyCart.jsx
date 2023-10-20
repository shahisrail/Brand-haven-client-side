import { useLoaderData } from "react-router-dom";
import Mycartdetails from "./Mycartdetails";


const MyCart = () => {
  const mycart = useLoaderData()
  console.log(mycart);

  
  return (
    <div className="grid grid-cols-2 gap-5 p-10">
      {
        mycart.map(cart=> <Mycartdetails key={cart.id} cart={cart} ></Mycartdetails>)
    }
    </div>
  );
};

export default MyCart;