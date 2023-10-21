import { useLoaderData, useParams } from "react-router-dom";
// import { CarouselTransition } from "../Slider/Slider";
import { useEffect, useState } from "react";
// import { Slider } from "@material-tailwind/react";
import CartDetails from "./CartDetails";
import { Carousel } from "@material-tailwind/react";

const BrandDetails = () => {
  const brand = useLoaderData();
  console.log(brand);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://assaignment-server-10-mttgxp327-shahisrail134-gmailcom.vercel.app/cart"
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  console.log(data);

  const { brandName } = useParams();
  console.log(brandName);

  const filterdata =
    data?.filter(
      (singaleData) =>
        singaleData?.brandName.toLowerCase() === brandName.toLowerCase()
    ) || [];
  console.log("this is filter data", filterdata);
  return (
    <div>
      <Carousel transition={{ duration: 2 }} className="rounded-xl h-[600px]">
        <img
          src={brand?.brandSliders[0]?.brandSliderImg}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={brand?.brandSliders[1]?.brandSliderImg}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={brand?.brandSliders[2]?.brandSliderImg}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10">
        {filterdata?.length ? (
          filterdata.map((cart) => (
            <CartDetails key={cart.id} cart={cart}></CartDetails>
          ))
        ) : (
          
          <div >
            <h1 className="text-center text-3xl"> no data availavile</h1>
            <img className="w-full" src="https://i.postimg.cc/QxVnTDCY/download-5.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
