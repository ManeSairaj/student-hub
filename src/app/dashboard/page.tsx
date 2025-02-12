"use client";
import CourseDashboard from "@/components/CourseDashboard";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <div className="flex flex-col lg:flex-row relative z-10">
          <Sidebar />
          <CourseDashboard />
        </div>
      </div>
    </div>
  );
};

export default Page;
