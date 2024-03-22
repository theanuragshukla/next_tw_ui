"use client";
import Heading from "./common/Heading";
import Sidebar from "./common/Sidebar";
import { ImageCard } from "./common/ImageCard";
import { Card } from "./common/Card";
import TabBar from "./common/TabBar";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="grid md:grid-cols-[auto_1fr]  gap-4">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
        <TabBar
          tabs={["Discussion Forum", "Market Stories"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="md:hidden"
        />
        <div
          className={`flex flex-col items-center min-h-screen py-2 gap-8 w-full max-w-screen-md mx-auto md:flex ${
            activeTab === 0 ? "flex" : "hidden"
          }`}
        >
          <Heading
            title="Discussion Forum"
            extraClass="hidden md:block text-md"
          />
          {[...Array(10)].map(() => (
            <Card key={Math.random()} />
          ))}
        </div>
        <div
          className={`flex flex-col items-center min-h-screen py-2 gap-8 w-full mx-auto md:flex ${
            activeTab === 1 ? "flex" : "hidden"
          }`}
        >
          <Heading
            title="Market Stories"
            extraClass="hidden md:block text-md"
          />
          {[...Array(6)].map(() => (
            <ImageCard key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
}
