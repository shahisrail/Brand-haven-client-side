import React from 'react';

const ServiceDetails = ({ brand }) => {
  const { title, imageUrl, description } = brand;
  return (
    <div className="card p-5    bg-base-100 shadow-xl">
        <h2 className="card-title">{title}</h2>
        <p> {description} </p>
      <figure className='mt-5'>
        <img className=' md:h-[300px] w-full' src={imageUrl} alt="Shoes" />
      </figure>
    </div>
  );
};

export default ServiceDetails;