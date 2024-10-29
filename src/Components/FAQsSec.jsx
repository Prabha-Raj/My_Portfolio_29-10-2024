import { useState } from "react";

export default function FAQsSec() {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all items. For more details, please contact our support team.",
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping usually takes 5-7 business days, but it can vary depending on your location.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email with the tracking information.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping. Please refer to our shipping policy for more details.",
        },
    ];

    return (
        <div className="w-full flex items-center justify-around bg-slate-50 py-10 my-8 max-md:flex-col max-md:gap-16">
            <div className="left w-2/5 max-md:w-full max-md:px-16">
                <h2 className="text-2xl font-bold text-center mb-4 max-md:mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
            <div className="right w-2/5">
                <img src="https://harnishdesign.net/demo/react/callum/demo/images/faq.png" alt="faq_image" />
            </div>
        </div>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center py-2 text-lg font-semibold text-gray-800"
            >
                {question}
                <span className="text-xl">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
        </div>
    );
}
