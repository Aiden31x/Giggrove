import React from "react";

const CardM = ({ job, domain, subdomain, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto mb-8">
      {/* Flex container for job, domain, and subdomain */}
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <div className="flex flex-col sm:flex-row items-end">
          <h3 className="text-2xl text-left font-semibold">{job}</h3>
          <h3 className="text-xl font-normal text-center ml-12">{domain}</h3>
        </div>
        <div className="text-right sm:text-left">
          <h3 className="text-xl font-normal">{subdomain}</h3>
        </div>
      </div>
      
      {/* Description below */}
      <p className="text-gray-700 text-base font-light mb-4">{description}</p>
      
      {/* Full Width Link Button */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block px-6 py-2 bg-bluey text-white font-medium rounded-md hover:bg-buttony transition"
      >
        Learn More
      </a>
    </div>
  );
};

export default CardM;
