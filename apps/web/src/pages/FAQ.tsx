import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I have my windows cleaned?',
    answer: 'We recommend every 4 or 8 weeks to maintain the best appearance and prevent dirt buildup. Most residential customers choose our 4-weekly cycle.'
  },
  {
    question: 'Do I need to be home?',
    answer: 'No. As long as we can access the rear of your property (e.g. unlocked gate), we can clean your windows while you are out. We will post a slip or send an email invoice once done.'
  },
  {
    question: 'What is pure water cleaning?',
    answer: 'We use purified, de-ionised water pumped through extendable carbon-fibre poles. This removes all impurities from water so it dries naturally without spots or streaks. It allows us to clean frames and sills effectively and reach high windows safely from the ground.'
  },
  {
    question: 'Do you clean in the rain?',
    answer: 'Yes, rainwater is relatively pure and does not make windows dirty (dirt comes from dust/pollen mixing with rain). Our pure water system works perfectly in light to moderate rain. If the weather is dangerous (high winds/storms), we will reschedule.'
  },
  {
    question: 'How do I pay?',
    answer: 'We accept Bank Transfer, Direct Debit (via GoCardless), or online card payments via our customer portal. We discourage cash collection to keep our prices low and efficiency high.'
  },
  {
    question: 'Are you insured?',
    answer: 'Yes, we have full Public Liability Insurance covering us for up to £5 million. We can provide proof upon request.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-secondary-600">
            Answers to common questions about our service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-secondary-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-secondary-50 flex justify-between items-center transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-secondary-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-secondary-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary-50 text-secondary-700 border-t border-secondary-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
