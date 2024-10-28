import React from 'react';

const WhoWeAreBanner: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] w-full flex justify-center items-center p-5 flex-col"
      style={{
        backgroundImage: "url('/image/c5.jpeg')", // Replace with your image path
      }}
    >
      {/* Top-left text */}
      <div className="">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
         Contact Us
        </h1>
      </div>

      {/* Bottom-right text */}
      <h1 className=" text-[1.1rem] font-bold text-black">
          Home / <span className='text-orange-500'>Contact</span>
        </h1>
    </div>
  );
};

export default WhoWeAreBanner;
