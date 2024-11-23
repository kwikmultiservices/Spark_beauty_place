import React, { useEffect, useState } from 'react';
import { getApplication } from '../Services/GetUser.service';
import { Applicationdata } from '../Services/interface';

const Hero: React.FC = () => {
  const [Application, setapplication] = useState<Applicationdata>()
  useEffect(() => {
     getApplication(null, (postData: any) => {
      setapplication(postData)
   
    });
  }, [])

  return (
    <section className="flex items-center justify-between flex-col md:flex-row px-3 md:px-8 py-12  md:h-[70vh] bg-[#D6CDC680]">
      <div className="text-section md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Beauty N Sleek</h2>
        <p className="mt-4 text-lg text-gray-600  text italic">Transform Your Look. Elevate Your Style. Today!</p>
        <button  className="mt-6 px-6 py-3 bg-primary border border-black text-black font-semibold rounded-lg hover:bg-opacity-90">
          Shop Now
        </button>
      </div>
      <div className="image-section md:w-1/2 flex justify-end relative">
        <div className="flex space-x-4">
          <img src={Application?.landingPageImage} alt="Main" className=" h-[65vh] md:h-[70vh] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
