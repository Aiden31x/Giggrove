import React from "react";

const Card = ({ job, domain, subdomain, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mx-auto mb-8">
      {/* Flex container for job, domain, and subdomain */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div>
          <h3 className="text-2xl font-semibold">{job}</h3>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{domain}</h3>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{subdomain}</h3>
        </div>
      </div>
      
      {/* Description below */}
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
};

export default Card;
