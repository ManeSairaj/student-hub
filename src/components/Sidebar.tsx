import React from "react";

const Sidebar = () => {
  return (
    <div
      className={`w-full lg:w-[240px] py-4 bg-transparent lg:h-[calc(100vh-80px)] border-b lg:border-b-0 lg:border-r border-gray-600/30 `}
    >
      <ul className="flex flex-row lg:flex-col gap-x-4 lg:gap-y-2 px-4">
        <li className="text-gray-400 cursor-pointer hover:text-gray-100 flex items-center py-2 px-4 text-sm hover:bg-[#091E4224] rounded-md">
          <span className="material-symbols-outlined mr-2">dashboard</span>
          Dashboard
        </li>
        <li className="text-gray-400 cursor-pointer hover:text-gray-100 flex items-center py-2 px-4 text-sm hover:bg-[#091E4224] rounded-md">
          <span className="material-symbols-outlined mr-2">book</span>
          My Courses
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
