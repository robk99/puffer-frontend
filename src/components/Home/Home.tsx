import React, { useState } from 'react';
import styles from './Home.module.css';

const faqData = [
    {
        question: 'What is Puffer?',
        answer: 'Puffer is a DeFi protocol that enables yield optimizations across Ethereum, with an emphasis on security and capital efficiency. The protocol generates yield for users by automatically selecting the best strategies across top DeFi protocols.',
    },
    {
        question: 'How does Puffer work?',
        answer: 'Puffer aggregates liquidity from users and deploys it to generate yield via established DeFi protocols. Our smart contracts automatically allocate funds to achieve optimal returns while maintaining strict security standards.',
    },
    {
        question: 'Are Puffer smart contracts audited?',
        answer: "Yes, Puffer's smart contracts have undergone rigorous security audits by leading firms in the blockchain industry to ensure the highest level of security and reliability for our users.",
    },
    {
        question: 'What are Puffer Points?',
        answer: 'Puffer Points are earned by users who deposit assets into Puffer vaults. These points represent your contribution to the protocol and may be eligible for various benefits in the future.',
    },
    {
        question: 'What fees does Puffer charge?',
        answer: 'Puffer charges a performance fee on the yield generated, but there are no deposit or withdrawal fees. This aligns our interests with users as we only earn when our strategies perform well.',
    },
];

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="border-b border-gray-700 py-4">
            <button className="flex justify-between items-center w-full text-left" onClick={toggle}>
                <h3 className="text-lg font-medium text-white">{question}</h3>
                <svg
                    className={`w-5 h-5 transform transition-transform ${
                        isOpen ? 'rotate-180' : ''
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
            {isOpen && (
                <div className="mt-2 text-gray-300">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const Home: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Hero Logo */}
            <div className="flex justify-center mb-12">
                <img src="/puffer-logo-only-white.svg" alt="Puffer" className="w-64 h-64" />
            </div>

            {/* Hero Text */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Optimize your DeFi yield with Puffer</h1>
                <p className="text-xl text-gray-300">
                    The most capital-efficient way to earn yield across Ethereum
                </p>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="rounded-lg bg-surface p-6">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
