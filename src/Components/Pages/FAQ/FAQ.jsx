import React, { useState } from 'react';

const FAQ = () => {
  // সমস্ত প্রশ্ন এবং উত্তর একটি array of objects-এর মধ্যে সংরক্ষণ করা হয়েছে।
  const faqItems = [
    {
      question: "আমি কিভাবে যুক্তরাষ্ট্রে এমএস করার জন্য সেরা কোর্স খুঁজে পাবো?",
      answer: "যুক্তরাষ্ট্রে এমএস করার জন্য সেরা কোর্স খুঁজে পেতে, আপনার আগ্রহ, কর্মজীবনের লক্ষ্য এবং প্রতিটি কোর্সের পাঠ্যক্রম নিয়ে গবেষণা করা উচিত। আপনি বিভিন্ন বিশ্ববিদ্যালয়ের ওয়েবসাইট, ফোরাম এবং প্রাক্তন শিক্ষার্থীদের সাথে কথা বলে তথ্য সংগ্রহ করতে পারেন।"
    },
    {
      question: "যুক্তরাষ্ট্রে এমএস করার জন্য সেরা বিশ্ববিদ্যালয়গুলো কী কী?",
      answer: "যুক্তরাষ্ট্রে এমএস করার জন্য সেরা বিশ্ববিদ্যালয় নির্ভর করে আপনার পছন্দের বিষয় এবং আপনার একাডেমিক রেকর্ডের উপর। স্ট্যানফোর্ড, এমআইটি, ক্যালিফোর্নিয়া ইনস্টিটিউট অফ টেকনোলজি, এবং হার্ভার্ড সাধারণত বিভিন্ন র্যাঙ্কিংয়ে শীর্ষস্থানীয় থাকে। তবে, আপনার নির্দিষ্ট বিষয়ের জন্য সেরা বিশ্ববিদ্যালয় খুঁজে বের করতে গবেষণা করা গুরুত্বপূর্ণ।"
    },
    {
      question: "যুক্তরাষ্ট্রে দুই বছরের এমএস প্রোগ্রামের মোট খরচ কত?",
      answer: "যুক্তরাষ্ট্রে দুই বছরের এমএস প্রোগ্রামের মোট খরচ বিশ্ববিদ্যালয়, অবস্থান এবং আপনার জীবনযাত্রার ওপর নির্ভর করে। এটি সাধারণত $60,000 থেকে $1,20,000 পর্যন্ত হতে পারে। এর মধ্যে টিউশন ফি, আবাসন, খাবার, স্বাস্থ্য বীমা এবং অন্যান্য ব্যক্তিগত খরচ অন্তর্ভুক্ত।"
    },
    {
      question: "যুক্তরাষ্ট্রে ডেটা সায়েন্সে এমএস করার খরচ কত?",
      answer: "যুক্তরাষ্ট্রে ডেটা সায়েন্সে এমএস করার খরচ বিশ্ববিদ্যালয় ভেদে ভিন্ন হয়। এটি সাধারণত প্রতি বছর $30,000 থেকে $60,000 পর্যন্ত হতে পারে। মোট খরচের জন্য দুই বছরের টিউশন ফি এবং জীবনযাত্রার খরচ যোগ করতে হবে।"
    },
    {
      question: "যুক্তরাষ্ট্রে কি এক বছরের মাস্টার্স প্রোগ্রাম রয়েছে?",
      answer: "হ্যাঁ, যুক্তরাষ্ট্রে অনেক বিশ্ববিদ্যালয় এক বছরের মাস্টার্স প্রোগ্রাম অফার করে। এই প্রোগ্রামগুলো সাধারণত নির্দিষ্ট কিছু পেশাগত বা একাডেমিক ক্ষেত্রে ফোকাস করে থাকে।"
    }
  ];

  // কোন আইটেমটি খোলা আছে তা ট্র্যাক করার জন্য state
  const [openIndex, setOpenIndex] = useState(null);

  // আইটেম টগল করার জন্য ফাংশন
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold my-8 text-gray-800">বেশি জিজ্ঞাসিত প্রশ্ন</h2>
      <div className=" rounded-lg">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="font-semibold text-lg text-gray-700">{item.question}</span>
              <svg
                className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-0 text-gray-600 transition-all duration-300 ease-in-out">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



export default FAQ;