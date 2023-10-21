import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCard from "./BrandCard";
import ServiceDetails from "../Service/ServiceDetails";
import Service from "../Service/Service";
import AboutUs from "../AboutUs/AboutUs";

const HOme = () => {
  const brandCard = useLoaderData()
  console.log(brandCard);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brandCard.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
      <Service></Service>
      <h1 className="text-3xl text-center font-semibold">About us</h1>
      <AboutUs></AboutUs>
    </div>
  );
};

export default HOme;