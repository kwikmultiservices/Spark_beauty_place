import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 md:p-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-600 mb-6 pr-5 ">
          Here at Beauty N Sleek, quality and beauty come together! Being a top
          hair retailer, we are committed to offering the best, all-natural wigs
          and hair extensions to people who appreciate durability and style. We
          provide high-quality products made to accentuate your inherent beauty,
          whether you're a salon owner, stylist, or beauty enthusiast searching
          for the ideal hair solution. We take great satisfaction in obtaining
          the best hair from around the globe, having been founded with the goal
          of introducing remarkable hair products to the market. Our vast
          collection provides a broad range of affordable and luxury hairs.
        </p>
     
        <button className="bg-brown-600 text-white py-2 px-4 rounded hover:bg-brown-700 transition-all">
          View More
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="/image/c4.png"
          alt="Woman Portrait"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
