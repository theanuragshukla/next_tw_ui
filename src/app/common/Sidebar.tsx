"use client";
import { useState } from "react";
import {
  InboxIcon,
  AnnotationIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  ViewListIcon,
  CalendarIcon,
  ChartPieIcon,
  UserGroupIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

import { BellIcon } from "@heroicons/react/solid";

export default function Sidebar() {
  const SIDEBAR_ITEMS = [
    {
      icon: AnnotationIcon,
      title: "Discussion Forum",
      link: "#",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Market Stories",
      link: "#",
    },
    {
      icon: InboxIcon,
      title: "Sentiment",
      link: "#",
    },
    {
      icon: UserGroupIcon,
      title: "Market",
      link: "#",
    },
    {
      icon: ChartPieIcon,
      title: "Sector",
      link: "#",
    },
    {
      icon: ViewListIcon,
      title: "Watchlist",
      link: "#",
    },
    {
      icon: CalendarIcon,
      title: "Events",
      link: "#",
    },
    {
      icon: NewspaperIcon,
      title: "News/Interview",
      link: "#",
    },
  ];

  const [selected, setSelected] = useState(SIDEBAR_ITEMS[0].title);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`h-screen flex md:sticky fixed top-0 text-white ${
        !isSidebarOpen ? "w-16" : "auto"
      }`}
    >
      <div
        className={`${isSidebarOpen ? "block" : "hidden"} bg-blue-950 w-64 p-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex align-center gap-1">
            <img
              src="https://i.pravatar.cc/150"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />{" "}
            <div className="flex font-semibold flex-col justify-center">
              {" "}
              John Doe{" "}
            </div>
          </div>

          <div className="flex items-center relative">
            <BellIcon className="h-6 w-6 mr-1 stroke-white fill-white" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <ul>
          {SIDEBAR_ITEMS.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelected(item.title)}
              className={`flex cursor-pointer items-center my-2 p-2 pl-4 rounded-full ${
                selected === item.title ? "bg-sky-900" : "transparent"
              }`}
            >
              <item.icon className="h-6 w-6 mr-2" />
              <text className="text-white font-medium"> {item.title} </text>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow">
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-950 text-white h-24 w-6 rounded-r"
        >
          {isSidebarOpen ? (
            <ChevronLeftIcon className="w-6 h-6" />
          ) : (
            <ChevronRightIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
