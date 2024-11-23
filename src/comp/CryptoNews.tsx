import React, { useState } from 'react';

type ReviewCardProps = {
  name: string;
  rating: number;
  reviewText: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, reviewText }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg">
      <div className="flex items-center mb-4">
        <div className="text-yellow-500 text-lg">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{reviewText}</p>
      <div className="border-t border-gray-300 pt-4">
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Chinedu Cynthia',
      rating: 4,
      reviewText: 'Beauty and Sleek is my go to place for affordable luxury hairs. I will always recommend them for those looking to spend less for more.',
    },
    {
      name: 'Paul Okeke',
      rating: 5,
      reviewText: 'I bought my girlfriend her dream hair from Beauty and Sleek, I was impressed with their packaging and fair pricing.',
    },
    {
      name: 'Aisha Mohammed',
      rating: 3,
      reviewText: 'I ordered my first luxury hair from them and i will totally happy I decided to try them.',
    },
    {
      name: 'Sarah Maduka',
      rating: 4,
      reviewText: 'Beauty N Sleek is a reliable Seller.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 py-10">
      <h3 className="text-xl font-semibold text-gray-600">Client Review</h3>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Client Say</h2>
      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="flex flex-col md:flex-row gap-3">
          {visibleReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
