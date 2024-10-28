// components/Reviews.tsx
import React from 'react';

type ReviewCardProps = {
  name: string;
  occupation: string;
  rating: number;
  reviewText: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, occupation, rating, reviewText }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm">
      <div className="flex items-center mb-4">
        <div className="text-yellow-500 text-lg">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{reviewText}</p>
      <div className="border-t border-gray-300 pt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{occupation}</p>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10">
      <h3 className="text-xl font-semibold text-gray-600">Client Review</h3>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Client Say</h2>
      <div className="flex flex-col md:flex-row  gap-3 space-x-4">
        <ReviewCard
          name="Maryann Roosevelt"
          occupation="Accountant"
          rating={4}
          reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        />
        <ReviewCard
          name="Maryann Roosevelt"
          occupation="Accountant"
          rating={4}
          reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        />
      </div>
    </div>
  );
};

export default Reviews;
