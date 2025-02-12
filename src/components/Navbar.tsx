import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8 py-4 shadow-white/40 font-bold flex`}
    >
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
        <div className="text-[24px] font-bold text-gray-400 flex items-center opacity-100 transition-colors py-2 px-3 cursor-pointer">
          Student Hub
          <span className="material-symbols-outlined text-[34px] text-gray-400 ml-2">
            school
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <details className="relative group">
            <summary className="text-gray-400 cursor-pointer hover:text-gray-100 flex items-center hover:bg-[#091E4224] py-2 px-3">
              Courses
              <span className="material-symbols-outlined ml-1">
                arrow_drop_down
              </span>
            </summary>
            <div className="absolute z-10 hidden group-open:block bg-gray-800 text-gray-400 w-[300px]">
              <ul className="p-2 space-y-2">
                <li className="cursor-pointer hover:text-gray-100 flex justify-between items-center py-1 px-2 text-sm hover:bg-[#091E4224] rounded-md">
                  Current Courses
                </li>
                <li className="cursor-pointer hover:text-gray-100 flex justify-between items-center py-1 px-2 text-sm hover:bg-[#091E4224] rounded-md">
                  Grades
                </li>
              </ul>
            </div>
          </details>

          <details className="relative group">
            <summary className="text-gray-400 cursor-pointer hover:text-gray-100 flex items-center hover:bg-[#091E4224] py-2 px-3">
              Resources
              <span className="material-symbols-outlined ml-1">
                arrow_drop_down
              </span>
            </summary>
          </details>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 lg:mt-0 ml-auto">
        <div className="relative flex-1 lg:flex-none">
          {/* <span className="material-symbols-outlined absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            search
          </span> */}
          <input
            type="text"
            className="w-full lg:w-auto pl-8 pr-4 py-2 rounded-md bg-[#1C1C1C] text-gray-400 placeholder-gray-400 focus:outline-none"
            placeholder="search..."
          />
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <div className="cursor-pointer hover:bg-[#091E4224] hover:rounded-md p-1">
          <span className="material-symbols-outlined text-gray-400">
            notifications
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
