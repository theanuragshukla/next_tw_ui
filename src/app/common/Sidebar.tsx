import { useState } from "react";
import { BellIcon, HomeIcon, UserIcon, InboxIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`h-screen flex md:sticky fixed top-0 ${!isSidebarOpen ? "w-16" : "auto"}`}>
      <div className={`${isSidebarOpen ? "block" : "hidden"} bg-gray-200 w-64 p-4`}>
        {/* Avatar, User Name, and Notification */}
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full mr-2" /> {/* Avatar */}
          <div>
            <p className="font-semibold">Hello, User</p> {/* User name */}
            <div className="flex items-center text-red-500">
              <BellIcon className="h-4 w-4 mr-1" /> {/* Bell icon with red dot */}
              <span className="text-xs">Notifications</span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-4 border-gray-400" />
        {/* List Items */}
        <ul>
          <li className="mb-4 flex items-center">
            <HomeIcon className="w-6 h-6 mr-2" /> {/* Home icon */}
            <a href="#" className="text-blue-500">
              Home
            </a>
          </li>
          <li className="mb-4 flex items-center">
            <UserIcon className="w-6 h-6 mr-2" /> {/* User icon */}
            <a href="#" className="text-blue-500">
              About
            </a>
          </li>
          <li className="mb-4 flex items-center">
            <InboxIcon className="w-6 h-6 mr-2" /> {/* Inbox icon */}
            <a href="#" className="text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-grow">
        {/* Button to toggle the sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-950 text-white h-24 w-6"
        >
          {isSidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

