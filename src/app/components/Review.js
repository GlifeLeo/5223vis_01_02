import React from "react";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 4.5,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt."
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    rating: 4.5,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    rating: 5,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    rating: 5,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion."
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    rating: 4.5,
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-500">★</span>
      ))}
      {halfStar && <span className="text-yellow-500">☆</span>}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">All Reviews ({reviews.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex items-center mb-2">
              <StarRating rating={review.rating} />
            </div>
            <h3 className="font-semibold">{review.name} <span className="text-green-500">✔</span></h3>
            <p className="text-gray-600 text-sm">Posted on {review.date}</p>
            <p className="mt-2 text-gray-800">{review.text}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Load More Reviews</button>
    </div>
  );
};

export default Reviews;