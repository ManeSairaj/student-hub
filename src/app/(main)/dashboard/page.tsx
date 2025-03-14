"use client";
import Card from "@/components/Card";
import React, { useState } from "react";

const page = () => {
  const [courses, setCourses] = useState([
    {
      code: "MATH 301",
      title: "Advanced Calculus",
      professor: "Prof. Anderson",
      time: "Mon/Wed 10:00 AM",
      color: "blue",
      marksObtained: 85,
      totalMarks: 100,
    },
    {
      code: "PHYS 201",
      title: "Quantum Physics",
      professor: "Prof. Thompson",
      time: "Tue/Thu 2:00 PM",
      color: "purple",
      marksObtained: 85,
      totalMarks: 100,
    },
    {
      code: "CS 401",
      title: "Data Structures",
      professor: "Prof. Martinez",
      time: "Mon/Wed 2:00 PM",
      color: "green",
      marksObtained: 85,
      totalMarks: 100,
    },
    {
      code: "PSY 301",
      title: "Cognitive Psychology",
      professor: "Prof. Williams",
      time: "Tue/Thu 11:00 AM",
      color: "red",
      marksObtained: 85,
      totalMarks: 100,
    },
    {
      code: "HIST 202",
      title: "World History",
      professor: "Prof. Johnson",
      time: "Fri 9:00 AM",
      color: "yellow",
      marksObtained: 85,
      totalMarks: 100,
    },
    {
      code: "BIO 301",
      title: "Molecular Biology",
      professor: "Prof. Garcia",
      time: "Mon/Wed 8:00 AM",
      color: "pink",
      marksObtained: 85,
      totalMarks: 100,
    },
  ]);

  const handleUpdateMarks = (courseCode: string, updates: any) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => {
        if (course.code === courseCode) {
          const updatedCourse = { ...course, ...updates };
          // Recalculate total marks
          const total =
            (updatedCourse.unitTest1 || 0) +
            (updatedCourse.unitTest2 || 0) +
            (updatedCourse.midSemester || 0) +
            (updatedCourse.finalSemester || 0);
          return { ...updatedCourse, marksObtained: total };
        }
        return course;
      })
    );
  };

  return (
    <div className="flex-1 p-6 min-h-screen">
      {/* <h2 className="text-white text-xl font-semibold mb-4">
        Student Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {courses.map((course, index) => (
          <Card key={index} course={course} onUpdateMarks={handleUpdateMarks} />
        ))}
      </div> */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Welcome!</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6 my-8">
        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-3xl text-blue-500">
              school
            </span>
            <div>
              <p className="text-gray-600 text-sm">Current GPA</p>
              <p className="text-2xl font-bold">3.8</p>
            </div>
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-3xl text-green-500">
              event
            </span>
            <div>
              <p className="text-gray-600 text-sm">Attendance</p>
              <p className="text-2xl font-bold">95%</p>
            </div>
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-3xl text-purple-500">
              assignment
            </span>
            <div>
              <p className="text-gray-600 text-sm">Assignments</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Upcoming Classes</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-500">
                  schedule
                </span>
                <div>
                  <p className="font-medium">Mathematics</p>
                  <p className="text-sm text-gray-600">Room 301</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">09:00 AM</p>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500">
                  schedule
                </span>
                <div>
                  <p className="font-medium">Physics</p>
                  <p className="text-sm text-gray-600">Room 205</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">11:00 AM</p>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Due Assignments</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">
                  assignment
                </span>
                <div>
                  <p className="font-medium">Math Quiz</p>
                  <p className="text-sm text-gray-600">Due Today</p>
                </div>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500">
                  assignment
                </span>
                <div>
                  <p className="font-medium">Physics Lab Report</p>
                  <p className="text-sm text-gray-600">Due Tomorrow</p>
                </div>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-xl font-bold mb-4">Recommended Resources</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-blue-500">
                article
              </span>
              <p className="font-medium">Advanced Calculus PDF</p>
            </div>
            <p className="text-sm text-gray-600">Trending in Mathematics</p>
            <div className="mt-2 text-blue-500 text-sm hover:underline">
              Download
            </div>
          </div>
          <div className="p-4 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-red-500">
                play_circle
              </span>
              <p className="font-medium">Quantum Physics Course</p>
            </div>
            <p className="text-sm text-gray-600">Popular on EdX</p>
            <div className="mt-2 text-blue-500 text-sm hover:underline">
              Watch Now
            </div>
          </div>
          <div className="p-4 bg-gray-500/10 rounded-lg hover:bg-gray-900/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-green-500">
                public
              </span>
              <p className="font-medium">Science Daily Articles</p>
            </div>
            <p className="text-sm text-gray-600">Latest Research Updates</p>
            <div className="mt-2 text-blue-500 text-sm hover:underline">
              Visit Website
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
