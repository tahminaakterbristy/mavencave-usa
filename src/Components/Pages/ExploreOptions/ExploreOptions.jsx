import React, { useState } from 'react';

const ExploreOptions = () => {
  const [activeTab, setActiveTab] = useState('courses'); // 'courses' ট্যাবটিকে ডিফল্ট হিসেবে সক্রিয় রাখা হয়েছে।

  const courses = [
    "হিসাববিজ্ঞান",
    "মহাকাশ প্রকৌশল",
    "প্রাণী ও পশুচিকিৎসা শিক্ষা",
    "নৃতত্ত্ব",
    "স্বাতন্ত্রবিদ্যা",
    "কৃত্রিম বুদ্ধিমত্তা / মেশিন লার্নিং",
    "শিল্প / চারুকলা",
    "অটোমোটিভ প্রকৌশল",
    "ব্যাংকিং ও ফাইন্যান্স",
    "আচরণগত বিজ্ঞান",
    "বায়োকেমিস্ট্রি",
    "জীবপ্রযুক্তি প্রকৌশল",
    "জীববিজ্ঞান",
    "বায়োমেডিকেল প্রকৌশল",
    "স্থাপত্যবিদ্যা"
  ];

  return (
    <div className="w-full bg-white  rounded-lg p-6">
      {/* প্রধান শিরোনাম */}
      <div className=" pb-4 mb-4">
        <h2 className="text-xl text-gray-800 font-bold">আরও স্টাডি অপশন এক্সপ্লোর করুন</h2>
      </div>

      {/* ট্যাব নেভিগেশন */}
      <div className="mb-6">
        <div className="flex">
          {/* কোর্সসমূহ ট্যাব */}
          <button
            className={`relative pb-3 px-4 font-semibold text-base focus:outline-none transition-colors ${
              activeTab === 'courses' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('courses')}
          >
            কোর্সসমূহ
            {/* নীল আন্ডারলাইন */}
            {activeTab === 'courses' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
            )}
          </button>
          
        
          {/*
          <button
            className={`relative pb-3 px-4 font-semibold text-base focus:outline-none transition-colors ${
              activeTab === 'programs' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('programs')}
          >
            প্রোগ্রামসমূহ
            {activeTab === 'programs' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
            )}
          </button>
          */}
        </div>
      </div>

      {/* কোর্সের তালিকা */}
      {activeTab === 'courses' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-4 text-gray-700">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center text-sm cursor-pointer hover:text-blue-600 transition-colors">
              <span>{course}</span>
            </div>
          ))}
          
          {/* "আরও দেখুন" বাটন */}
          <div className="flex items-center text-sm font-semibold text-blue-600 cursor-pointer">
            <span>আরও দেখুন</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreOptions;