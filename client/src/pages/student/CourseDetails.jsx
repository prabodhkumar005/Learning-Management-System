// src/pages/CourseDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "./Courses.js";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <div className="p-6 text-center text-red-600">Course not found</div>;

  return (
    <div className="bg-gray-50 dark:bg-[#141414] min-h-screen">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition hover:underline"
        >
          ← Back
        </button>

        <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-md overflow-hidden">
          <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover" />
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-bold">{course.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">Instructor: <strong>{course.instructor}</strong></p>
            <p className="text-xl text-green-600 font-semibold">₹{course.price.toLocaleString("en-IN")}</p>
            <p className="text-gray-700 dark:text-gray-200">
              Learn all about {course.title}. This course includes comprehensive lessons, real-world projects, and access to expert instructors.
            </p>
            <div className="aspect-video bg-black rounded-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Course Video"
                allowFullScreen
              ></iframe>
            </div>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
