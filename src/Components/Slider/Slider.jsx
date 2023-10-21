import { Carousel } from "@material-tailwind/react";
 
export function CarouselTransition({ brand }) {
  const { brandSliders } = brand;
 
  console.log(brandSliders);
  return (
    <>
      <Carousel transition={{ duration: 2 }} className="rounded-xl h-[600px]">
        <img
          src={brandSliders[0].brandSliderImg}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={brandSliders[1].brandSliderImg}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={brandSliders[2].brandSliderImg}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      
    </>
  );
}