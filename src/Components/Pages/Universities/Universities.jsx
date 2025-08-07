import React, { useEffect, useState } from "react";

import universitiesData from "../../../data/universities.json";

const Universities = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [universities, setUniversities] = useState([]);

  // Multiple filter states
  const [selectedDegrees, setSelectedDegrees] = useState([
    "মাস্টার্স",
    "পিএইচডি",
    "পিজি ডিপ্লোমা",
    "ইউজি ডিপ্লোমা",
    "পিজি+ইউজি ডিপ্লোমা",
  ]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedFees, setSelectedFees] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  
  const itemsPerPage = 10;

  // Unique filter values from data
  const degreeOptions = ["মাস্টার্স","পিএইচডি", "পিজি ডিপ্লোমা", "ইউজি ডিপ্লোমা", "পিজি+ইউজি ডিপ্লোমা"];
  const locationOptions = [...new Set(universitiesData.map((uni) => uni.location))];
  const durationOptions = [...new Set(universitiesData.map((uni) => uni.course_duration))];
  const feeOptions = [...new Set(universitiesData.map((uni) => uni.admission_fee))];
  const courseOptions = [...new Set(universitiesData.flatMap((uni) => uni.best_courses))];

  // Filter logic
  useEffect(() => {
    let filtered = universitiesData.filter((uni) =>
      selectedDegrees.includes(uni.degree)
    );

    if (selectedLocations.length > 0) {
      filtered = filtered.filter((uni) => selectedLocations.includes(uni.location));
    }

    if (selectedDurations.length > 0) {
      filtered = filtered.filter((uni) => selectedDurations.includes(uni.course_duration));
    }

    if (selectedFees.length > 0) {
      filtered = filtered.filter((uni) => selectedFees.includes(uni.admission_fee));
    }

    if (selectedCourses.length > 0) {
      filtered = filtered.filter((uni) =>
        uni.best_courses.some((course) => selectedCourses.includes(course))
      );
    }

    const sorted = filtered.sort((a, b) =>
      sortOrder === "asc" ? a.qs_rank - b.qs_rank : b.qs_rank - a.qs_rank
    );

    setUniversities(sorted);
    setCurrentPage(1);
  }, [sortOrder, selectedDegrees, selectedLocations, selectedDurations, selectedFees, selectedCourses]);

  // Checkbox helper
  const toggleCheckbox = (value, selectedList, setSelectedList) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((v) => v !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  // Pagination
  const totalPages = Math.ceil(universities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = universities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className=" px-32 py-16">
         <h1 className="text-2xl text-blue-600 pb-4">যুক্তরাষ্ট্রে মাস্টার্স: কলেজ ,বিশ্ববিদ্যালয়,ক্রমসূচি এবং ফি(২০২৫)</h1>
        <p> বিশ্বের শীর্ষস্থানীয় কিছু বিশ্ববিদ্যালয় যুক্তরাষ্ট্রে অবস্থিত এবং এসব প্রতিষ্ঠান বিস্তত পরিসরে বিভিন্ন বিষয়ে মাস্টার্স ডিগ্রি প্রদান করে যেমন...</p> 
      </div>
  
   
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-5 gap-6">
       
               
        
      {/* LEFT SIDEBAR */}
      <div className="md:col-span-1 space-y-6">
        {/* Degree Filter */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-2">Filter by Degree</h2>
          {degreeOptions.map((degree) => (
            <label key={degree} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedDegrees.includes(degree)}
                onChange={() => toggleCheckbox(degree, selectedDegrees, setSelectedDegrees)}
              />
              {degree}
            </label>
          ))}
        </div>

        {/* Dynamic Multi-checkbox Dropdowns */}
        {[ 
          { label: "Location", options: locationOptions, selected: selectedLocations, setSelected: setSelectedLocations },
          { label: "Course Duration", options: durationOptions, selected: selectedDurations, setSelected: setSelectedDurations },
          { label: "Admission Fee", options: feeOptions, selected: selectedFees, setSelected: setSelectedFees },
          { label: "Best Courses", options: courseOptions, selected: selectedCourses, setSelected: setSelectedCourses },
        ].map(({ label, options, selected, setSelected }) => (
          <details key={label} className="bg-white p-4 shadow rounded">
            <summary className="cursor-pointer font-semibold mb-2">{label}</summary>
            <div className="mt-2 space-y-1 max-h-40 overflow-y-auto">
              {options.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selected.includes(option)}
                    onChange={() => toggleCheckbox(option, selected, setSelected)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </details>
        ))}
      </div>

      {/* RIGHT SIDE - Results */}
      <div className="md:col-span-4">
       
        {/* Header & Sort */}
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
          <h1 className="text-xl font-bold">Total Universities: {universities.length}</h1>
          <select
            className="border px-4 py-2 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">QS Rank: Low to High</option>
            <option value="desc">QS Rank: High to Low</option>
          </select>
        </div>

        {/* University Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  {currentItems.map((univ) => (
    <div key={univ.id} className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-start space-x-4 mb-12">
        <img
          src={univ.logo || "https://via.placeholder.com/80"}
          alt={univ.university_name}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h2 className="text-lg font-bold">
            {univ.university_name}
          </h2>
          <div className="flex items-center text-gray-600 mt-1">
          
            <span>{univ.location}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center  py-3">
        <div>
          <div className="text-sm text-gray-500">কিউএস র‍্যাংক</div>
          <div className="flex items-center justify-center mt-1 text-2xl font-bold text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                clipRule="evenodd"
              />
            </svg>
            {univ.qs_rank}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">টিউশন ফি</div>
          <div className="mt-1 text-lg font-bold text-gray-800">
            {univ.admission_fee}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500">ভর্তি প্রয়োজনীয়তা</div>
          <div className="mt-1 text-lg font-bold text-gray-800">
            IELTS: {univ.ielts_score}
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">
          আরও জানুন
        </button>
        <button className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          যোগ্যতা যাচাই করুন
        </button>
      </div>
    </div>
  ))}
</div>
       
        {/* Pagination */}
<div className="flex justify-center mt-6 items-center gap-2">
  {/* পূর্ববর্তী বোতাম */}
  <button
    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
    className={`px-4 py-2 border rounded ${
      currentPage === 1 ? "bg-white text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
    }`}
    disabled={currentPage === 1}
  >
    পূর্ববর্তী
  </button>

  {/* Page numbers */}
  {[...Array(totalPages).keys()].map((page) => {
    const pageNumber = page + 1;
    return (
      <button
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        className={`px-3 py-2 rounded border ${
          currentPage === pageNumber
            ? "bg-blue-600 text-white font-semibold"
            : "bg-white text-gray-800 hover:bg-blue-100"
        }`}
      >
        {pageNumber}
      </button>
    );
  })}

  {/* পরবর্তী বোতাম */}
  <button
    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
    className={`px-4 py-2 border rounded ${
      currentPage === totalPages ? "bg-gray-300 text-gray-800 cursor-not-allowed" : "bg-white text-gray-800 hover:bg-blue-600"
    }`}
    disabled={currentPage === totalPages}
  >
    পরবর্তী
  </button>
</div>
      </div>
    </div>
     </div>
  );
};

export default Universities;
