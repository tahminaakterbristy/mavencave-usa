

const TopCourses = ({ university }) => {
  return (
    <div className="p-4">
      {/* Section Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">শীর্ষ কোর্সসমূহ</h2>
        <a href="#" className="text-blue-500 hover:underline">
          সব দেখুন <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Best Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {university?.best_courses?.map((course, index) => (
          <div key={index} className="p-4 border rounded shadow bg-white">
            <h2 className="text-lg font-semibold">{course.title}</h2>
          </div>
        ))}
      </div>

      {/* Tags or Filters (Example Static Tags) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["AI", "Data Science", "Cybersecurity"].map((tag, idx) => (
          <button
            key={idx}
            className="bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-full hover:bg-blue-200 transition-colors duration-200"
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Featured Course Preview (Example with 1st course) */}
      {university?.best_courses?.[0] && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-lg shadow-md p-6 bg-white">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {university.best_courses[0].title}
              </h3>
              <span className="text-2xl">&rarr;</span>
            </div>
            {university.best_courses[0].duration && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-lg">🗓️</span>
                <p className="text-lg">
                  {university.best_courses[0].duration}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-8 text-center">
        <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors duration-200">
          আপনার জন্য সেরা কোর্সটি বেছে নিন{" "}
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default TopCourses;
