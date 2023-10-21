import { useLoaderData } from "react-router-dom";
import Mycartdetails from "./Mycartdetails";
import { useState } from "react";


const MyCart = () => {

  const mycart = useLoaderData()
  const [cartdata,setData] = useState(mycart)
  console.log(cartdata);

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
      {cartdata.map((cart) => (
        <Mycartdetails
          key={cart.id}
          cartdata={cartdata}
          setData={setData}
          cart={cart}
        ></Mycartdetails>
      ))}
    </div>
  );
};

export default MyCart;