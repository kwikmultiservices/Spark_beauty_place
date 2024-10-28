import React from 'react';
import { CiCircleInfo } from "react-icons/ci";

const OurStorySection: React.FC = () => {
  return (
    <div className="container mx-auto p-2 md:p-6 rounded-md">
      {/* Top Stats Section */}
      <div className="flex justify-around mb-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">5</h2>
          <p className="text-lg text-gray-500">Branch</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-lg text-gray-500">Hair stocked</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">3k+</h2>
          <p className="text-lg text-gray-500">Satisfied Customer</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="relative gap-5 flex flex-col lg:flex-row items-start  md:p-8 ">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/image/c.png" // replace with actual image src
            alt="Our Story"
            className="rounded-xl w-full h-[70vh]  shadow-lg"
          />
        </div>

        {/* Story Text */}
        <div className="relative  text-left text-white p-8 bg-[#95725A] h-[70vh] rounded-md w-full">
          <h3 className="text-3xl font-bold mb-4">Our Story</h3>
          <p className="text-sm mb-6">
            We believe that hair is more than just a part of your appearance—it's a statement, an expression of your personality, and a symbol of your confidence. Our journey began with a simple mission: to provide everyone with the opportunity to own luxurious, high-quality hair that feels natural, looks flawless, and elevates their beauty routine.
          </p>

          {/* List of Features */}
          <ul className="space-y-4">
            <li className="flex items-center text-[0.9rem]">
              <CiCircleInfo className="text-xl mr-2" />
              Double drawn hairs
            </li>
            <li className="flex items-center text-[0.9rem]">
              <CiCircleInfo className="text-xl mr-2" />
              Double drawn hairs
            </li>
            <li className="flex items-center text-[0.9rem]">
              <CiCircleInfo className="text-xl mr-2" />
              Double drawn hairs
            </li>
          </ul>

          <div className="mt-6">
            <p className="font-semibold">Founder</p>
            <p className="">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
