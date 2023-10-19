import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCard from "./BrandCard";

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
    </div>
  );
};

export default HOme;