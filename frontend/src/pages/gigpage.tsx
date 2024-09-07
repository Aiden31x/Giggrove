"use client";

export const Gigdesc = () => {
     return (
        <div className="p-8 bg-whote min-h-screen">
          {/* Job Heading */}
          <h1 className="text-4xl font-bold mb-4">Network Developer</h1>
          
          {/* Company Name */}
          <p className="text-xl mb-6">Company: Apple</p>
          
          {/* Partially Dividing Line */}
          <div className="relative mb-8">
            <hr className="border-t-2 border-gray-300 absolute w-full top-1/2 transform -translate-y-1/2" />
            <hr className="border-t-2 border-gray-300 w-3/4 absolute top-1/2 transform -translate-y-1/2 left-1/2" />
          </div>
          
          {/* Additional content can be added here */}
        </div>
      );
    };
    
    
