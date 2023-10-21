import React from "react";
import ServiceDetails from "./ServiceDetails";

const ServiceCard = ({ title, description }) => (
  <div className="col-md-4">
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const Service = () => {
 const services = [
   {
     title: "Shipping & Delivery",
     description:
       "Fast and reliable shipping. Real-time tracking. Secure packaging.",
     imageUrl:
       "https://i.postimg.cc/8zYS8svG/markus-spiske-BPxk-U4u-Pq6-Y-unsplash.jpg",
   },
   {
     title: "Customer Support",
     description:
       "24/7 customer support. Friendly and knowledgeable team. Hassle-free returns.",
     imageUrl:
       "https://i.postimg.cc/WzcZ5286/annie-spratt-Qckxruozj-Rg-unsplash.jpg",
   },
   {
     title: "Product Quality",
     description:
       "High-quality products. Rigorous quality checks. Customer satisfaction guarantee.",
     imageUrl:
       "https://i.postimg.cc/NMsqmTq1/sai-charan-pasupuleti-e-S4w-U-Ygfhw-unsplash.jpg",
   },
   {
     title: "Payment Options",
     description:
       "Secure payment methods. Multiple payment options. Easy refunds and returns.",
     imageUrl: "https://i.postimg.cc/htcHHTvN/5438079808.png",
   },
   {
     title: "Special Offers",
     description:
       "Regular discounts and promotions. Loyalty programs. Stay updated with our newsletter.",
     imageUrl: "https://i.postimg.cc/cC1npDqr/download-4.png",
   },
   {
     title: "Custom Orders",
     description:
       "Personalized products. Bulk and custom orders. Contact our sales team.",
     imageUrl: "https://i.postimg.cc/XY24LQLs/images-7.png",
   },
   {
     title: "Contact Us",
     description:
       "Need assistance? Contact us. Our team is ready to help. Reach us by email or phone.",
     imageUrl: "https://i.postimg.cc/DfdNTmGG/images-8.png",
   },
 ];


  return (
    <div className="my-5 container mx-auto ">
      <h2 className="text-center mb-4 text-3xl">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
        {services.map((brand) => (
          <ServiceDetails key={brand.id} brand={brand}></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Service;
