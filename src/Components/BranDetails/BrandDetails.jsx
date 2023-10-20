import { useLoaderData, useParams } from "react-router-dom";
import { CarouselTransition } from "../Slider/Slider";
import { useEffect, useState } from "react";
// import { Slider } from "@material-tailwind/react";
import CartDetails from "./CartDetails";

const BrandDetails = () => {
  const brand = useLoaderData();
  console.log(brand);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  console.log(data);

  const { brandName } = useParams();
  console.log(brandName);

  const filterdata = data?.filter(
    (singaleData) =>
      singaleData?.brandName.toLowerCase() === brandName.toLowerCase()
  );
  console.log("this is filter data", filterdata);
  return (
    <div>
      <CarouselTransition
        brand={brand}
        key={brand.brandName}
      ></CarouselTransition>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10">
        {filterdata.map((cart) => (
          <CartDetails key={cart.id} cart={cart}></CartDetails>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
