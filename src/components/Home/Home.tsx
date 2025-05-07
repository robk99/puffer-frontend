import Faq from '../Faq/Faq';
import { faqHomeData } from '../Faq/Faq.data';

const Home = () => {
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
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                <Faq faqData={faqHomeData} />
            </div>
        </div>
    );
};

export default Home;
