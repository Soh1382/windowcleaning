import { Star } from 'lucide-react';

// Mock data - will be replaced by API call
const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    date: '2 Oct 2023',
    rating: 5,
    text: 'Aquamarine have been cleaning our windows for 2 years now. Always polite, on time, and they do a fantastic job. The text reminder the night before is really helpful.',
    service: 'Residential'
  },
  {
    id: 2,
    name: 'Mike T.',
    date: '15 Sep 2023',
    rating: 5,
    text: 'Had my gutters cleared and soffits washed. The difference is amazing, the house looks brand new. Great price too.',
    service: 'Gutter Cleaning'
  },
  {
    id: 3,
    name: 'Emma W.',
    date: '28 Aug 2023',
    rating: 5,
    text: 'Professional, friendly and reliable. The pure water system really does maintain the clean for longer. Highly recommend.',
    service: 'Residential'
  },
  {
    id: 4,
    name: 'David R.',
    date: '10 Aug 2023',
    rating: 4,
    text: 'Good job overall. Missed a small spot on the back door but came back and fixed it immediately when I messaged. Great customer service.',
    service: 'Conservatory'
  }
];

const Reviews = () => {
  return (
    <div className="bg-white py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            See what our customers in Huddersfield are saying about us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {reviews.map((review) => (
             <div key={review.id} className="bg-secondary-50 p-6 rounded-xl shadow-sm border border-secondary-100">
               <div className="flex items-center mb-4">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <Star 
                       key={i} 
                       className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-secondary-300'}`} 
                     />
                   ))}
                 </div>
               </div>
               <p className="text-secondary-700 mb-6 italic">"{review.text}"</p>
               <div className="flex justify-between items-center text-sm text-secondary-500">
                 <div className="font-bold text-secondary-900">{review.name}</div>
                 <div>{review.date}</div>
               </div>
                <div className="mt-2 text-xs text-primary-600 font-medium uppercase tracking-wide">
                  {review.service}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
