import React, { useEffect, useState } from 'react';
import universities from '../../../data/universities.json';

const UniversityRanking = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    // Simulate fetching from JSON file
    setRankingData(universities);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">University Rankings</h1>
      {rankingData.map((university) => (
        <div key={university.id} className="mb-10 border p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={university.logo}
              alt={`${university.university_name} logo`}
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-semibold">{university.university_name}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(university.ranking).map(([key, value]) => (
              <div
                key={key}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm font-medium text-gray-600">
                  {key.replace(/_/g, ' ').toUpperCase()}
                </p>
                <p className="text-xl font-bold text-blue-600">#{value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniversityRanking;
