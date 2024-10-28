import React, { useEffect, useState } from 'react';
import { getApplication } from '../Services/GetUser.service';
import { Applicationdata } from '../Services/interface';

const StoreBanner: React.FC = () => {
  const [Application, setapplication] = useState<Applicationdata>()
  useEffect(() => {
     getApplication(null, (postData: any) => {
      setapplication(postData)
   
    });
  }, [])

  return (
    <section className="flex items-center justify-between flex-col md:flex-row px-3 md:px-8 py-12  md:h-[60vh] bg-[#D6CDC680]">
      <div className="text-section md:w-1/2">
       
        <p className="mt-4 text-lg text-gray-600  text italic">Hair thats speaks Confidence!</p>
        <button  className="mt-6 px-6 py-3 bg-primary border border-black text-black font-semibold rounded-lg hover:bg-opacity-90">
          Search Categories
        </button>
      </div>
      <div className="image-section md:w-1/2 flex justify-end relative">
        <div className="flex space-x-4">
          <img src="/image/c3.png" alt="Main" className=" h-[40vh] md:h-[50vh] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default StoreBanner;
