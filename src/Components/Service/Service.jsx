import React from "react";

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
    },
    {
      title: "Customer Support",
      description:
        "24/7 customer support. Friendly and knowledgeable team. Hassle-free returns.",
    },
    {
      title: "Product Quality",
      description:
        "High-quality products. Rigorous quality checks. Customer satisfaction guarantee.",
    },
    {
      title: "Payment Options",
      description:
        "Secure payment methods. Multiple payment options. Easy refunds and returns.",
    },
    {
      title: "Special Offers",
      description:
        "Regular discounts and promotions. Loyalty programs. Stay updated with our newsletter.",
    },
    {
      title: "Custom Orders",
      description:
        "Personalized products. Bulk and custom orders. Contact our sales team.",
    },
    {
      title: "Contact Us",
      description:
        "Need assistance? Contact us. Our team is ready to help. Reach us by email or phone.",
    },
  ];

  return (
   <div className="my-5 container mx-auto ">
  <h2 className="text-center mb-4">Our Services</h2>
  <div className="grid grid-cols-3 gap-3 ">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        description={service.description}
      />
    ))}
  </div>
</div>

  );
};

export default Service;
