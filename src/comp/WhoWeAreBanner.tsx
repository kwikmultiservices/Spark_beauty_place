import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 md:p-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">Who We Are! What We Are, What We Do?</h2>
        <p className="text-gray-600 mb-6">
          Lectus Magna Fringilla Urna Porttitor Rhoncus Dolor. Nam Libero Justo Laoreet Sit Amet Cursus. Blandit Volutpat Maecenas Volutpat Blandit Aliquam Etiam. Diam Volutpat Commodo Sed Egestas Egestas Fringilla Phasellus Faucibus Scelerisque.
        </p>
        <ul className="mb-6">
          <li className="flex items-start mb-2">
            <span className="text-xl text-black-600 mr-2">⭐</span>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="flex items-start mb-2">
            <span className="text-xl text-black-600 mr-2">⭐</span>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
        <button className="bg-brown-600 text-white py-2 px-4 rounded hover:bg-brown-700 transition-all">
          View More
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0" >
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
