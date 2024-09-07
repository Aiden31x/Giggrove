import React from "react";

const CardM = ({ job, domain, subdomain, bidvalue, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-auto mb-8">
      {/* Flex container for job, domain, subdomain, and bidvalue */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="flex flex-col sm:flex-row items-start">
          <h3 className="text-2xl font-semibold">{job}</h3>
          <div className="flex items-center ml-12 space-x-4">
            <h3 className="text-xl font-normal">{domain}</h3>
            <h3 className="text-xl font-light">{subdomain}</h3>
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-xl font-normal">{bidvalue}</h3>
        </div>
      </div>
      <div className="px-6">
        <div className="h-px bg-border" />
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
        View Details
      </a>
    </div>
  );
};

export default CardM;
