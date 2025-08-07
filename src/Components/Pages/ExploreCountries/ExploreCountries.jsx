// src/components/StudyAbroadCards.jsx
import React from 'react';

const StudyAbroadCard = ({ title, providerText, universityCount, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex-grow m-2 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{providerText}</p>
        <p className="text-lg font-bold mb-4">{universityCount}</p>
      </div>
      <a href={link} className="self-end bg-blue-600 text-white rounded-full p-2 transition-transform duration-200 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

const ExploreCountries = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        অন্যান্য দেশে অনুরূপ কোর্সসমূহ এক্সপ্লোর করুন
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4">
        <StudyAbroadCard
          title="অস্ট্রেলিয়ায় মাস্টার্স"
          providerText="প্রদানকারী প্রতিষ্ঠান"
          universityCount="৯০টি বিশ্ববিদ্যালয়"
          link="#"
        />
        <StudyAbroadCard
          title="অস্ট্রেলিয়ায় মাস্টার্স"
          providerText="প্রদানকারী প্রতিষ্ঠান"
          universityCount="৯০টি বিশ্ববিদ্যালয়"
          link="#"
        />
        <StudyAbroadCard
          title="যুক্তরাজ্যে মাস্টার্স"
          providerText="প্রদানকারী প্রতিষ্ঠান"
          universityCount="২৩২টি বিশ্ববিদ্যালয়"
          link="#"
        />
      </div>
    </div>
  );
};

export default ExploreCountries;