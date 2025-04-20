import React from "react";
import { useLocation } from "react-router-dom";
import courses from "./Courses.js"; // Make sure this file exports the courses array
import { Link } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase() || "";

  // Filter logic
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery) ||
      course.instructor.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="bg-gray-50 dark:bg-[#141414] min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10">
          Results for "{searchQuery}"
        </h2>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="bg-white dark:bg-[#1f1f1f] shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-36 object-cover"
                />
                <div className="px-5 py-4 space-y-2">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {course.instructor}</span>
                    <span>₹{Number(course.price).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500 dark:text-gray-400 mt-10">
            ❌ No courses found matching "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
