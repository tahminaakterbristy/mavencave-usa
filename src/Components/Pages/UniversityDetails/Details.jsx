import { useParams } from 'react-router-dom';
import universitiesData from '../../../data/universities.json';
import { FaGraduationCap } from 'react-icons/fa';
import TopCourses from './TopCourses';
import AdmissionDate from './AdmissionDate';

const Details = () => {
  const { id } = useParams();
  const university = universitiesData.find(u => u.qs_rank.toString() === id);

  if (!university) {
    return <div className="text-center p-8">University not found.</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-8 p-6">
      <div className="bg-blue-600 text-white rounded-md p-6 w-full sm:w-1/2">
        <h2 className="text-xl font-bold mb-2">গুরুত্বপূর্ণ দিক</h2>
        <p className="text-sm mb-4">যুক্তরাষ্ট্রে উচ্চশিক্ষা গ্রহণের মূল বিষয়গুলো এখানে দেওয়া হলো।</p>
        <div className="grid grid-cols-2 gap-y-4">
          <div>
            <p className="text-sm font-semibold">প্রতিষ্ঠিত</p>
            <p className="text-lg">{university.established_year}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">মোট শিক্ষার্থীর সংখ্যা</p>
            <p className="text-lg">{university.total_students}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">মোট আন্তর্জাতিক শিক্ষার্থী</p>
            <p className="text-lg">{university.total_international_students}</p>
          </div>
          <div>
            {/* Empty cell for alignment */}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-md p-6 w-full sm:w-1/2 text-center">
        <div className="flex justify-center">
          <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
        </div>
        <h3 className="text-xl font-bold text-blue-700 mb-2">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন</h3>
        <p className="text-sm text-gray-700 mb-4">আপনার লক্ষ্য অনুযায়ী সেরা বিশ্ববিদ্যালয়গুলো খুঁজে নিতে আমাদের বিনামূল্যে বাছাইকরণ টুল ব্যবহার করুন।</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন
        </button>
        <div className="mt-4 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
          <p className="text-xs text-gray-600 text-left">
            সঠিক স্কলারশিপের সন্ধানে এবং ভেরিফাইড এডমিশন প্রসেসের জন্য আজই আমাদের <br />
            বিনামূল্যে পরামর্শকের সহায়তা নিন!
          </p>
        </div>
      </div>


    
  
    </div>
    
  );
};

export default Details;
