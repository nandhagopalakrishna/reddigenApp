import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  questions: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "About Reddigen",
    questions: [
      {
        question: "What is Reddigen, and how does it work?",
        answer: "Reddigen is an AI-powered Reddit growth tool that crafts viral posts, boosts visibility through engagement pools for more upvotes and interactions, and automates lead engagement in comments to drive sales - all without any effort on your part."
      },
      {
        question: "Who should use Reddigen?",
        answer: "Reddigen is perfect for marketers, business owners, content creators, and entrepreneurs who want to boost visibility, increase sales, or build their brand on Reddit."
      },
      {
        question: "How can Reddigen help me grow my business on Reddit?",
        answer: "Reddigen helps by generating engaging posts, driving visibility through engagement pools, automating lead interactions, and offering keyword tools to reach your target audience—making it easy to scale your Reddit presence."
      }
    ]
  },
  {
    title: "Technical Questions",
    questions: [
      {
        question: "How does the AI generate viral posts?",
        answer: "Reddigen’s AI learns from over 50,000 viral Reddit posts to create optimized content that captures attention and drives engagement."
      },
      {
        question: "What are engagement pools and how do they work?",
        answer: "Engagement pools are groups of Reddit users who boost your post’s visibility by driving upvotes and interactions, helping your content trend faster."
      },
      {
        question: "How does the comment automation system work?",
        answer: "Reddigen’s comment automation scans Reddit 24/7, engaging with leads and converting them into customers—all automatically."
      }
    ]
  }
];

interface FAQContextType {
  openFAQ: string | null;
  setOpenFAQ: (faq: string | null) => void;
}

const FAQContext = React.createContext<FAQContextType>({
  openFAQ: null,
  setOpenFAQ: () => {},
});

const useFAQContext = () => {
  const context = React.useContext(FAQContext);
  if (!context) {
    throw new Error('useFAQContext must be used within a FAQProvider');
  }
  return context;
};

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setOpenFAQ, openFAQ } = useFAQContext();

  const toggleFAQ = () => {
    if (isOpen) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(item.question);
    }
  };

  useEffect(() => {
    setIsOpen(openFAQ === item.question);
  }, [openFAQ, item.question]);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={toggleFAQ}
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [activeSection, setActiveSection] = useState("About Reddigen");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  return (
    <section className="bg-black text-white py-24" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about Reddigen</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-4 mb-12">
          {faqData.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section.title)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeSection === section.title
                  ? "bg-[#ff4500] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {section.title}
            </button>
          ))}
          </div>
        </AnimatedSection>

        <FAQContext.Provider value={{ openFAQ, setOpenFAQ }}>
        <AnimatedSection delay={0.4}>
          <div>
          {faqData
            .filter((section) => section.title === activeSection)
            .map((section) => (
              <div key={section.title}>
                {section.questions.map((item, index) => (
                  <FAQItem key={index} item={item} />
                ))}
              </div>
            ))}
          </div>
        </AnimatedSection>
        </FAQContext.Provider>
      </div>
    </section>
  );
}