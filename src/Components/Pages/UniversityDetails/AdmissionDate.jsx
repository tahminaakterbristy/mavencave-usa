import React from 'react';

const AdmissionDate = ({ dates }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">ভর্তি গ্রহণ ও আবেদন শেষ তারিখ</h2>
        <a href="#" className="text-blue-500 hover:underline flex items-center text-sm">
          সব দেখুন <span className="ml-1 text-xs text-blue-500">&#x203A;</span>
        </a>
      </div>

      <div className="space-y-4 mb-6">
        {dates?.application_end_dates?.map((application_end_dates, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
            <span className="text-base font-medium text-gray-700">{application_end_dates}</span>
            <span className="bg-green-100 text-green-700 font-medium py-1 px-3 rounded-full text-xs">
              ভর্তি চলছে
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-white border-2 border-blue-500 text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-200">
          আপনার জন্য সেরা ইনটাকটি খুঁজুন
        </button>
      </div>
    </div>
  );
};

export default AdmissionDate;