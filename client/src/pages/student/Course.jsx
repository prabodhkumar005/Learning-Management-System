import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import coursesData from "./Courses.js"; // Your static list of courses

const Course = ({ course }) => (
  <Link to={`/course/${course.id}`}>
    <div className="bg-white dark:bg-[#1f1f1f] shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
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
    </div>
  </Link>
);

const CourseSkeleton = () => (
  <div className="bg-white dark:bg-[#1f1f1f] shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
    <Skeleton className="w-full h-36" />
    <div className="px-5 py-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-1/4" />
    </div>
  </div>
);

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();

    const query = searchQuery.trim().toLowerCase();

    const results = coursesData.filter((course) =>
      course.title.toLowerCase().includes(query)
    );

    setFilteredCourses(results);
  };

  return (
    <div className="bg-gray-50 dark:bg-[#141414] min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-6">Our Courses</h2>

       

        {/* 🧩 Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => <CourseSkeleton key={i} />)
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Course key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
              ❌ No courses found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
