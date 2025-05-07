import { useState } from 'react';
import { FAQItemProps } from './Faq.type';

const Faq = ({ faqData }: { faqData: FAQItemProps[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="rounded-lg bg-surface p-6">
            {faqData.map((faq, index) => (
                <div className="border-b border-gray-700 py-4">
                    <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={toggleFAQ.bind(null, index)}
                    >
                        <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${
                                openIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {openIndex === index && (
                        <div className="mt-2 text-gray-300">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;
