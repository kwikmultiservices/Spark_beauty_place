// components/HairShowcase.tsx
import React from 'react';

const HairShowcase: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Upper Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="col-span-1 bg-brown-100 w-full bg-[#95725A] rounded-lg text-white p-6 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-bold mb-4">
            Ready for the Hair of Your Dreams? Shop Our Luxury Hair.
          </h2>
          <button className="border-white border text-brown-800 py-2 px-4 rounded-full font-semibold">
            Contact Us Now
          </button>
        </div>
        <div className="col-span-3">
          <img
            src="/image/c1.png"
            alt="Luxury Hair"
            className="w-full h-[34vh] object-cover rounded-lg"
          />
        
        </div>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-2 grid grid-cols-2 gap-4">
        
          <img
            src="/image/c2.png"
            alt="Hair Model 3"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="/image/c2.png"
            alt="Hair Model 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 bg-brown-100 bg-[#D6CDC6] text-white p-6 flex flex-col justify-center items-start">
          <h3 className="text-xl font-bold mb-2">Sign-UP to Our Newsletter for daily updates & trends</h3>
          <p className="text-lg border border-white">@babbly.ng</p>
        </div>
      </div>
    </div>
  );
};

export default HairShowcase;
